import { WarningIcon } from "../assets";
import { WarningAlertBoxView } from "./WarningAlertBoxView";

describe("AlertBox Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it("Should render warning message alert", () => {
    const alertContainer: any = new WarningAlertBoxView(
      "Warning message",
      null,
      true,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title",
      true
    );
    expect(alertContainer).toBeDefined();
  });

  it("Should render waarning message alert with custom icon", () => {
    const alertContainer: any = new WarningAlertBoxView(
      "warning message",
      { iconName: WarningIcon },
      false,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title",
      true
    );
    expect(alertContainer).toBeDefined();
  });

  it("Should render warning message alert with action button", () => {
    const alertContainer: any = new WarningAlertBoxView(
      "Success message",
      { iconName: WarningIcon },
      false,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title"
    );
    expect(alertContainer).toBeDefined();
  });
});
