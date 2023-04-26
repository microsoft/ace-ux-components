/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ERROR_IMAGE_ALT_TEXT } from "./constants";
import { ErrorIcon, ErrorSectionIcon } from "../assets";
import { StateView } from "./StateView";
import { StateViewType } from "./StateView.types";

export class ErrorView extends StateView {
  constructor(stateViewType: StateViewType, header: string) {
    super(stateViewType, header, ErrorIcon, ErrorSectionIcon, ERROR_IMAGE_ALT_TEXT);
  }
}
