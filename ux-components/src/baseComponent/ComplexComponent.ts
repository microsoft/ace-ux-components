/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Container } from "../elements";

export class ComplexComponent extends Container {
  protected readonly componentID: string;

  constructor(componentID: string) {
    super([]);

    this.componentID = componentID;
  }

  public getComponentID(): string {
    return this.componentID;
  }
}
