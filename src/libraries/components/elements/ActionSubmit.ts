/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseActionElement } from "./BaseActionElement";
import { ActionType, AssociatedInputs } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/Action.Submit.html
export class ActionSubmit extends BaseActionElement {
  public readonly data: any;
  public associatedInputs: AssociatedInputs = AssociatedInputs.Auto;

  constructor(id: string, title: string, data: any = {}, toolTip?: string) {
    super(ActionType.Submit, id, title, toolTip);

    const extraData = data ? data : {};
    this.data = {
      id,
      ...extraData,
    };
  }

  public setAssociatedInputs(associatedInputs: AssociatedInputs): ActionSubmit {
    this.associatedInputs = associatedInputs;

    return this;
  }
}
