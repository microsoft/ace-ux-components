/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { List, SectionList } from "../list";
import { ListActionID } from "../list/types";
import { PickerProps } from "../picker";
import { ComplexComponentType, FileAttachmentProps, ListItem, ListKeys, ListType, NewListType } from "../types";
import { BaseViewWithComponents } from "./BaseViewWithComponents";

jest.mock("@microsoft/sp-http", () => ({}));
jest.mock("@microsoft/sp-core-library", () => ({}));
jest.mock("@microsoft/sp-adaptive-card-extension-base", () => ({
  BaseAdaptiveCardView: {
    apply: jest.fn(),
    call: jest.fn(),
    prototype: {
      quickViewNavigator: {
        push: jest.fn(),
        register: jest.fn(),
      },
      setState: jest.fn(),
    },
  },
}));

type MockState = {
  file: string;
  listData: any[];
  item: any;
};

class StubQuickView extends BaseViewWithComponents<{}, MockState, {}> {
  public get template() {
    return {};
  }
}

const mockProps: FileAttachmentProps = {
  id: "testId",
  filesList: [],
  maxSize: 100,
  isFileTooLarge: false,
  selectedFileStateKey: "files",
  maxSizeExceededMessage: "File too large",
};

const mockUpdatedProps: FileAttachmentProps = {
  id: "testId",
  filesList: [],
  maxSize: 500,
  isFileTooLarge: false,
  selectedFileStateKey: "files",
  maxSizeExceededMessage: "File too large",
};

const mockBasicListData = [{ name: "John Doe" }, { name: "Mary Jane" }];
const mockKeys: ListKeys = { titleKey: "name" };

describe("BaseViewWithComponents", () => {
  const quickView = new StubQuickView();
  quickView["registeredComponentsLegacy"] = {};

  it("Should register a component", () => {
    const component = quickView["instanciateComponent"](mockProps, ComplexComponentType.FileAttachment);
    expect(component.actionId).toEqual("testId");
  });

  it("Should update the component props if it already exists", () => {
    const component = quickView["instanciateComponent"](mockUpdatedProps, ComplexComponentType.FileAttachment);
    expect(component.actionId).toEqual("testId");
  });

  it("Should throw an exception if the component type isn't recognized", () => {
    expect(() => {
      // @ts-ignore
      quickView["getComponent"]("Test type", mockProps);
    }).toThrowError(new Error("Component type doesn't exist."));
  });

  it("Should call the component's action if the triggered action is container in the registered components", () => {
    quickView.onAction({ id: "testId", data: { id: "testId" }, type: "Submit" });
    expect(quickView.quickViewNavigator.push).toHaveBeenCalledWith("testId");
  });
});

describe("BaseViewWithComponents for Lists", () => {
  const quickView = new StubQuickView();
  quickView["components"] = {};
  quickView["registeredComponentsLegacy"] = {};

  it("Should register List component", () => {
    const component = quickView["registerComponent"](
      new List("listID", NewListType.BasicList, mockBasicListData, mockKeys)
    );

    expect(component.type).toEqual("Container");
  });

  it("Should detect radioAction", () => {
    const component: List = quickView["registerComponent"](
      new List("listID", NewListType.BasicList, mockBasicListData, mockKeys)
    ) as List;
    component.withRadioButton();

    quickView.onAction({
      id: `${ListActionID.RadioAction}0-listID`,
      data: { selectedItemIndex: 0, id: `${ListActionID.RadioAction}0`, componentID: "listID" },
      type: "Submit",
    });
    expect(component.type).toEqual("Container");
    expect(quickView.setState).toBeCalled();
  });

  it("Should detect pagination actions", () => {
    const componentID: string = "listID";
    quickView["registerComponent"](new List(componentID, NewListType.BasicList, mockBasicListData, mockKeys));
    quickView.onAction({
      id: ListActionID.NextPage,
      data: { id: ListActionID.NextPage, componentID: componentID },
      type: "Submit",
    });
    expect(quickView.setState).toHaveBeenCalled();

    quickView.onAction({
      id: ListActionID.PreviousPage,
      data: { id: ListActionID.PreviousPage, componentID: componentID },
      type: "Submit",
    });
    expect(quickView.setState).toHaveBeenCalled();
  });

  it("Should register a SectionList properly", () => {
    const sectionList: SectionList = new SectionList("people", NewListType.BasicList, [
      { data: [{ name: "John Doe" }], sectionName: "People", listKeys: { titleKey: "name" } },
    ]);
    let component = quickView["registerComponent"](sectionList);

    (component.items[1] as List).setStartIndex(25);
    component.items[1].setIsVisible(false);
    component = quickView["registerComponent"](component);

    expect(component.items[1].isVisible).toBeFalsy();
  });
});
