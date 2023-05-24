import { createTemplate, InputToggle, InputToggleValue } from "@microsoft/ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class InputToggleSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.inputToggle;
  }

  constructor() {
    super();
  }

  public get template(): ISPFxAdaptiveCard {
    //TODO: Why isn't this like. A boolean
    return createTemplate([
      new InputToggle("TEST", "STARTS FALSE INPUT TOGGLE", InputToggleValue.FALSE),
      new InputToggle("TEST2", "STARTS TRUE INPUT TOGGLE", InputToggleValue.TRUE),
    ]);
  }
}
