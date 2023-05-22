import { createTemplate, InputToggleValue, ToggleRow } from "ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class ToggleRowSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.toggleRow;
  }
  constructor() {
    super();
  }
  public get template(): ISPFxAdaptiveCard {
    return createTemplate([
      new ToggleRow(
        {
          id: "TEMP",
          title: "Toggle Row",
          description: "A toggle button row",
          pendingMessage: "Loading message",
          completedMessage: "Done",
        },
        { id: "TODO", currentValue: InputToggleValue.TRUE }
      ),
    ]);
  }
}
