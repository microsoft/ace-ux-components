import { createTemplate, InputNumber } from "ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class InputNumberSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.inputNumber;
  }

  public get template(): ISPFxAdaptiveCard {
    return createTemplate([new InputNumber("TEST", 10)]);
  }
}
