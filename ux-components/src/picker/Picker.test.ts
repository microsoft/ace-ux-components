/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseAdaptiveCardView, ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ColumnSet, ElementType, FontSize, FontWeight, Image, TextBlock } from "../elements";
import { SectionListData } from "../types";
import { ListOptions, SectionOptions } from "./PickerHelpers";
import { Picker } from "./Picker";

jest.mock("@microsoft/sp-adaptive-card-extension-base", () => ({
  BaseAdaptiveCardView: {
    call: jest.fn(),
    apply: jest.fn(),
    prototype: {
      quickViewNavigator: {
        push: jest.fn(),
        register: jest.fn(),
      },
    },
  },
  QuickViewNavigator: {
    push: jest.fn(),
    register: jest.fn(),
  },
}));

type MockState = {};

class StubQV extends BaseAdaptiveCardView<{}, MockState, {}> {
  public get template(): ISPFxAdaptiveCard {
    return {};
  }
}

const qv = new StubQV();
const data: Array<{ name: string }> = [{ name: "John Doe" }, { name: "Joe Schmoe" }];

describe("Picker component", () => {
  let picker: Picker<MockState>;
  beforeEach(() => {
    picker = new Picker<MockState>("testPickerID", {
      accessibilityLabel: "Test label",
      isHeader: false,
      label: "John Doe",
      listData: data,
      listKeys: { titleKey: "name" },
      viewHeaderLabel: "Testing",
    });
  });

  it("Should render properly", () => {
    expect((picker.items[0] as ColumnSet).columns.length).toEqual(2);
    expect(((picker.items[0] as ColumnSet).columns[0].items[0] as TextBlock).size).toBeUndefined();
    expect(((picker.items[0] as ColumnSet).columns[0].items[0] as TextBlock).weight).toBeUndefined();
    expect(((picker.items[0] as ColumnSet).columns[1].items[0] as Image).height).toEqual("16px");
    expect(((picker.items[0] as ColumnSet).columns[1].items[0] as Image).width).toEqual("16px");
  });

  it("Should render as a header", () => {
    picker = new Picker<MockState>("testPickerID", {
      accessibilityLabel: "Test label",
      isHeader: true,
      label: "John Doe",
      listData: data,
      listKeys: { titleKey: "name" },
      viewHeaderLabel: "Testing",
    });

    expect(((picker.items[0] as ColumnSet).columns[0].items[0] as TextBlock).size).toEqual(FontSize.Large);
    expect(((picker.items[0] as ColumnSet).columns[0].items[0] as TextBlock).weight).toEqual(FontWeight.Bolder);
  });

  it("Should add filtering options", () => {
    const testPlaceholder: string = "test placeholder";
    picker.withFiltering(testPlaceholder);

    expect(picker["filterPlaceholder"]).toEqual(testPlaceholder);
  });

  it("Should add only one left icon", () => {
    picker.withLeftIcon("testIcon", "testIconAltText");
    expect((picker.items[0] as ColumnSet).columns[0].items[0].type).toEqual(ElementType.Image);
    expect((picker.items[0] as ColumnSet).columns[1].items[0].type).toEqual(ElementType.TextBlock);

    picker.withLeftIcon("testIcon", "testIconAltText");
    expect((picker.items[0] as ColumnSet).columns[0].items[0].type).toEqual(ElementType.Image);
    expect((picker.items[0] as ColumnSet).columns[1].items[0].type).toEqual(ElementType.TextBlock);
  });

  it("Should add list options", () => {
    const listOptions: ListOptions = { withRadio: true };

    picker.withListOptions(listOptions);
    expect(picker["listOptions"]).toEqual(listOptions);
  });

  it("Should add only one text value to the right", () => {
    const value: string = "test value";
    picker.withRightValue(value);
    expect((picker.items[0] as ColumnSet).columns[0].items[0].type).toEqual(ElementType.TextBlock);
    expect((picker.items[0] as ColumnSet).columns[1].items[0].type).toEqual(ElementType.TextBlock);
    expect((picker.items[0] as ColumnSet).columns[2].items[0].type).toEqual(ElementType.Image);

    picker.withRightValue(value);
    expect((picker.items[0] as ColumnSet).columns[0].items[0].type).toEqual(ElementType.TextBlock);
    expect((picker.items[0] as ColumnSet).columns[1].items[0].type).toEqual(ElementType.TextBlock);
    expect((picker.items[0] as ColumnSet).columns[2].items[0].type).toEqual(ElementType.Image);

    picker = new Picker<MockState>("testPickerID", {
      accessibilityLabel: "Test label",
      isHeader: false,
      label: "John Doe",
      listData: data,
      listKeys: { titleKey: "name" },
      viewHeaderLabel: "Testing",
    });

    picker.withLeftIcon("testIcon", "testIconAltText");
    picker.withRightValue(value);
    expect((picker.items[0] as ColumnSet).columns[0].items[0].type).toEqual(ElementType.Image);
    expect((picker.items[0] as ColumnSet).columns[1].items[0].type).toEqual(ElementType.TextBlock);
    expect((picker.items[0] as ColumnSet).columns[2].items[0].type).toEqual(ElementType.TextBlock);
    expect((picker.items[0] as ColumnSet).columns[3].items[0].type).toEqual(ElementType.Image);
  });

  it("Should add the section list data and options", () => {
    const sectionListData: SectionListData[] = [
      {
        data,
        sectionName: "test 1",
        listKeys: {
          titleKey: "name",
        },
      },
    ];
    const sectionListOptions: SectionOptions = {
      withExpansion: true,
    };

    picker.withSectionList(sectionListData, sectionListOptions);
    expect(picker["sectionListData"]).toEqual(sectionListData);
    expect(picker["sectionListOptions"]).toEqual(sectionListOptions);
  });

  it("Should open the picker view", () => {
    picker.openView(qv.quickViewNavigator, jest.fn());
    expect(qv.quickViewNavigator.push).toHaveBeenCalled();
  });

  it("Should open the picker view with listOptions", () => {
    const options: ListOptions = { withRadio: true };
    picker.withListOptions(options);
    picker.openView(qv.quickViewNavigator, jest.fn());
    expect(qv.quickViewNavigator.push).toHaveBeenCalled();
  });
});
