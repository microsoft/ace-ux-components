/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ISelectMediaActionParameters } from "@microsoft/sp-adaptive-card-extension-base";
import { BaseActionElement } from "./BaseActionElement";
import { ActionType, AssociatedInputs } from "./Schema.types";

// For more info: https://docs.microsoft.com/en-us/sharepoint/dev/spfx/release-1.14#new-action-types-for-media-and-geolocation
export class ActionSelectMedia extends BaseActionElement {
  public readonly data: any;
  public readonly parameters: ISelectMediaActionParameters;
  public associatedInputs: AssociatedInputs = AssociatedInputs.Auto;

  constructor(id: string, title: string, parameters: ISelectMediaActionParameters, altText?: string) {
    super(ActionType.SelectMedia, id, title, altText);

    this.parameters = parameters;
    this.data = {
      id,
    };
  }

  public setAssociatedInputs(associatedInputs: AssociatedInputs): ActionSelectMedia {
    this.associatedInputs = associatedInputs;

    return this;
  }
}
