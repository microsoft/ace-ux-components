/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { SUCCESS_IMAGE_ALT_TEXT, LARGE_IMAGE_SIZE, SMALL_IMAGE_SIZE } from "./constants";
import { SuccessView } from "./SuccessView";
import { StateViewType } from "./StateView.types";
import { HostTheme } from "../types";

describe("SuccessView Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });
});

const testHostTheme: HostTheme = "light";

const getTestSuccessView = (stateViewType: StateViewType = "Section"): SuccessView => {
  return new SuccessView(stateViewType, "Test success view", testHostTheme);
};

it("Should create state view component", () => {
  const stateView = getTestSuccessView();
  expect(stateView).toBeDefined();
  expect(stateView.items.length).toEqual(2);
});

it("Should show correct success icon image for section success views", () => {
  const fullStateView: any = getTestSuccessView();
  expect(fullStateView.items[0].columns[0].items[0].type).toEqual("Image");
  expect(fullStateView.items[0].columns[0].items[0].height).toEqual(SMALL_IMAGE_SIZE);
  expect(fullStateView.items[0].columns[0].items[0].width).toEqual(SMALL_IMAGE_SIZE);
  expect(fullStateView.items[0].columns[0].items[0].altText).toEqual(SUCCESS_IMAGE_ALT_TEXT);
});

it("Should show correct success icon image for full page success views", () => {
  const fullStateView: any = getTestSuccessView("Full");
  expect(fullStateView.items[0].columns[0].items[0].type).toEqual("Image");
  expect(fullStateView.items[0].columns[0].items[0].height).toEqual(LARGE_IMAGE_SIZE);
  expect(fullStateView.items[0].columns[0].items[0].width).toEqual(LARGE_IMAGE_SIZE);
  expect(fullStateView.items[0].columns[0].items[0].altText).toEqual(SUCCESS_IMAGE_ALT_TEXT);
});
