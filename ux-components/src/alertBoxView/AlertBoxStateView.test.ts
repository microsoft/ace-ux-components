import { AlertBoxStateView } from "./AlertBoxStateView";
import { ActionStyle, ContainerStyle } from "../elements";
import { HostTheme } from "../types";

const testHostTheme: HostTheme = "light";

describe("AlertBox Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it("Should get good styling and correct message", () => {
    const alertContainer: any = new AlertBoxStateView(
      ContainerStyle.Good,
      "Success message",
      testHostTheme,
      "Success",
      true,
      null,
      null,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title"
    );
    expect(alertContainer).toBeDefined();
    expect(alertContainer.items[0].items.length).toEqual(2);
    expect(alertContainer.items[0].style).toEqual(ContainerStyle.Good);
    //ContentColumn
    expect(alertContainer.items[0].items[0].columns.length).toEqual(3);
    //FooterAction
    expect(alertContainer.items[0].items[1].columns.length).toEqual(0);
    //Column1 - Title Description
    expect(alertContainer.items[0].items[0].columns[1].items[0].inlines[0].text).toEqual("Title");
    expect(alertContainer.items[0].items[0].columns[1].items[1].inlines[0].text).toEqual("Success message");
    //Column2 - DismissIcon
    expect(alertContainer.items[0].items[0].columns[2].items.length).toEqual(1);
  });

  it("Should get error styling and correct message", () => {
    const alertContainer: any = new AlertBoxStateView(
      ContainerStyle.Attention,
      "Error message",
      testHostTheme,
      "Error",
      true,
      null,
      null,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title"
    );
    expect(alertContainer).toBeDefined();
    expect(alertContainer.items[0].items.length).toEqual(2);
    expect(alertContainer.items[0].style).toEqual(ContainerStyle.Attention);
    //ContentColumn
    expect(alertContainer.items[0].items[0].columns.length).toEqual(3);
    //FooterAction
    expect(alertContainer.items[0].items[1].columns.length).toEqual(0);
    //Column1 - Title Description
    expect(alertContainer.items[0].items[0].columns[1].items[0].inlines[0].text).toEqual("Title");
    expect(alertContainer.items[0].items[0].columns[1].items[1].inlines[0].text).toEqual("Error message");
    //Column2 - DismissIcon
    expect(alertContainer.items[0].items[0].columns[2].items.length).toEqual(1);
  });

  it("Should get info styling and correct message", () => {
    const alertContainer: any = new AlertBoxStateView(
      ContainerStyle.Accent,
      "Info message",
      testHostTheme,
      "Info",
      true,
      null,
      null,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title"
    );
    expect(alertContainer).toBeDefined();
    expect(alertContainer.items[0].items.length).toEqual(2);
    expect(alertContainer.items[0].style).toEqual(ContainerStyle.Accent);
    //ContentColumn
    expect(alertContainer.items[0].items[0].columns.length).toEqual(3);
    //FooterAction
    expect(alertContainer.items[0].items[1].columns.length).toEqual(0);
    //Column1 - Title Description
    expect(alertContainer.items[0].items[0].columns[1].items[0].inlines[0].text).toEqual("Title");
    expect(alertContainer.items[0].items[0].columns[1].items[1].inlines[0].text).toEqual("Info message");
    //Column2 - DismissIcon
    expect(alertContainer.items[0].items[0].columns[2].items.length).toEqual(1);
  });

  it("Should get warning styling and correct message", () => {
    const alertContainer: any = new AlertBoxStateView(
      ContainerStyle.Warning,
      "Warning message",
      testHostTheme,
      "Warning",
      true,
      null,
      null,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title"
    );
    expect(alertContainer).toBeDefined();
    expect(alertContainer.items[0].items.length).toEqual(2);
    expect(alertContainer.items[0].style).toEqual(ContainerStyle.Warning);
    //ContentColumn
    expect(alertContainer.items[0].items[0].columns.length).toEqual(3);
    //FooterAction
    expect(alertContainer.items[0].items[1].columns.length).toEqual(0);
    //Column1 - Title Description
    expect(alertContainer.items[0].items[0].columns[1].items[0].inlines[0].text).toEqual("Title");
    expect(alertContainer.items[0].items[0].columns[1].items[1].inlines[0].text).toEqual("Warning message");
    //Column2 - DismissIcon
    expect(alertContainer.items[0].items[0].columns[2].items.length).toEqual(1);
  });

  it("Should get style of action button if given ", () => {
    const alertContainer: any = new AlertBoxStateView(
      ContainerStyle.Good,
      "Success message",
      testHostTheme,
      "Success",
      true,
      null,
      null,
      [{ actionId: "action", actionText: "Action", actionData: "actionData", actionStyle: ActionStyle.Positive }],
      "Title"
    );
    expect(alertContainer.items[0].items[0].columns[2].items[0].actions[0].style).toEqual(ActionStyle.Positive);
  });

  it("Should render action buttons if given multiple", () => {
    const alertContainer: any = new AlertBoxStateView(
      ContainerStyle.Good,
      "Success message",
      testHostTheme,
      "Success",
      true,
      null,
      null,
      [
        { actionId: "action", actionText: "Action", actionData: "actionData" },
        { actionId: "action1", actionText: "Action 2", actionData: "actionData2", actionStyle: ActionStyle.Positive },
      ],
      "Title",
      true
    );
    expect(alertContainer.items[0].items[1].columns.length).toEqual(2);
  });
});
