/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ActionStyle } from "../elements";

export type AlertViewAction = {
  actionText: string;
  actionId: string;
  actionData?: any;
  actionStyle?: ActionStyle;
};

export type AlertIcon = {
  iconName: string;
  size?: string;
};
