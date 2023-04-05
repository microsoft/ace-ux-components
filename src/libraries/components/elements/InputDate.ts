/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseInputElement } from "./BaseInputElement";
import { ElementType } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/Input.Date.html
export class InputDate extends BaseInputElement {
  public readonly id: string;
  public readonly value: string;
  public max?: string;
  public min?: string;
  public placeholder?: string;

  constructor(id: string, initialValue: Date) {
    super(ElementType.InputDate);

    this.id = id;
    this.value = this.formatDate(initialValue);
  }

  public setMax(maxValue: Date): InputDate {
    this.max = this.formatDate(maxValue);

    return this;
  }

  public setMin(minValue: Date): InputDate {
    this.min = this.formatDate(minValue);

    return this;
  }

  public setPlaceholder(placeholder: string): InputDate {
    this.placeholder = placeholder;

    return this;
  }

  private formatDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }
}
