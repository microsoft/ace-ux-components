/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BlockElementDimension, ElementType, Spacing } from "./Schema.types";

export abstract class BaseElement {
  public readonly type: ElementType;
  public id: string = "";
  public isVisible: boolean = true;
  public separator = false;
  public spacing: Spacing = Spacing.Default;
  public width: BlockElementDimension | string | undefined = undefined;

  protected constructor(type: ElementType) {
    this.type = type;
  }

  public setID(value: string): BaseElement {
    this.id = value;

    return this;
  }

  public setIsVisible(value: boolean): BaseElement {
    this.isVisible = value;

    return this;
  }

  public setSpacing(spacing: Spacing): BaseElement {
    this.spacing = spacing;

    return this;
  }

  public shrink(): BaseElement {
    this.width = BlockElementDimension.Auto;

    return this;
  }

  public stretch(): BaseElement {
    this.width = BlockElementDimension.Stretch;

    return this;
  }

  public useSeparator(separator: boolean = true): BaseElement {
    this.separator = separator;

    return this;
  }
}
