/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseElement } from "./BaseElement";
import { Alignment, ElementType } from "./Schema.types";
import { TextRun } from "./TextRun";

// For more info: https://adaptivecards.io/explorer/RichTextBlock.html
export class RichTextBlock extends BaseElement {
  public readonly inlines: TextRun[];
  public horizontalAlignment: Alignment = Alignment.Left;

  constructor(inlines: TextRun[]) {
    super(ElementType.RichTextBlock);

    this.inlines = inlines;
  }

  public setHorizontalAlignment(alignment: Alignment): RichTextBlock {
    this.horizontalAlignment = alignment;

    return this;
  }
}
