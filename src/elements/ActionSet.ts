/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseActionElement } from "./BaseActionElement";
import { BaseElement } from "./BaseElement";
import { ElementType } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/ActionSet.html
export class ActionSet extends BaseElement {
  public readonly actions: BaseActionElement[];

  constructor(actions: BaseActionElement[]) {
    super(ElementType.ActionSet);

    this.actions = actions;
  }
}
