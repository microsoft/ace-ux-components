/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { InputToggleValue, TextBlock } from "../elements";
import { ToggleRow } from "./ToggleRow";
import { ManageCalendarData, ToggleData } from "./ToggleRow.types";

describe("ToggleRow Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });
});

const toggleData: ToggleData = {
  id: "toggle_id",
  title: "toggle_title",
  description: "toggle_description",
  warningMessage: "toggle_warningMessage",
  isSubViewAvailable: false,
  pendingMessage: "",
  completedMessage: "",
};
const manageCalendarData: ManageCalendarData = {
  id: "test",
  currentValue: InputToggleValue.TRUE,
  isSubViewAvailable: false,
};

it("Should create toggle row component with deafult value true", () => {
  const toggleRow: any = new ToggleRow(toggleData, manageCalendarData);
  expect(toggleRow).toBeDefined();
  expect(toggleRow.items.length).toEqual(1);
  expect(toggleRow.items[0].columns[0].items.length).toEqual(3);
  expect(toggleRow.items[0].columns[0].items[0].text).toEqual("toggle_title");
  expect(toggleRow.items[0].columns[0].items[1].text).toEqual("toggle_description");
  expect(toggleRow.items[0].columns[1].items[0].type).toEqual("Input.Toggle");
  expect(toggleRow.items[0].columns[1].selectAction.id).toEqual("toggle_id");
  expect(toggleRow.items[0].columns[1].selectAction.data).toEqual({
    id: "test",
    currentValue: "true",
    isSubViewAvailable: false,
  });
});

it("Should create toggle row component with deafult value false", () => {
  const data: ManageCalendarData = {
    id: "test",
    currentValue: InputToggleValue.FALSE,
    isSubViewAvailable: false,
  };
  const toggleRow: any = new ToggleRow(toggleData, data);
  expect(toggleRow).toBeDefined();
  expect(toggleRow.items.length).toEqual(1);
  expect(toggleRow.items[0].columns[0].items.length).toEqual(3);
  expect(toggleRow.items[0].columns[0].items[0].text).toEqual("toggle_title");
  expect(toggleRow.items[0].columns[0].items[1].text).toEqual("toggle_description");
  expect(toggleRow.items[0].columns[1].items[0].type).toEqual("Input.Toggle");
  expect(toggleRow.items[0].columns[1].selectAction.id).toEqual("toggle_id");
  expect(toggleRow.items[0].columns[1].selectAction.data).toEqual({
    id: "test",
    currentValue: "false",
    isSubViewAvailable: false,
  });
});

it("Should display warning message(banner) text block", () => {
  const toggleRow: any = new ToggleRow(toggleData, manageCalendarData);
  let warningTextBlock: TextBlock = new TextBlock("");
  if (manageCalendarData?.currentValue === "true") {
    warningTextBlock = new TextBlock(toggleData.warningMessage || "");
  }
  expect(warningTextBlock).toBeDefined();
  expect(warningTextBlock.text).toEqual("toggle_warningMessage");
  expect(toggleRow.items[0].columns[0].items[2].text).toEqual("toggle_warningMessage");
});
