/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseAdaptiveCardView, QuickViewNavigator } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentProps } from "../types";

export interface IBaseComponent {
  actionId: string;
  action(quickViewNavigator: QuickViewNavigator<BaseAdaptiveCardView<{}, {}, {}>>): void;
  updateProps(props: ComponentProps): void;
}
