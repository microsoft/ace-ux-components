/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { HostTheme } from "@microsoft/sp-adaptive-card-extension-base";

export type SearchBarProps = {
  cancelButtonVisible: boolean;
  isSearching: boolean;
  placeholder: string;
  searchBoxCancelButtonId?: string;
  searchBoxInputId: string;
  searchBoxSubmitButtonId: string;
  searchTextValue?: string;
  showSearchResultHeading: boolean;
  hostTheme: HostTheme;
  componentID?: string;
};
