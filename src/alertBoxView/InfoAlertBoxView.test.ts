import { InfoIcon } from "../assets";
import { InfoAlertBoxView } from "./InfoAlertBoxView";

describe("AlertBox Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it("Should render error message alert", () => {
    const alertContainer: any = new InfoAlertBoxView(
      "Info message",
      null,
      true,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title",
      true
    );
    expect(alertContainer).toBeDefined();
  });

  it("Should render error message alert with custom icon", () => {
    const alertContainer: any = new InfoAlertBoxView(
      "Info message",
      { iconName: InfoIcon },
      false,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title",
      true
    );
    expect(alertContainer).toBeDefined();
  });

  it("Should render error message alert with action button", () => {
    const alertContainer: any = new InfoAlertBoxView(
      "Error message",
      { iconName: InfoIcon },
      false,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title"
    );
    expect(alertContainer).toBeDefined();
  });
});
