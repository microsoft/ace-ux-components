import { HostTheme } from "@microsoft/sp-adaptive-card-extension-base";
import { SuccessAlertBoxView } from "./SuccessAlertBoxView";

const testHostTheme: HostTheme = "light";
describe("AlertBox Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it("Should render success message alert", () => {
    const alertContainer: any = new SuccessAlertBoxView(
      "Success message",
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

  it("Should render success message alert with custom icon", () => {
    const alertContainer: any = new SuccessAlertBoxView(
      "Success message",
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

  it("Should render success message alert with action button", () => {
    const alertContainer: any = new SuccessAlertBoxView(
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
