/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseActionElement } from "./BaseActionElement";
import { BaseElement } from "./BaseElement";
import { Alignment, ElementType, Height, ImageSize, ImageStyle } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/Image.html
export class Image extends BaseElement {
  public readonly altText: string;
  public readonly url: string;
  public backgroundColor?: string;
  public height: Height | string = Height.Auto;
  public horizontalAlignment: Alignment = Alignment.Left;
  public selectAction?: BaseActionElement;
  public size: ImageSize = ImageSize.Auto;
  public style: ImageStyle = ImageStyle.Default;

  constructor(url: string, altText: string) {
    super(ElementType.Image);

    this.url = url;
    this.altText = altText;
  }

  public setAction(action: BaseActionElement): Image {
    this.selectAction = action;

    return this;
  }

  public setBackgroundColor(hexColor: string): Image {
    this.backgroundColor = hexColor;

    return this;
  }

  public setHeight(height: Height | string): Image {
    this.height = height;

    return this;
  }

  public setHorizontalAlignment(alignment: Alignment): Image {
    this.horizontalAlignment = alignment;

    return this;
  }

  public setSize(size: ImageSize): Image {
    this.size = size;

    return this;
  }

  public setStyle(style: ImageStyle): Image {
    this.style = style;

    return this;
  }

  public setWidth(width: string): Image {
    this.width = width;

    return this;
  }
}
