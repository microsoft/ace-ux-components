/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { SUCCESS_IMAGE_ALT_TEXT } from "./constants";
import { SuccessIcon, SuccessSectionIcon } from "../assets";
import { StateView } from "./StateView";
import { StateViewType } from "./StateView.types";

export class SuccessView extends StateView {
  constructor(stateViewType: StateViewType, header: string) {
    super(stateViewType, header, SuccessIcon, SuccessSectionIcon, SUCCESS_IMAGE_ALT_TEXT);
  }
}
