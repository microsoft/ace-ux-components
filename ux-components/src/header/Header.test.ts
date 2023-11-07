/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { BaseViewWithComponents } from "../baseQuickView";
import { ColumnSet, Container} from "../elements";
import { Picker, PickerProps } from "../picker";
import { HostTheme, MOBILE } from "../types";
import { Header, HeaderType } from "./Header";

jest.mock("@microsoft/sp-http", () => ({}));
jest.mock("@microsoft/sp-core-library", () => ({}));
jest.mock("@microsoft/sp-adaptive-card-extension-base", () => ({
  BaseAdaptiveCardQuickView: {
    apply: jest.fn(),
    call: jest.fn(),
    prototype: {
      quickViewNavigator: {
        push: jest.fn(),
        register: jest.fn(),
      },
    },
  },
}));

jest.mock("../fileAttachment/FileView", () => ({
  FileView: () => ({}),
}));
jest.mock("../picker/PickerListView", () => ({
  PickerListView: () => ({}),
}));
jest.mock("../picker/Picker", () => ({
  Picker: () => ({}),
}));
jest.mock("../baseQuickView/BaseViewWithComponents", () => ({
  BaseViewWithComponents: () => ({}),
}));

const testHostTheme: HostTheme = "light";

class StubView extends BaseViewWithComponents<{}, { list: [] }, {}> {
  get template(): ISPFxAdaptiveCard {
    throw new Error("Method not implemented.");
  }
}

describe("Header component", () => {
  it("Should render a basic header", () => {
    const header: Header = new Header(HeaderType.Basic, "Test title");
    expect((header.items[1] as ColumnSet).columns.length === 1);
  });

  it("Should render a basic header with a description", () => {
    const header: Header = new Header(HeaderType.Basic, "Test title").withDescription("Test description");
    expect(header.items.length === 3);
  });

  it("Should render a basic header with a call to action", () => {
    const header: Header = new Header(HeaderType.Basic, "Test title").withCallToAction("testId", "Test action title");
    expect((header.items[1] as ColumnSet).columns.length === 2);
  });

  it("Should render an empty header", () => {
    const header: Header = new Header(HeaderType.Empty);
    expect(header.items.length === 1);
  });

  it("Should render header for mobile", () => {
    const header: Header = new Header(HeaderType.Empty, "", MOBILE);
    expect((header.items[0] as Container).backgroundImage).toBeDefined();
  });

  it("Should render a picker header", () => {
    const stub: StubView = new StubView();
    const props: PickerProps = {
      accessibilityLabel: "Test label",
      isHeader: true,
      label: "testLabel",
      listData: [{ name: "John Doe" }],
      listKeys: { titleKey: "name" },
      viewHeaderLabel: "Testing",
      hostTheme: testHostTheme,
    };

    const header: Header = new Header(
      HeaderType.Picker,
      "Test unused title",
      "",
      new Picker<{ list: unknown[] }>("pickerComponentID", props)
    );

    expect(header.items.length === 2);
  });

  it("Should render an empty header when the header type isn't recognized", () => {
    // @ts-ignore
    const header: Header = new Header(HeaderType.SomethingElse);
    expect(header.items.length === 1);
  });
});
