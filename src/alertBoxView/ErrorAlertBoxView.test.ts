/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ErrorAlertIcon } from "../assets";
import { ErrorAlertBoxView } from "./ErrorAlertBoxView";

describe("AlertBox Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it("Should render error message alert", () => {
    const alertContainer: any = new ErrorAlertBoxView(
      "Error message",
      null,
      true,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title",
      true
    );
    expect(alertContainer).toBeDefined();
  });

  it("Should render error message alert with custom icon", () => {
    const alertContainer: any = new ErrorAlertBoxView(
      "Error message",
      { iconName: ErrorAlertIcon },
      false,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title",
      true
    );
    expect(alertContainer).toBeDefined();
  });

  it("Should render error message alert with action button", () => {
    const alertContainer: any = new ErrorAlertBoxView(
      "Error message",
      { iconName: ErrorAlertIcon },
      false,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title"
    );
    expect(alertContainer).toBeDefined();
  });
});
