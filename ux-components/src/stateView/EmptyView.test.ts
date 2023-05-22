/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { EMPTY_IMAGE_ALT_TEXT, LARGE_IMAGE_SIZE, SMALL_IMAGE_SIZE } from "./constants";
import { EmptyView } from "./EmptyView";
import { StateViewType } from "./StateView.types";

describe("EmptyView Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });
});

const getTestEmptyView = (stateViewType: StateViewType = "Section"): EmptyView => {
  return new EmptyView(stateViewType, "Test empty view");
};

it("Should create state view component", () => {
  const stateView = getTestEmptyView();
  expect(stateView).toBeDefined();
  expect(stateView.items.length).toEqual(2);
});

it("Should show correct empty icon image for section empty views", () => {
  const fullStateView: any = getTestEmptyView();
  expect(fullStateView.items[0].columns[0].items[0].type).toEqual("Image");
  expect(fullStateView.items[0].columns[0].items[0].height).toEqual(SMALL_IMAGE_SIZE);
  expect(fullStateView.items[0].columns[0].items[0].width).toEqual(SMALL_IMAGE_SIZE);
  expect(fullStateView.items[0].columns[0].items[0].altText).toEqual(EMPTY_IMAGE_ALT_TEXT);
});

it("Should show correct empty icon image for full page empty views", () => {
  const fullStateView: any = getTestEmptyView("Full");
  expect(fullStateView.items[0].columns[0].items[0].type).toEqual("Image");
  expect(fullStateView.items[0].columns[0].items[0].height).toEqual(LARGE_IMAGE_SIZE);
  expect(fullStateView.items[0].columns[0].items[0].width).toEqual(LARGE_IMAGE_SIZE);
  expect(fullStateView.items[0].columns[0].items[0].altText).toEqual(EMPTY_IMAGE_ALT_TEXT);
});
