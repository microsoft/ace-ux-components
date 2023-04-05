/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AlertBox } from "./AlertBox";
import { AlertType } from "./AlertBox.types";

describe("AlertBox Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it("Should get good styling and correct message", () => {
    const alertContainer: any = new AlertBox(AlertType.Success, "Success Message");
    expect(alertContainer).toBeDefined();
    expect(alertContainer.items[0].items.length).toEqual(1);
    expect(alertContainer.items[0].items[0].columns[0].items.length).toEqual(3);
    expect(alertContainer.items[0].style).toEqual("good");
    expect(alertContainer.items[0].items[0].columns[0].items[0].text).toEqual("Success");
    expect(alertContainer.items[0].items[0].columns[0].items[1].inlines[0].text).toEqual("Success Message");
  });

  it("Should get attention styling and correct message", () => {
    const alertContainer: any = new AlertBox(AlertType.Failure, "Failure Message");
    expect(alertContainer).toBeDefined();
    expect(alertContainer.items[0].items.length).toEqual(1);
    expect(alertContainer.items[0].items[0].columns[0].items.length).toEqual(3);
    expect(alertContainer.items[0].style).toEqual("attention");
    expect(alertContainer.items[0].items[0].columns[0].items[0].text).toEqual("Failure");
    expect(alertContainer.items[0].items[0].columns[0].items[1].inlines[0].text).toEqual("Failure Message");
  });

  it("Should get warning styling and correct message", () => {
    const alertContainer: any = new AlertBox(AlertType.Warning, "Warning Message");
    expect(alertContainer).toBeDefined();
    expect(alertContainer.items[0].items.length).toEqual(1);
    expect(alertContainer.items[0].items[0].columns[0].items.length).toEqual(3);
    expect(alertContainer.items[0].style).toEqual("warning");
    expect(alertContainer.items[0].items[0].columns[0].items[0].text).toEqual("Warning");
    expect(alertContainer.items[0].items[0].columns[0].items[1].inlines[0].text).toEqual("Warning Message");
  });

  it("Should contain alert action - dismiss", () => {
    const alertContainer: any = new AlertBox(AlertType.Success, "Success Message", {
      actionId: "dimissId",
      actionText: "Dismiss",
      actionData: { data: "1" },
    });
    expect(alertContainer).toBeDefined();
    expect(alertContainer.items[0].items[0].columns[1].items[0].inlines[0].text).toEqual("Dismiss");
    expect(alertContainer.items[0].items[0].columns[1].items[0].inlines[0].selectAction.id).toEqual("dimissId");
    expect(alertContainer.items[0].items[0].columns[1].items[0].inlines[0].selectAction.data).toEqual({
      data: "1",
      id: "dimissId",
    });
  });

  it("Should contain alert confirmation", () => {
    const alertContainer: any = new AlertBox(AlertType.Success, "Success Message", null, {
      cancelId: "cancelId",
      cancelText: "Cancel",
      cancelData: { data: "cancel" },
      okId: "okId",
      okText: "Ok",
      okData: { data: "ok" },
    });
    expect(alertContainer).toBeDefined();
    expect(alertContainer.items[0].items[0].columns[0].items[2].columns[0].items[0].actions[0].id).toEqual("cancelId");
    expect(alertContainer.items[0].items[0].columns[0].items[2].columns[0].items[0].actions[0].title).toEqual("Cancel");
    expect(alertContainer.items[0].items[0].columns[0].items[2].columns[0].items[0].actions[0].data).toEqual({
      id: "cancelId",
      data: "cancel",
    });

    expect(alertContainer.items[0].items[0].columns[0].items[2].columns[1].items[0].actions[0].id).toEqual("okId");
    expect(alertContainer.items[0].items[0].columns[0].items[2].columns[1].items[0].actions[0].title).toEqual("Ok");
    expect(alertContainer.items[0].items[0].columns[0].items[2].columns[1].items[0].actions[0].data).toEqual({
      id: "okId",
      data: "ok",
    });
  });
});
