import strings from "SampleComponentsAdaptiveCardExtensionStrings";
import {
  BasePrimaryTextCardView,
  IPrimaryTextCardParameters,
  IQuickViewCardAction,
} from "@microsoft/sp-adaptive-card-extension-base";
import { AceRenderType } from "ace-ux-components";
import { SampleComponentIds } from "../constants";
import { ISampleComponentsAdaptiveCardExtensionState } from "../sampleComponentTypes";

export class SampleCardView extends BasePrimaryTextCardView<{}, ISampleComponentsAdaptiveCardExtensionState> {
  public get data(): IPrimaryTextCardParameters {
    return {
      primaryText: strings.PrimaryText,
      title: strings.Title,
      description: strings.Description,
    };
  }

  public get onCardSelection(): IQuickViewCardAction {
    return {
      type: AceRenderType.QuickView,
      parameters: { view: SampleComponentIds.SAMPLE_COMPONENTS_QUICK_VIEW },
    };
  }
}
