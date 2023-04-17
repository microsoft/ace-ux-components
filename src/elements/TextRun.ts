/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseActionElement } from "./BaseActionElement";
import { ElementType, FontColor, FontSize, FontType, FontWeight } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/TextRun.html
export class TextRun {
  public readonly text: string;
  public readonly type: ElementType.TextRun = ElementType.TextRun;
  public color: FontColor = FontColor.Default;
  public fontType: FontType = FontType.Default;
  public isHighlighted: boolean = false;
  public italic: boolean = false;
  public strikedThrough: boolean = false;
  public isSubtle: boolean = false;
  public underline?: boolean;
  public selectAction?: BaseActionElement;
  public size: FontSize = FontSize.Default;
  public weight: FontWeight = FontWeight.Default;

  constructor(text: string) {
    this.text = text;
  }

  public enableHighlight(): TextRun {
    this.isHighlighted = true;

    return this;
  }

  public enableItalic(): TextRun {
    this.italic = true;

    return this;
  }

  public enableStrikedThrough(): TextRun {
    this.strikedThrough = true;

    return this;
  }

  public enableSubtle(): TextRun {
    this.isSubtle = true;

    return this;
  }

  public enableUnderlined(): TextRun {
    this.underline = true;

    return this;
  }

  public setAction(action: BaseActionElement): TextRun {
    this.selectAction = action;

    return this;
  }

  public setColor(color: FontColor): TextRun {
    this.color = color;

    return this;
  }

  public setFontTypeToMonospace(): TextRun {
    this.fontType = FontType.Monospace;

    return this;
  }

  public setSize(size: FontSize): TextRun {
    this.size = size;

    return this;
  }

  public setWeight(weight: FontWeight): TextRun {
    this.weight = weight;

    return this;
  }
}
