/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { HostTheme } from "@microsoft/sp-adaptive-card-extension-base";
import { ItemsListProps, ListItem, ListType } from "../types";
import { ItemsList } from "./../itemsList/ItemsList";
import { SearchBar } from "./searchBar";
import { SearchBarProps } from "./searchBar/SearchBarProps.types";
import { SearchComponent } from "./SearchComponent";
import { SearchComponentProps } from "./SearchComponent.types";

const testHostTheme: HostTheme = "light";
describe("Search Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });
});

const searchboxprops: SearchBarProps = {
  searchTextValue: "Search Input",
  searchBoxInputId: "testSearch",
  searchBoxSubmitButtonId: "testSearchSubmit",
  searchBoxCancelButtonId: "testSearchCancel",
  isSearching: false,
  cancelButtonVisible: true,
  showSearchResultHeading: true,
  placeholder: "Search Input",
  hostTheme: "light",
};

const selectedItem = {
  name: "Test 2",
  subtitle: "subtitle 2",
};
const data: ListItem[] = [
  {
    name: "Test 1",
  },
  selectedItem,
];

const itemList: ItemsListProps = {
  actionId: "selectItem",
  data,
  listType: ListType.TitleList,
  nextPageId: "nextPage",
  previousPageId: "previousPage",
  startingIndex: 0,
  hostTheme: testHostTheme,
};

const searchProps: SearchComponentProps = {
  searchBarInput: searchboxprops,
  searchResult: itemList,
};

it("Should generate search component", () => {
  const searchBar = new SearchComponent(searchProps);
  expect(searchBar).toBeDefined();
  expect(searchBar.items.length).toEqual(2);
  expect(searchBar.items[0]).toBeInstanceOf(SearchBar);
  expect(searchBar.items[1]).toBeInstanceOf(ItemsList);
});

it("Should generate search component with search box and item list component as child components", () => {
  const searchBar = new SearchComponent(searchProps);
  expect(searchBar.items.length).toEqual(2);
  expect(searchBar.items[0]).toBeInstanceOf(SearchBar);
  expect(searchBar.items[1]).toBeInstanceOf(ItemsList);
});
