import { BaseViewWithComponents } from "@microsoft/ace-ux-components";
import { ComponentDisplayNames } from "../constants";
import { ISampleComponentsAdaptiveCardExtensionState, SampleComponentData } from "../sampleComponentTypes";

export abstract class SampleBaseQuickView extends BaseViewWithComponents<
  {},
  ISampleComponentsAdaptiveCardExtensionState,
  SampleComponentData
> {
  public get title() {
    return ComponentDisplayNames.mainQuickView as string;
  }
  constructor() {
    super();
  }
}
