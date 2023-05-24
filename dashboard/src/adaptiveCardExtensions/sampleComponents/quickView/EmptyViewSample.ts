import { createTemplate, EmptyView, Spacing } from "@microsoft/ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class EmptySampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.emptyView;
  }
  constructor() {
    super();
  }

  public get template(): ISPFxAdaptiveCard {
    return createTemplate([
      new EmptyView("Full", "Sample Empty View Title - Full")
        .withDescription("Here is an optional description as well")
        .withButton({ title: "Optional Button", actionID: "1", altText: "Optional Button Alt Text" }),
      new EmptyView("Section", "Sample Empty View Title - Section")
        .withDescription("Here is an optional description as well")
        .withButton({ title: "Optional Button", actionID: "2", altText: "Optional Button Alt Text" })
        .setSpacing(Spacing.Medium),
    ]);
  }
}
