/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Container } from "../elements";
import { BaseElement } from "./../elements";
import { ItemsList } from "./../itemsList/ItemsList";
import { SearchBar } from "./searchBar/SearchBar";
import { SearchComponentProps } from "./SearchComponent.types";

function getItems(props: SearchComponentProps): BaseElement[] {
  return [new SearchBar(props.searchBarInput), new ItemsList(props.searchResult)];
}

export class SearchComponent extends Container {
  constructor(props: SearchComponentProps) {
    super(getItems(props));
  }
}
