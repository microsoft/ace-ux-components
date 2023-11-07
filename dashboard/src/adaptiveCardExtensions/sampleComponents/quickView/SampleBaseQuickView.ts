import { BaseViewWithComponents, HostTheme } from "ace-ux-components";
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

  public getTheme(context: AdaptiveCardExtensionContext) {
    let theme;
    context.sdks?.microsoftTeams?.teamsJs.app.getContext().then((context) => {
      theme = context.app.appInfo.theme;
    });
    return theme;
  }

  constructor(context: AdaptiveCardExtensionContext) {
    super();
    this.hostTheme = this.getTheme(context);
  }
}
