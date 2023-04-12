/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseInputElement } from "./BaseInputElement";
import { ElementType } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/Input.Number.html
export class InputNumber extends BaseInputElement {
  public readonly id: string;
  public readonly value: number;
  public max?: number;
  public min?: number;
  public placeholder?: string;

  constructor(id: string, initialValue: number) {
    super(ElementType.InputNumber);

    this.id = id;
    this.value = initialValue;
  }

  public setMax(maxValue: number): InputNumber {
    this.max = maxValue;

    return this;
  }

  public setMin(minValue: number): InputNumber {
    this.min = minValue;

    return this;
  }

  public setPlaceholder(placeholder: string): InputNumber {
    this.placeholder = placeholder;

    return this;
  }
}
