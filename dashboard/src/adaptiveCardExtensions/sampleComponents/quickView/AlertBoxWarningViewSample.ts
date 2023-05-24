import { ActionStyle, createTemplate, WarningAlertBoxView } from "@microsoft/ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { SampleIcon } from "../../assets";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class AlertBoxWarningSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.alertBoxWarningView;
  }
  constructor() {
    super();
  }

  public get template(): ISPFxAdaptiveCard {
    return createTemplate([
      new WarningAlertBoxView("Warning alert message"),
      new WarningAlertBoxView("Warning alert message", null, true),
      new WarningAlertBoxView("Warning alert message", { iconName: SampleIcon }),
      new WarningAlertBoxView(
        "Small default subtext. Text can be wrap around like this.",
        { iconName: SampleIcon, size: "medium" },
        false,
        null,
        "Default bolder title"
      ),
      new WarningAlertBoxView("Default default subtext", null, false, null, "Default bolder info title"),
      new WarningAlertBoxView(
        "Default default subtext",
        null,
        false,
        [{ actionId: "action0", actionText: "Action", actionData: "actionData" }],
        "Default bolder info title"
      ),
      new WarningAlertBoxView("Default default subtext", null, true, null, "Default bolder info title"),
      new WarningAlertBoxView(
        "Default default subtext",
        null,
        true,
        [{ actionId: "action5", actionText: "Action", actionData: "actionData" }],
        "Default bolder info title"
      ),
      new WarningAlertBoxView("Warning alert message", null, false, [
        { actionId: "action", actionText: "Action", actionData: "actionData" },
      ]),
      new WarningAlertBoxView("Warning alert message", null, true, [
        { actionId: "action1", actionText: "Action", actionData: "actionData" },
      ]),
      new WarningAlertBoxView(
        "This will be a body copy using default text style. Perhaps 2 sentence at max but text can wrap around if necessary.",
        null,
        false,
        [
          { actionId: "action2", actionText: "Action", actionData: "actionData" },
          { actionId: "action3", actionText: "Action 2", actionData: "actionData2", actionStyle: ActionStyle.Positive },
        ],
        "Default bolder title",
        true
      ),
      new WarningAlertBoxView(
        "This will be a body copy using default text style. Perhaps 2 sentence at max but text can wrap around if necessary.",
        null,
        false,
        [
          { actionId: "action6", actionText: "Action", actionData: "actionData" },
          { actionId: "action7", actionText: "Action", actionData: "actionData" },
        ],
        "Default bolder title",
        true
      ),
      new WarningAlertBoxView(
        "This will be a body copy using default text style. Perhaps 2 sentence at max but text can wrap around if necessary.",
        null,
        false,
        [{ actionId: "action4", actionText: "Action", actionData: "actionData", actionStyle: ActionStyle.Positive }],
        "Default bolder title",
        true
      ),
    ]);
  }
}
