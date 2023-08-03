import { createTemplate } from "ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class WeekCalendarSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.weekCalendar;
  }

  public get template(): ISPFxAdaptiveCard {
    //TODO: the whole component is commented out for reasons unknown
    return createTemplate([]);
  }
}
