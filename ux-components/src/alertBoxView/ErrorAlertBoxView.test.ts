import { HostTheme } from "../types";
import { ErrorAlertBoxView } from "./ErrorAlertBoxView";

const testHostTheme: HostTheme = "light";
describe("AlertBox Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it("Should render error message alert", () => {
    const alertContainer: any = new ErrorAlertBoxView(
      "Error message",
      testHostTheme,
      true,
      null,
      null,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title",
      true
    );
    expect(alertContainer).toBeDefined();
  });

  it("Should render error message alert with custom icon", () => {
    const alertContainer: any = new ErrorAlertBoxView(
      "Error message",
      testHostTheme,
      true,
      null,
      null,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title",
      true
    );
    expect(alertContainer).toBeDefined();
  });

  it("Should render error message alert with action button", () => {
    const alertContainer: any = new ErrorAlertBoxView(
      "Error message",
      testHostTheme,
      true,
      null,
      null,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title"
    );
    expect(alertContainer).toBeDefined();
  });
});
