import { AlertBox, AlertType, createTemplate } from "ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames, SampleComponentActionIds } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class AlertBoxSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.alertBox;
  }
  constructor() {
    super();
  }

  public get template(): ISPFxAdaptiveCard {
    return createTemplate([
      new AlertBox(AlertType.Success, "Success Alert Text", {
        actionText: "Dismiss",
        actionId: SampleComponentActionIds.ALERT_BOX_CONFIRM,
      }),
      new AlertBox(AlertType.Failure, "Failure Alert", {
        actionText: "Dismiss",
        actionId: SampleComponentActionIds.ALERT_BOX_CONFIRM,
      }),
      new AlertBox(AlertType.Warning, "Warning Alert", undefined, {
        cancelText: "Cancel",
        cancelId: SampleComponentActionIds.ALERT_BOX_DENY,
        okId: "TEST",
        okText: "OK",
      }),
    ]);
  }
}
