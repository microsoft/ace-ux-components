/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { HeaderLine, TransparentHeaderLine } from "../assets";
import { MOBILE } from "../types";
import {
  ActionSet,
  ActionStyle,
  ActionSubmit,
  BaseElement,
  Column,
  ColumnSet,
  Container,
  Spacing,
  TextBlock,
  TextBlockStyle,
} from "../elements";
import { Picker } from "../picker";

export enum HeaderType {
  Basic = "basic",
  Empty = "empty",
  Picker = "picker",
}

export class Header<TState = {}> extends Container {
  private headerType: HeaderType;

  /**
   * Header component. Can either be a picker or a basic header with a title, description and call to action.
   * The `TProps` and `TState` types are only needed if the header type is set to `HeaderType.Picker`.
   *
   * **NOTE**: If the header type is set to `HeaderType.Picker`, but nothing is displayed, make sure the picker is passed as the 3rd param.
   * @param type Header type.
   * @param title Header title. Only needed if the header type is set to `HeaderType.Basic`.
   * @param picker The picker to be used in the header. Only needed if the header type is set to `HeaderType.Picker`.
   */
  constructor(type: HeaderType, title?: string, deviceContext?: string, picker?: Picker<TState>) {
    let headerContent: BaseElement = null;
    switch (type) {
      case HeaderType.Basic:
        headerContent = new ColumnSet([
          new Column([new TextBlock(title).setStyle(TextBlockStyle.Heading).enableWrap().setSpacing(Spacing.None)])
            .stretch()
            .setSpacing(Spacing.None),
        ]).setSpacing(Spacing.None);
        break;
      case HeaderType.Picker:
        headerContent = picker;
        break;
      case HeaderType.Empty:
        // Do nothing, leave the headerContent to null
        break;
      default:
        // Do nothing, leave the headerContent to null
        break;
    }

    super([
      new Container([])
        .setBackgroundImage(deviceContext === MOBILE ? TransparentHeaderLine : HeaderLine)
        .enableBleed()
        .setSpacing(Spacing.None)
        .stretch()
        .setIsVisible(deviceContext !== MOBILE),
      headerContent,
    ]);

    this.headerType = type;
  }

  /**
   * Adds a button on the right side of the title. Only applies CTA if the header type is set to `HeaderType.Basic`.
   * @param id Action id.
   * @param text Text displayed on the button.
   * @returns Itself to enable method chaining.
   */
  public withCallToAction(id: string, text: string): Header {
    if (this.headerType === HeaderType.Basic) {
      (this.items[1] as ColumnSet).columns.push(
        new Column([new ActionSet([new ActionSubmit(id, text, {}, text).setStyle(ActionStyle.Positive)])]).shrink()
      );
    }

    return this;
  }

  /**
   * Adds a description below the title. Only applies description if the header type is set to `HeaderType.Basic`.
   * @param description Description text to be displayed.
   * @returns Itself to enable method chaining.
   */
  public withDescription(description: string): Header {
    if (this.headerType === HeaderType.Basic) {
      this.items.push(new TextBlock(description).enableWrap());
    }

    return this;
  }
}
