/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { InputToggleValue } from "../elements";

export type ManageCalendarData = {
  id: string;
  currentValue: InputToggleValue;
  isSubViewAvailable?: boolean;
};

export type ToggleData = {
  id: string;
  title: string;
  description: string;
  warningMessage?: string;
  isSubViewAvailable?: boolean;
  pendingMessage: string;
  completedMessage: string;
};
