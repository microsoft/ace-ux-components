/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IAction } from "adaptivecards/lib/schema";
import { ActionMode, ActionStyle, ActionType } from "./Schema.types";

export abstract class BaseActionElement implements IAction {
  public readonly id: string;
  public readonly title: string;
  public readonly type: ActionType;
  public readonly tooltip?: string;
  public iconUrl?: string;
  public style: ActionStyle = ActionStyle.Default;
  public mode: ActionMode = ActionMode.Primary;
  public isEnabled: boolean = true;

  protected constructor(type: ActionType, id: string, title: string, tooltip?: string) {
    this.id = id;
    this.title = title;
    this.tooltip = tooltip ? tooltip : title;
    this.type = type;
  }

  public setIconUrl(url: string): BaseActionElement {
    this.iconUrl = url;

    return this;
  }

  public setMode(mode: ActionMode): BaseActionElement {
    this.mode = mode;
    return this;
  }

  public setStyle(style: ActionStyle): BaseActionElement {
    this.style = style;

    return this;
  }

  public setIsEnabled(isEnabled: boolean): BaseActionElement {
    this.isEnabled = isEnabled;
    return this;
  }
}
