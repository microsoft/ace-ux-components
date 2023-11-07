/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ActionSubmit, Alignment, ColumnSet, Container, FontColor, TextBlock } from "../elements";
import { HostTheme, ItemsListProps, ListItem, ListType } from "../types";
import { longListData } from "./constants";
import { ItemsList } from "./ItemsList";

const testHostTheme: HostTheme = "light";

describe("Items list component", () => {
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

  it("Should generate a selectable title list", () => {
    const props: ItemsListProps = {
      actionId: "selectItem",
      data,
      listType: ListType.TitleList,
      nextPageId: "nextPage",
      previousPageId: "previousPage",
      startingIndex: 0,
      withChevron: true,
      hostTheme: testHostTheme,
    };

    const itemsList = new ItemsList(props);
    const firstItem = itemsList.items[0] as ColumnSet;
    const secondItem = itemsList.items[1] as ColumnSet;
    const secondItemText = secondItem.columns[0].items[0] as TextBlock;

    expect(firstItem.columns.length).toEqual(2);
    expect(firstItem.selectAction).toBeDefined();
    expect(secondItemText.color).toEqual(FontColor.Default);
  });

  it("Should generate a selectable title list with a selected item", () => {
    const props: ItemsListProps = {
      actionId: "selectItem",
      data,
      listType: ListType.TitleList,
      nextPageId: "nextPage",
      previousPageId: "previousPage",
      selectedItem,
      startingIndex: 0,
      hostTheme: testHostTheme,
    };

    const itemsList = new ItemsList(props);
    const firstItem = itemsList.items[0] as ColumnSet;
    const secondItem = itemsList.items[1] as ColumnSet;
    const secondItemText = secondItem.columns[0].items[0] as TextBlock;

    expect(firstItem.columns.length).toEqual(1);
    expect(firstItem.selectAction).toBeDefined();
    expect(secondItemText.color).toEqual(FontColor.Accent);
  });

  it("Should generate a list with subtitles and a selected item", () => {
    const props: ItemsListProps = {
      data,
      listType: ListType.TitleWithSubtitleList,
      nextPageId: "nextPage",
      previousPageId: "previousPage",
      selectedItem,
      startingIndex: 0,
      hostTheme: testHostTheme,
    };

    const itemsList = new ItemsList(props);
    const firstItem = itemsList.items[0] as ColumnSet;
    const secondItem = itemsList.items[1] as ColumnSet;
    const secondItemText = secondItem.columns[0].items[0] as TextBlock;

    expect(firstItem.columns.length).toEqual(1);
    expect(firstItem.selectAction).toBeUndefined();
    expect(secondItemText.color).toEqual(FontColor.Accent);
  });

  it("Should generate a people list with a chevron", () => {
    const props: ItemsListProps = {
      data,
      listType: ListType.PeopleList,
      nextPageId: "nextPage",
      previousPageId: "previousPage",
      personaProps: {
        actions: { alignment: Alignment.Left, actionElements: [new ActionSubmit("test", "Test")] },
        statusText: { icon: "testIcon", text: "Test text" },
        hostTheme: testHostTheme,
      },
      startingIndex: 0,
      withChevron: true,
      hostTheme: testHostTheme,
    };

    const itemsList = new ItemsList(props);
    const firstItem = itemsList.items[0] as Container;
    const secondItem = itemsList.items[1] as Container;
    const secondItemText = (secondItem.items[0] as ColumnSet).columns[1].items[0] as TextBlock;

    expect((firstItem.items[0] as ColumnSet).columns.length).toEqual(3);
    expect(firstItem.selectAction).toBeUndefined();
    expect(secondItemText.color).toEqual(FontColor.Default);
  });

  it("Should generate a people list with a selected item", () => {
    const props: ItemsListProps = {
      data,
      listType: ListType.PeopleList,
      nextPageId: "nextPage",
      previousPageId: "previousPage",
      personaProps: {
        actions: { alignment: Alignment.Right, actionElements: [new ActionSubmit("test", "Test")] },
        iconAction: { icon: "testIcon", actionElement: new ActionSubmit("test", "Test") },
        workStatus: { statusType: "Day", data: [{ displayIcon: "dayIcon", displayText: "Day text" }] },
        hostTheme: testHostTheme,
      },
      selectedItem,
      startingIndex: 0,
      hostTheme: testHostTheme,
    };

    const itemsList = new ItemsList(props);
    const firstItem = itemsList.items[0] as Container;
    const secondItem = itemsList.items[1] as Container;
    const secondItemText = (secondItem.items[0] as ColumnSet).columns[1].items[0] as TextBlock;

    expect((firstItem.items[0] as ColumnSet).columns.length).toEqual(3);
    expect(firstItem.selectAction).toBeUndefined();
    expect(secondItemText.color).toEqual(FontColor.Default);
  });

  it("Should generate a people list with a center aligned action", () => {
    const props: ItemsListProps = {
      data,
      listType: ListType.PeopleList,
      nextPageId: "nextPage",
      previousPageId: "previousPage",
      personaProps: {
        actions: { alignment: Alignment.Center, actionElements: [new ActionSubmit("test", "Test")] },
        hostTheme: testHostTheme,
      },
      selectedItem,
      startingIndex: 0,
      hostTheme: testHostTheme,
    };

    const itemsList = new ItemsList(props);
    const firstItem = itemsList.items[0] as Container;
    const secondItem = itemsList.items[1] as Container;
    const secondItemText = (secondItem.items[0] as ColumnSet).columns[1].items[0] as TextBlock;

    expect((firstItem.items[0] as ColumnSet).columns.length).toEqual(2);
    expect(firstItem.selectAction).toBeUndefined();
    expect(secondItemText.color).toEqual(FontColor.Default);
  });

  it("Should generate a list with pagination and on the first page", () => {
    const props: ItemsListProps = {
      data: longListData,
      listType: ListType.TitleList,
      nextPageId: "nextPage",
      previousPageId: "previousPage",
      startingIndex: 0,
      hostTheme: testHostTheme,
    };

    const list = new ItemsList(props);
    // Expecting 25 items + the pagination arrows
    expect(list.items.length).toEqual(26);
  });

  it("Should generate a list with pagination and on the last page", () => {
    const props: ItemsListProps = {
      data: longListData,
      listType: ListType.TitleList,
      nextPageId: "nextPage",
      previousPageId: "previousPage",
      startingIndex: 25,
      hostTheme: testHostTheme,
    };

    const list = new ItemsList(props);
    // Expecting 8 items (the list has 33 items) + the pagination arrows
    expect(list.items.length).toEqual(9);
  });
});
