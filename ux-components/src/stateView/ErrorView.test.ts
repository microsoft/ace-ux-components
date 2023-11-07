/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { HostTheme } from "../types";
import { ERROR_IMAGE_ALT_TEXT, LARGE_IMAGE_SIZE, SMALL_IMAGE_SIZE } from "./constants";
import { ErrorView } from "./ErrorView";
import { StateViewType } from "./StateView.types";

describe("ErrorView Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });
});

const testHostTheme: HostTheme = "light";

const getTestErrorView = (stateViewType: StateViewType = "Section"): ErrorView => {
  return new ErrorView(stateViewType, "Test error view", testHostTheme);
};

it("Should create state view component", () => {
  const stateView = getTestErrorView();
  expect(stateView).toBeDefined();
  expect(stateView.items.length).toEqual(2);
});

it("Should show correct error icon image for section error views", () => {
  const fullStateView: any = getTestErrorView();
  expect(fullStateView.items[0].columns[0].items[0].type).toEqual("Image");
  expect(fullStateView.items[0].columns[0].items[0].height).toEqual(SMALL_IMAGE_SIZE);
  expect(fullStateView.items[0].columns[0].items[0].width).toEqual(SMALL_IMAGE_SIZE);
  expect(fullStateView.items[0].columns[0].items[0].altText).toEqual(ERROR_IMAGE_ALT_TEXT);
});

it("Should show correct error icon image for full page error views", () => {
  const fullStateView: any = getTestErrorView("Full");
  expect(fullStateView.items[0].columns[0].items[0].type).toEqual("Image");
  expect(fullStateView.items[0].columns[0].items[0].height).toEqual(LARGE_IMAGE_SIZE);
  expect(fullStateView.items[0].columns[0].items[0].width).toEqual(LARGE_IMAGE_SIZE);
  expect(fullStateView.items[0].columns[0].items[0].altText).toEqual(ERROR_IMAGE_ALT_TEXT);
});
