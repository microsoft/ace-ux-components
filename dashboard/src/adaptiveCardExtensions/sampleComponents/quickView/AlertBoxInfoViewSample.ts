import { ActionStyle, createTemplate, InfoAlertBoxView } from "ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { SampleIcon } from "../../assets";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class AlertBoxInfoSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.alertBoxInfoView;
  }
  public get template(): ISPFxAdaptiveCard {
    return createTemplate([
      new InfoAlertBoxView("Info alert message", this.hostTheme, false),
      new InfoAlertBoxView("Info alert message", this.hostTheme, true, null),
      new InfoAlertBoxView("Info alert message", this.hostTheme, false, SampleIcon),
      new InfoAlertBoxView(
        "Small default subtext. Text can be wrap around like this.",
        this.hostTheme,
        false,
        SampleIcon,
        "medium",
        null,
        "Default bolder title"
      ),
      new InfoAlertBoxView(
        "Default default subtext",
        this.hostTheme,
        false,
        null,
        null,
        null,
        "Default bolder info title"
      ),
      new InfoAlertBoxView(
        "Default default subtext",
        this.hostTheme,
        false,
        null,
        null,
        [{ actionId: "action0", actionText: "Action", actionData: "actionData" }],
        "Default bolder info title"
      ),
      new InfoAlertBoxView(
        "Default default subtext",
        this.hostTheme,
        false,
        null,
        null,
        null,
        "Default bolder info title"
      ),
      new InfoAlertBoxView(
        "Default default subtext",
        this.hostTheme,
        true,
        null,
        null,
        [{ actionId: "action5", actionText: "Action", actionData: "actionData" }],
        "Default bolder info title"
      ),
      new InfoAlertBoxView("Info alert message", this.hostTheme, false, null, null, [
        { actionId: "action", actionText: "Action", actionData: "actionData" },
      ]),
      new InfoAlertBoxView("Info alert message", this.hostTheme, true, null, null, [
        { actionId: "action1", actionText: "Action", actionData: "actionData" },
      ]),
      new InfoAlertBoxView(
        "This will be a body copy using default text style. Perhaps 2 sentence at max but text can wrap around if necessary.",
        this.hostTheme,
        false,
        null,
        null,
        [
          { actionId: "action2", actionText: "Action", actionData: "actionData" },
          { actionId: "action3", actionText: "Action 2", actionData: "actionData2" },
        ],
        "Default bolder title",
        true
      ),
      new InfoAlertBoxView(
        "This will be a body copy using default text style. Perhaps 2 sentence at max but text can wrap around if necessary.",
        this.hostTheme,
        false,
        null,
        null,
        [
          { actionId: "action6", actionText: "Action", actionData: "actionData" },
          { actionId: "action7", actionText: "Action", actionData: "actionData", actionStyle: ActionStyle.Positive },
        ],
        "Default bolder title",
        true
      ),
      new InfoAlertBoxView(
        "This will be a body copy using default text style. Perhaps 2 sentence at max but text can wrap around if necessary.",
        this.hostTheme,
        false,
        null,
        null,
        [{ actionId: "action4", actionText: "Action", actionData: "actionData", actionStyle: ActionStyle.Positive }],
        "Default bolder title",
        true
      ),
    ]);
  }
}
