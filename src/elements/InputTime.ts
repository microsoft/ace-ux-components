/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseInputElement } from "./BaseInputElement";
import { ElementType } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/Input.Time.html
export class InputTime extends BaseInputElement {
  public readonly id: string;
  public readonly value: string;
  public max?: string;
  public min?: string;
  public placeholder?: string;

  constructor(id: string, initialValue: string) {
    super(ElementType.InputTime);

    this.id = id;
    this.value = initialValue;
  }

  public setMax(maxValue: string): InputTime {
    this.max = maxValue;

    return this;
  }

  public setMin(minValue: string): InputTime {
    this.min = minValue;

    return this;
  }

  public setPlaceholder(placeholder: string): InputTime {
    this.placeholder = placeholder;

    return this;
  }
}
