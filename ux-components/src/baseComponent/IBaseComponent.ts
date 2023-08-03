/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseAdaptiveCardQuickView, QuickViewNavigator } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentProps } from "../types";

export interface IBaseComponent {
  actionId: string;
  action(quickViewNavigator: QuickViewNavigator<BaseAdaptiveCardQuickView<{}, {}, {}>>): void;
  updateProps(props: ComponentProps): void;
}
