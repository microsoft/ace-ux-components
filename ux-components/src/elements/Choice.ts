/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// For more info: https://adaptivecards.io/explorer/Input.Choice.html
export class Choice {
  public readonly title: string;
  public readonly value: string;

  constructor(title: string, value: string) {
    this.title = title;
    this.value = value;
  }
}
