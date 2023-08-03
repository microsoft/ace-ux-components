/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LARGE_IMAGE_SIZE, SMALL_IMAGE_SIZE } from "./constants";
import { StateView } from "./StateView";
import { StateViewButtonProps, StateViewType } from "./StateView.types";
import { HostTheme } from "@microsoft/sp-adaptive-card-extension-base";

describe("StateView Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });
});

const stateViewTitle = "test state title";
const stateViewDesc = "test state description";
const defaultAltText = "Error Alt Text";

const testHostTheme: HostTheme = "light";

const testAction: StateViewButtonProps = {
  actionID: "1",
  title: "Test Title",
  altText: "Test Alt Text",
};

const getTestStateView = (stateViewType: StateViewType = "Section"): StateView => {
  return new StateView(stateViewType, stateViewTitle, defaultAltText, "Error", testHostTheme);
};

it("Should create state view component", () => {
  const stateView = getTestStateView();
  expect(stateView).toBeDefined();
  expect(stateView.items.length).toEqual(2);
});

it("Should show title and image on state view component ", () => {
  const stateView: any = getTestStateView();
  expect(stateView.items[1].text).toEqual(stateViewTitle);
  expect(stateView.items[0].columns[0].items[0].type).toEqual("Image");
  expect(stateView.items[0].columns[0].items[0].altText).toEqual(defaultAltText);
  expect(stateView.items[0].columns[0].items[0].isVisible).toEqual(true);
  expect(stateView.items[0].columns[0].items[0].height).toEqual(SMALL_IMAGE_SIZE);
  expect(stateView.items[0].columns[0].items[0].width).toEqual(SMALL_IMAGE_SIZE);
});

it("Should show bigger images for full page state views", () => {
  const fullStateView: any = getTestStateView("Full");
  expect(fullStateView.items[0].columns[0].items[0].type).toEqual("Image");
  expect(fullStateView.items[0].columns[0].items[0].height).toEqual(LARGE_IMAGE_SIZE);
  expect(fullStateView.items[0].columns[0].items[0].width).toEqual(LARGE_IMAGE_SIZE);
});

it("Should show the description but not button on state view component", () => {
  const stateViewWithoutButton = getTestStateView();
  const stateView: any = stateViewWithoutButton.withDescription(stateViewDesc);
  expect(stateView.items.length).toEqual(3);
  expect(stateView.items[0].columns[0].items[0].type).toEqual("Image");
  expect(stateView.items[1].text).toEqual(stateViewTitle);
  expect(stateView.items[2].columns[0].items[0].text).toEqual(stateViewDesc);
});

it("Should show the button but not the description on state view component", () => {
  const stateViewWithoutDesc = getTestStateView();
  const stateView: any = stateViewWithoutDesc.withButton(testAction);
  expect(stateView.items[0].columns[0].items[0].type).toEqual("Image");
  expect(stateView.items[1].text).toEqual(stateViewTitle);
  expect(stateView.items[2].actions[0].id).toEqual(testAction.actionID);
  expect(stateView.items[2].actions[0].tooltip).toEqual(testAction.altText);
  expect(stateView.items[2].actions[0].title).toEqual(testAction.title);
});

it("Should show the button and description on state view component (description added first)", () => {
  const fullStateView = getTestStateView().withDescription(stateViewDesc);
  const stateView: any = fullStateView.withButton(testAction);
  expect(stateView.items[0].columns[0].items[0].type).toEqual("Image");
  expect(stateView.items[1].text).toEqual(stateViewTitle);
  expect(stateView.items[2].columns[0].items[0].text).toEqual(stateViewDesc);
  expect(stateView.items[3].actions[0].id).toEqual(testAction.actionID);
  expect(stateView.items[3].actions[0].tooltip).toEqual(testAction.altText);
  expect(stateView.items[3].actions[0].title).toEqual(testAction.title);
  expect(stateView.items[3].isVisible).toEqual(true);
});

it("Should show the button and description on state view component (button added first)", () => {
  const fullStateView = getTestStateView().withButton(testAction);
  const stateView: any = fullStateView.withDescription(stateViewDesc);
  expect(stateView.items[0].columns[0].items[0].type).toEqual("Image");
  expect(stateView.items[1].text).toEqual(stateViewTitle);
  expect(stateView.items[2].columns[0].items[0].text).toEqual(stateViewDesc);
  expect(stateView.items[3].actions[0].id).toEqual(testAction.actionID);
  expect(stateView.items[3].actions[0].tooltip).toEqual(testAction.altText);
  expect(stateView.items[3].actions[0].title).toEqual(testAction.title);
  expect(stateView.items[3].isVisible).toEqual(true);
});

it("Should show only a single button even if 'withButton' is called multiple times", () => {
  const fullStateView = getTestStateView().withButton(testAction);
  const stateView: any = fullStateView.withDescription(stateViewDesc).withButton(testAction).withButton(testAction);
  expect(stateView.items[0].columns[0].items[0].type).toEqual("Image");
  expect(stateView.items[1].text).toEqual(stateViewTitle);
  expect(stateView.items[2].columns[0].items[0].text).toEqual(stateViewDesc);
  expect(stateView.items[3].actions[0].id).toEqual(testAction.actionID);
  expect(stateView.items[3].actions[0].tooltip).toEqual(testAction.altText);
  expect(stateView.items[3].actions[0].title).toEqual(testAction.title);
  expect(stateView.items[3].isVisible).toEqual(true);
  expect(stateView.items.length).toEqual(4);
});

it("Should show only a single description even if 'withDescription' is called multiple times", () => {
  const fullStateView = getTestStateView().withDescription(stateViewDesc);
  const stateView: any = fullStateView
    .withButton(testAction)
    .withDescription(stateViewDesc)
    .withDescription(stateViewDesc);
  expect(stateView.items[0].columns[0].items[0].type).toEqual("Image");
  expect(stateView.items[1].text).toEqual(stateViewTitle);
  expect(stateView.items[2].columns[0].items[0].text).toEqual(stateViewDesc);
  expect(stateView.items[3].actions[0].id).toEqual(testAction.actionID);
  expect(stateView.items[3].actions[0].tooltip).toEqual(testAction.altText);
  expect(stateView.items[3].actions[0].title).toEqual(testAction.title);
  expect(stateView.items.length).toEqual(4);
});
