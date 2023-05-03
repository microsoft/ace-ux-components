import { createTemplate, LoadingIndicator, LoadingSize } from "ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class LoadingIndicatorSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.loadingIndicator;
  }
  constructor() {
    super();
  }

  public get template(): ISPFxAdaptiveCard {
    return createTemplate([
      new LoadingIndicator(LoadingSize.Medium).withLabel("Loading..."),
      new LoadingIndicator(LoadingSize.Large).withLabel("Loading..."),
    ]);
  }
}
