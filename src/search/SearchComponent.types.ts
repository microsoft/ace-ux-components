/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ItemsListProps } from "../types";
import { SearchBarProps } from "./searchBar/SearchBarProps.types";

export type SearchComponentProps = {
  searchBarInput: SearchBarProps;
  searchResult: ItemsListProps;
};
