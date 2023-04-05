/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseActionElement } from "./BaseActionElement";
import { BaseElement } from "./BaseElement";
import { Column } from "./Column";
import { Alignment, ContainerStyle, ElementType } from "./Schema.types";

// For more info: https://adaptivecards.io/explorer/ColumnSet.html
export class ColumnSet extends BaseElement {
  public columns: Column[];
  public horizontalAlignment?: Alignment;
  public minHeight?: string;
  public selectAction?: BaseActionElement;
  public style?: ContainerStyle;
  public $data?: any;
  public bleed: boolean = false;

  constructor(columns: Column[]) {
    super(ElementType.ColumnSet);

    this.columns = columns;
  }

  public setAction(action: BaseActionElement): ColumnSet {
    this.selectAction = action;

    return this;
  }

  public setMinHeight(minHeight: string): ColumnSet {
    this.minHeight = minHeight;

    return this;
  }

  public setStyle(style: ContainerStyle): ColumnSet {
    this.style = style;

    return this;
  }

  public setHorizontalAlignment(alignment: Alignment): ColumnSet {
    this.horizontalAlignment = alignment;

    return this;
  }

  public setData(data: any): ColumnSet {
    this.$data = data;

    return this;
  }

  public enableBleed(): ColumnSet {
    this.bleed = true;

    return this;
  }
}
