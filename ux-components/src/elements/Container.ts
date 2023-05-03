/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseActionElement } from "./BaseActionElement";
import { BaseElement } from "./BaseElement";
import { BlockElementDimension, ContainerStyle, ElementType, VerticalAlignment } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/Container.html
export class Container extends BaseElement {
  public backgroundImage?: string;
  public bleed: boolean = false;
  public data?: string;
  public height?: BlockElementDimension;
  public items: BaseElement[] = [];
  public minHeight?: string;
  public selectAction?: BaseActionElement;
  public style?: ContainerStyle;
  public verticalContentAlignment: VerticalAlignment = VerticalAlignment.Center;
  public rtl: boolean = false;

  constructor(items: BaseElement[]) {
    super(ElementType.Container);

    this.items = items;
  }

  public enableBleed(): Container {
    this.bleed = true;

    return this;
  }

  public setAction(action: BaseActionElement): Container {
    this.selectAction = action;

    return this;
  }

  public setBackgroundImage(uri: string): Container {
    this.backgroundImage = uri;

    return this;
  }

  public setHeight(height: BlockElementDimension): Container {
    this.height = height;

    return this;
  }

  public setMinHeight(minHeight: string): Container {
    this.minHeight = minHeight;

    return this;
  }

  public setStyle(style: ContainerStyle): Container {
    this.style = style;

    return this;
  }

  public setVerticalAlignment(alignment: VerticalAlignment): Container {
    this.verticalContentAlignment = alignment;

    return this;
  }

  public setRtl(rtl: boolean): Container {
    this.rtl = rtl;

    return this;
  }

  protected updateItems(items: BaseElement[]): void {
    this.items = items;
  }
}
