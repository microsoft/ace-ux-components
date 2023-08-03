import { createTemplate, ErrorView, Spacing } from "ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class ErrorSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.errorView;
  }

  public get template(): ISPFxAdaptiveCard {
    return createTemplate([
      new ErrorView("Full", "Sample Error View Title - Full", this.hostTheme)
        .withDescription("Here is an optional description as well")
        .withButton({ title: "Optional Button", actionID: "1", altText: "Optional Button Alt Text" }),

      new ErrorView("Section", "Sample Error View Title - Section", this.hostTheme)
        .withDescription("Here is an optional description as well")
        .withButton({ title: "Optional Button", actionID: "2", altText: "Optional Button Alt Text" })
        .setSpacing(Spacing.Medium),
    ]);
  }
}
