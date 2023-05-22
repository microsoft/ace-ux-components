// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BaseElement } from "./BaseElement";
import { Alignment, ElementType, FontColor, FontSize, FontType, FontWeight, TextBlockStyle } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/TextBlock.html
export class TextBlock extends BaseElement {
  public color?: FontColor;
  public fontType?: FontType;
  public horizontalAlignment?: Alignment;
  public isSubtle?: boolean;
  public maxLines?: number;
  public size?: FontSize;
  public text: string;
  public style: TextBlockStyle = TextBlockStyle.Default;
  public weight?: FontWeight;
  public wrap: boolean = false;

  constructor(text: string) {
    super(ElementType.TextBlock);

    this.text = text;
  }

  public enableSubtle(): TextBlock {
    this.isSubtle = true;

    return this;
  }

  public enableWrap(): TextBlock {
    this.wrap = true;

    return this;
  }

  public setColor(color: FontColor): TextBlock {
    this.color = color;

    return this;
  }

  public setFontTypeToMonospace(): TextBlock {
    this.fontType = FontType.Monospace;

    return this;
  }

  public setHorizontalAlignment(alignment: Alignment): TextBlock {
    this.horizontalAlignment = alignment;

    return this;
  }

  public setSize(size: FontSize): TextBlock {
    this.size = size;

    return this;
  }

  public setWeight(weight: FontWeight): TextBlock {
    this.weight = weight;

    return this;
  }

  public useBinding(binding: string): TextBlock {
    this.text = `\${${binding}}`;

    return this;
  }

  public useMultiline(maxLines: number | undefined): TextBlock {
    this.maxLines = maxLines;

    return this;
  }

  public setStyle(textBlockStyle: TextBlockStyle): TextBlock {
    this.style = textBlockStyle;
    return this;
  }
}
