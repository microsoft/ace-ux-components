/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { SUCCESS_IMAGE_ALT_TEXT } from "./constants";
import { StateView } from "./StateView";
import { StateViewType } from "./StateView.types";
import { HostTheme } from "../types";

export class SuccessView extends StateView {
  constructor(stateViewType: StateViewType, header: string, hostTheme: HostTheme) {
    super(stateViewType, header, SUCCESS_IMAGE_ALT_TEXT, "Success", hostTheme);
  }
}
