/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export type SearchBarProps = {
  cancelButtonVisible: boolean;
  isSearching: boolean;
  placeholder: string;
  searchBoxCancelButtonId?: string;
  searchBoxInputId: string;
  searchBoxSubmitButtonId: string;
  searchTextValue?: string;
  showSearchResultHeading: boolean;
};
