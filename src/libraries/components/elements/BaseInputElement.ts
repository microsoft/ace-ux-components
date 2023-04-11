/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseElement } from "./BaseElement";

export abstract class BaseInputElement extends BaseElement {
  public label?: string;
  public isRequired: boolean = false;
  public errorMessage?: string;

  public setLabel(label: string): BaseInputElement {
    this.label = label;
    return this;
  }

  public setErrorMessage(errorMessage: string): BaseInputElement {
    this.errorMessage = errorMessage;
    return this;
  }

  public setIsRequired(isRequired: boolean): BaseInputElement {
    this.isRequired = isRequired;
    return this;
  }
}
