import { createTemplate, Spacing, SuccessView, TextBlock } from "ace-ux-components";
import { ISPFxAdaptiveCard, ISubmitActionArguments } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class SuccessSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.successView;
  }
  constructor() {
    super();
  }

  public get template(): ISPFxAdaptiveCard {
    return createTemplate([
      new SuccessView("Full", "Sample Success View Title - Full")
        .withDescription("Here is an optional description as well")
        .withButton({ title: "Success Optional Button", actionID: "1", altText: "Optional Button Alt Text" }),
      new SuccessView("Section", "Sample Success View Title - Section")
        .withDescription("Here is an optional description as well")
        .withButton({ title: "Optional Button", actionID: "2", altText: "Optional Button Alt Text" })
        .setSpacing(Spacing.Medium),
      new TextBlock("Success button clicked")
        .setID("test_successfocus")
        .setSpacing(Spacing.Medium)
        .setIsVisible(this.state.buttonClicked),
    ]);
  }

  public onAction(action: ISubmitActionArguments): void {
    const { data } = action;
    if (data.id === "1") {
      const val = !this.state.buttonClicked;
      this.setState({ buttonClicked: val, focusID: "test_successfocus" });
    }
  }
}
