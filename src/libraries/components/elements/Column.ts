/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseActionElement } from "./BaseActionElement";
import { BaseElement } from "./BaseElement";
import { BlockElementDimension, ContainerStyle, ElementType, Spacing, VerticalAlignment } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/Column.html
export class Column {
  public readonly items: BaseElement[];
  public readonly type: ElementType = ElementType.Column;
  public selectAction?: BaseActionElement;
  public separator: boolean = false;
  public spacing: Spacing = Spacing.Default;
  public style?: ContainerStyle;
  public verticalContentAlignment: VerticalAlignment = VerticalAlignment.Center;
  public width: BlockElementDimension | string | undefined = undefined;
  public isVisible: boolean = true;
  public rtl: boolean = false;

  constructor(body: BaseElement[]) {
    this.items = body;
  }

  public setAction(action: BaseActionElement): Column {
    this.selectAction = action;

    return this;
  }

  public setSpacing(spacing: Spacing): Column {
    this.spacing = spacing;

    return this;
  }

  public setStyle(style: ContainerStyle): Column {
    this.style = style;

    return this;
  }

  public setVerticalAlignment(alignment: VerticalAlignment): Column {
    this.verticalContentAlignment = alignment;

    return this;
  }

  public setWidth(width: string): Column {
    this.width = width;

    return this;
  }

  public shrink(): Column {
    this.width = BlockElementDimension.Auto;

    return this;
  }

  public stretch(): Column {
    this.width = BlockElementDimension.Stretch;

    return this;
  }

  public useSeparator(separator: boolean = true): Column {
    this.separator = separator;

    return this;
  }

  public setRtl(rtl: boolean): Column {
    this.rtl = rtl;

    return this;
  }

  public setIsVisible(value: boolean): Column {
    this.isVisible = value;

    return this;
  }
}
