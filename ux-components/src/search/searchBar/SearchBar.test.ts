/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ColumnSet, TextBlock } from "../../elements";
import { SearchBar } from "./SearchBar";
import { SearchBarProps } from "./SearchBarProps.types";

describe("SearchBar Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });
});

const props: SearchBarProps = {
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

it("Should create search Bar component", () => {
  const searchBar = new SearchBar(props);
  expect(searchBar).toBeDefined();
});

it("Should generate search bar component with two column set", () => {
  const searchBar = new SearchBar(props);
  expect(searchBar).toBeDefined();
  expect(searchBar.items.length).toEqual(2);
  expect(searchBar.items[0]).toBeInstanceOf(ColumnSet);
  expect(searchBar.items[1]).toBeInstanceOf(ColumnSet);
});

it("Should generate search bar component with 3 items in first column set", () => {
  const searchBar = new SearchBar(props);
  expect(searchBar).toBeDefined();
  expect(searchBar.items[0]).toBeInstanceOf(ColumnSet);
  const firstItems = searchBar.items[0] as ColumnSet;
  expect(firstItems.columns.length).toBe(3);
});

it("Should generate search bar component with search result text as searching", () => {
  props.isSearching = true;
  const searchBar = new SearchBar(props);
  expect(searchBar).toBeDefined();
  expect(searchBar.items[1]).toBeInstanceOf(ColumnSet);
  const firstItems = searchBar.items[1] as ColumnSet;
  expect(firstItems.columns.length).toBe(1);
  const textBlock = firstItems.columns[0].items[0] as TextBlock;
  expect(textBlock.text).toBe("Searching...");
});
