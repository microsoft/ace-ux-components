import { createTemplate, InputDate } from "ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class InputDateSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.inputDate;
  }

  public get template(): ISPFxAdaptiveCard {
    return createTemplate([new InputDate("TEST", new Date())]);
  }
}
