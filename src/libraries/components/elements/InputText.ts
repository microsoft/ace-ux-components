/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseActionElement } from "./BaseActionElement";
import { BaseInputElement } from "./BaseInputElement";
import { ElementType, TextInputStyle } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/Input.Text.html
export class InputText extends BaseInputElement {
  public readonly id: string;
  public readonly value: string;
  public inlineAction?: BaseActionElement;
  public isMultiline: boolean = false;
  public maxLength?: number;
  public placeholder?: string;
  public style: TextInputStyle = TextInputStyle.Text;
  public label?: string;
  public regex?: string;

  constructor(id: string, initialValue: string = "") {
    super(ElementType.InputText);

    this.id = id;
    this.value = initialValue;
  }

  public enableMultiline(): InputText {
    this.isMultiline = true;

    return this;
  }

  public setAction(action: BaseActionElement): InputText {
    this.inlineAction = action;

    return this;
  }

  public setMaxLength(maxLength: number): InputText {
    this.maxLength = maxLength;

    return this;
  }

  public setPlaceholder(placeholder: string): InputText {
    this.placeholder = placeholder;

    return this;
  }

  public setStyle(style: TextInputStyle): InputText {
    this.style = style;

    return this;
  }

  public setLabel(label: string): InputText {
    this.label = label;

    return this;
  }

  public setRegex(regex: string): InputText {
    this.regex = regex;

    return this;
  }
}
