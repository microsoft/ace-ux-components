import { ChoiceSet, createTemplate } from "ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class ChoiceSetSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.choiceSet;
  }
  constructor() {
    super();
  }
  public get template(): ISPFxAdaptiveCard {
    return createTemplate([
      new ChoiceSet(
        "TEST",
        [
          { title: "Choice 1", value: "Value 1" },
          { title: "Choice 2", value: "Value 2" },
        ],
        "Value 1"
      ),
    ]);
  }
}
