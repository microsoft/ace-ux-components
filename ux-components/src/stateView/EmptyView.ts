/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { EMPTY_IMAGE_ALT_TEXT } from "./constants";
import { EmptyIcon, EmptySectionIcon } from "../assets";
import { StateView } from "./StateView";
import { StateViewType } from "./StateView.types";

export class EmptyView extends StateView {
  constructor(stateViewType: StateViewType, header: string) {
    super(stateViewType, header, EmptyIcon, EmptySectionIcon, EMPTY_IMAGE_ALT_TEXT);
  }
}
