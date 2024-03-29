import { createTemplate, Persona } from "ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class PersonaSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.persona;
  }

  public get template(): ISPFxAdaptiveCard {
    return createTemplate([
      new Persona({ name: "Jane Doe", hasSelfViewed: false, profilePictureUrl: "" }),
      new Persona({ name: "Doe Jane", hasSelfViewed: true, profilePictureUrl: "" }),
    ]);
  }
}
