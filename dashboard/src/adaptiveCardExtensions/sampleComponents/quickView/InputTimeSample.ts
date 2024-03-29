import { createTemplate, InputTime } from "ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class InputTimeSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.inputTime;
  }

  public get template(): ISPFxAdaptiveCard {
    return createTemplate([new InputTime("TEST", "12:20").setPlaceholder("Placeholder")]);
  }
}
