/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { EMPTY_IMAGE_ALT_TEXT } from "./constants";
import { StateView } from "./StateView";
import { StateViewType } from "./StateView.types";
import { HostTheme } from "@microsoft/sp-adaptive-card-extension-base";

export class EmptyView extends StateView {
  constructor(stateViewType: StateViewType, header: string, hostTheme: HostTheme) {
    super(stateViewType, header, EMPTY_IMAGE_ALT_TEXT, "Empty", hostTheme);
  }
}
