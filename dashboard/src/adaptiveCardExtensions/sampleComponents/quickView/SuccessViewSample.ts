import { createTemplate, Spacing, SuccessView } from "ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class SuccessSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.successView;
  }

  public get template(): ISPFxAdaptiveCard {
    return createTemplate([
      new SuccessView("Full", "Sample Success View Title - Full", this.hostTheme)
        .withDescription("Here is an optional description as well")
        .withButton({ title: "Optional Button", actionID: "1", altText: "Optional Button Alt Text" }),
      new SuccessView("Section", "Sample Success View Title - Section", this.hostTheme)
        .withDescription("Here is an optional description as well")
        .withButton({ title: "Optional Button", actionID: "2", altText: "Optional Button Alt Text" })
        .setSpacing(Spacing.Medium),
    ]);
  }
}
