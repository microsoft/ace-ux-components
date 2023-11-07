/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseAdaptiveCardQuickView, ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ColumnSet, ElementType, FontSize, FontWeight, Image, TextBlock } from "../elements";
import { HostTheme, SectionListData } from "../types";
import { ListOptions, SectionOptions } from "./PickerHelpers";
import { Picker } from "./Picker";

jest.mock("@microsoft/sp-adaptive-card-extension-base", () => ({
  BaseAdaptiveCardQuickView: () => ({
    call: jest.fn(),
    apply: jest.fn(),
    prototype: {
      quickViewNavigator: {
        push: jest.fn(),
        register: jest.fn(),
      },
    },
  }),
  QuickViewNavigator: {
    push: jest.fn(),
    register: jest.fn(),
  },
}));

type MockState = {};

class StubQV extends BaseAdaptiveCardQuickView<{}, MockState, {}> {
  public get template(): ISPFxAdaptiveCard {
    return {};
  }
}

const qv = new StubQV();
const data: Array<{ name: string }> = [{ name: "John Doe" }, { name: "Joe Schmoe" }];

const testHostTheme: HostTheme = "light";

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
      hostTheme: testHostTheme,
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
      hostTheme: testHostTheme,
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
      hostTheme: testHostTheme,
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

  xit("Should open the picker view", () => {
    picker.openView(qv.quickViewNavigator as any, jest.fn());
    expect(qv.quickViewNavigator.push).toHaveBeenCalled();
  });

  xit("Should open the picker view with listOptions", () => {
    const options: ListOptions = { withRadio: true };
    picker.withListOptions(options);
    picker.openView(qv.quickViewNavigator as any, jest.fn());
    expect(qv.quickViewNavigator.push).toHaveBeenCalled();
  });
});
