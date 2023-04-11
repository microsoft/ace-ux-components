/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseInputElement } from "./BaseInputElement";
import { ElementType, InputToggleValue } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/Input.Toggle.html
export class InputToggle extends BaseInputElement {
  public readonly id: string;
  public readonly title: string;
  public readonly value: string;
  public readonly valueOff: string = InputToggleValue.FALSE;
  public readonly valueOn: string = InputToggleValue.TRUE;
  public wrap: boolean = false;

  constructor(id: string, title: string, initialValue: InputToggleValue = InputToggleValue.FALSE) {
    super(ElementType.InputToggle);

    this.id = id;
    this.title = title;
    this.value = initialValue;
  }

  public enableWrap(): InputToggle {
    this.wrap = true;

    return this;
  }
}
