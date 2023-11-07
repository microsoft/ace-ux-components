import { HostTheme } from "../types";
import { WarningAlertBoxView } from "./WarningAlertBoxView";

const testHostTheme: HostTheme = "light";

describe("AlertBox Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it("Should render warning message alert", () => {
    const alertContainer: any = new WarningAlertBoxView(
      "Warning message",
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

  it("Should render waarning message alert with custom icon", () => {
    const alertContainer: any = new WarningAlertBoxView(
      "warning message",
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

  it("Should render warning message alert with action button", () => {
    const alertContainer: any = new WarningAlertBoxView(
      "Success message",
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
