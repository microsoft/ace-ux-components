/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseActionElement } from "./BaseActionElement";
import { ActionType } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/Action.OpenUrl.html
export class ActionOpenUrl extends BaseActionElement {
  public readonly url: string;

  constructor(id: string, title: string, url: string, toolTip?: string) {
    super(ActionType.OpenUrl, id, title, toolTip);

    this.url = url;
  }
}
