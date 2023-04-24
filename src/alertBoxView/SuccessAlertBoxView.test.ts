import { SuccessAlertIcon } from "../assets";
import { SuccessAlertBoxView } from "./SuccessAlertBoxView";

describe("AlertBox Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it("Should render success message alert", () => {
    const alertContainer: any = new SuccessAlertBoxView(
      "Success message",
      null,
      true,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title",
      true
    );
    expect(alertContainer).toBeDefined();
  });

  it("Should render success message alert with custom icon", () => {
    const alertContainer: any = new SuccessAlertBoxView(
      "Success message",
      { iconName: SuccessAlertIcon },
      false,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title",
      true
    );
    expect(alertContainer).toBeDefined();
  });

  it("Should render success message alert with action button", () => {
    const alertContainer: any = new SuccessAlertBoxView(
      "Success message",
      { iconName: SuccessAlertIcon },
      false,
      [{ actionId: "action", actionText: "Action", actionData: "actionData" }],
      "Title"
    );
    expect(alertContainer).toBeDefined();
  });
});
