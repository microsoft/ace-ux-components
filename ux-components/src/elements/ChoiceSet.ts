/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseInputElement } from "./BaseInputElement";
import { Choice } from "./Choice";
import { ChoiceSetStyle, ElementType } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/Input.ChoiceSet.html
export class ChoiceSet extends BaseInputElement {
  public readonly choices: Choice[];
  public readonly id: string;
  public readonly value: string;
  public isMultiSelect: boolean = false;
  public placeholder?: string;
  public style: ChoiceSetStyle = ChoiceSetStyle.Compact;
  public wrap: boolean = false;

  constructor(id: string, choices: Choice[], initialValue: string) {
    super(ElementType.InputChoiceSet);

    this.id = id;
    this.choices = choices;
    this.value = initialValue;
  }

  public enableMultiSelect(): ChoiceSet {
    this.isMultiSelect = true;

    return this;
  }

  public enableWrap(): ChoiceSet {
    this.wrap = true;

    return this;
  }

  public setPlaceholder(placeholder: string): ChoiceSet {
    this.placeholder = placeholder;

    return this;
  }

  public setStyleToExpanded(): ChoiceSet {
    this.style = ChoiceSetStyle.Expanded;

    return this;
  }
}
