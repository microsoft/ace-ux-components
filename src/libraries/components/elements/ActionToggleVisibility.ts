/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseActionElement } from "./BaseActionElement";
import { ActionType } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/Action.ToggleVisibility.html
export class ActionToggleVisibility extends BaseActionElement {
  public readonly targetElements: string[];

  constructor(id: string, title: string, targetElements: string[], tooltip?: string) {
    super(ActionType.ToggleVisibility, id, title, tooltip);
    this.targetElements = targetElements;
  }
}
