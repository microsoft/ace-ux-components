import { BaseViewWithComponents, HostTheme, getTheme } from "ace-ux-components";
import { ComponentDisplayNames } from "../constants";
import { ISampleComponentsAdaptiveCardExtensionState, SampleComponentData } from "../sampleComponentTypes";
import { AdaptiveCardExtensionContext } from "@microsoft/sp-adaptive-card-extension-base";

export abstract class SampleBaseQuickView extends BaseViewWithComponents<
  {},
  ISampleComponentsAdaptiveCardExtensionState,
  SampleComponentData
> {
  protected hostTheme: HostTheme;

  public get title() {
    return ComponentDisplayNames.mainQuickView as string;
  }

  constructor(context: AdaptiveCardExtensionContext) {
    super();
    // @ts-ignore
    this.hostTheme = getTheme(context);
  }
}
