/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ActionType, ColumnSet, Container, Image, TextBlock } from "../elements";
import { ListKeys, NewListType } from "../types";
import { List } from "./List";
import { ListActionID } from "./types";
import { HostTheme } from "../types";
import { peopleData } from "./constants";
import { AvatarBlue_light } from "../assets";

const testHostTheme: HostTheme = "light";
describe("Basic List", () => {
  const listData = [
    { name: "John Doe", isActive: true },
    { name: "Mary Jane", isActive: false },
  ];
  const keys: ListKeys = { titleKey: "name" };
  it("Should generate a basic list", () => {
    const testList = new List("listID", NewListType.BasicList, listData, keys, testHostTheme);
    const firstRow = (testList.items[0] as Container).items[0] as ColumnSet;
    const secondRow = (testList.items[1] as Container).items[0] as ColumnSet;

    expect(testList.items.length).toEqual(2);
    expect((firstRow.columns[0].items[0] as TextBlock).text).toEqual(listData[0].name);
    expect((secondRow.columns[0].items[0] as TextBlock).text).toEqual(listData[1].name);
  });

  it("Should not generate title icon on basic list", () => {
    const testList = new List("listID", NewListType.BasicList, listData, keys, testHostTheme)
      .withTitleIcon(AvatarBlue_light, "TitleAltText")
      .withBodyIcon(AvatarBlue_light, "BodyAltText")
      .withCaptionIcon(AvatarBlue_light, "CaptionAltText");
    const firstRow = (testList.items[0] as Container).items[0] as ColumnSet;
    const secondRow = (testList.items[1] as Container).items[0] as ColumnSet;

    expect(firstRow.columns[0].items.length).toEqual(1);
    expect(secondRow.columns[0].items.length).toEqual(1);
  });

  it("Should generate a list with chevron", () => {
    const testList = new List("listID", NewListType.BasicList, listData, keys, testHostTheme).withChevron(
      "ChevronAction",
      ["Value 1", "Value 2"]
    );
    const firstRow = (testList.items[0] as Container).items[0] as ColumnSet;
    const secondRow = (testList.items[1] as Container).items[0] as ColumnSet;

    expect((firstRow.columns[1].items[0] as ColumnSet).columns[1].items[0].type).toBe("Image");
    expect(firstRow.selectAction.id).toContain("ChevronAction");

    expect((secondRow.columns[1].items[0] as ColumnSet).columns[1].items[0].type).toBe("Image");
    expect(secondRow.selectAction.id).toContain("ChevronAction");
  });

  it("Should generate a list with toggle", () => {
    const testList = new List("listID", NewListType.BasicList, listData, keys, testHostTheme).withToggle(
      "toggleAction",
      "isActive"
    );
    const firstRow = (testList.items[0] as Container).items[0] as ColumnSet;
    const secondRow = (testList.items[1] as Container).items[0] as ColumnSet;

    expect(firstRow.columns[1].selectAction.id).toContain("toggleAction");
    expect(secondRow.columns[1].selectAction.id).toContain("toggleAction");
  });

  it("Should generate a list with radio buttons", () => {
    const testList = new List("listID", NewListType.BasicList, listData, keys, testHostTheme);
    testList.setRadioValue(0);
    testList.withRadioButton();
    const firstRow = (testList.items[0] as Container).items[0] as ColumnSet;
    const secondRow = (testList.items[1] as Container).items[0] as ColumnSet;

    expect(firstRow.columns[0].items[0].type).toBe("Image");
    expect(firstRow.columns[0].selectAction.id).toContain(ListActionID.RadioAction);
    expect(firstRow.columns[0].selectAction.id).toContain("listID");

    expect(secondRow.columns[0].items[0].type).toBe("Image");
    expect(secondRow.columns[0].selectAction.id).toContain(ListActionID.RadioAction);
    expect(secondRow.columns[0].selectAction.id).toContain("listID");
  });

  it("Should generate a list with interactive icon", () => {
    const testList = new List("listID", NewListType.BasicList, listData, keys, testHostTheme).withInteractiveIcon(
      AvatarBlue_light,
      "interactiveAction",
      "testIconAltText"
    );
    const firstRow = (testList.items[0] as Container).items[0] as ColumnSet;
    const secondRow = (testList.items[1] as Container).items[0] as ColumnSet;

    expect(firstRow.columns[1].items[0].type).toBe("Image");
    expect(firstRow.columns[1].selectAction.id).toContain("interactiveAction");

    expect(secondRow.columns[1].items[0].type).toBe("Image");
    expect(secondRow.columns[1].selectAction.id).toContain("interactiveAction");
  });

  it("Should generate a list with left accessory icon", () => {
    const testList = new List("listID", NewListType.BasicList, listData, keys, testHostTheme).withLeftAccessoryIcon(
      AvatarBlue_light
    );
    const firstRow = (testList.items[0] as Container).items[0] as ColumnSet;
    const secondRow = (testList.items[1] as Container).items[0] as ColumnSet;

    expect(firstRow.columns[0].items[0].type).toBe("Image");
    expect(secondRow.columns[0].items[0].type).toBe("Image");
  });

  it("Should generate a list with profile picture", () => {
    const testList = new List("listID", NewListType.BasicList, listData, keys, testHostTheme).withProfilePicture(
      "profile"
    );
    const firstRow = (testList.items[0] as Container).items[0] as ColumnSet;
    const secondRow = (testList.items[1] as Container).items[0] as ColumnSet;

    expect(firstRow.columns[0].items[0].type).toBe("Image");
    expect(secondRow.columns[0].items[0].type).toBe("Image");
  });

  it("Should generate a list with selectable items", () => {
    const testList = new List("listID", NewListType.BasicList, listData, keys, testHostTheme).withSelectableItems(
      "selectAction"
    );
    const firstRow = testList.items[0] as Container;
    const secondRow = testList.items[1] as Container;

    expect(firstRow.selectAction).toBeDefined();
    expect(secondRow.selectAction).toBeDefined();
  });
});

describe("Multiline List", () => {
  const listData = [
    { name: "John Doe", role: "Manager", caption: "Office" },
    { name: "Mary Jane", role: "Engineer", caption: "Hybrid" },
  ];
  const keys: ListKeys = { titleKey: "name", bodyKey: "role", captionKey: "caption" };

  it("Should generate simple multiline list", () => {
    const testMultilineList = new List("listID", NewListType.MultilineList, listData, keys, testHostTheme);
    const firstItem = (testMultilineList.items[0] as Container).items[0] as ColumnSet;
    const secondItem = (testMultilineList.items[1] as Container).items[0] as ColumnSet;

    expect(firstItem.columns[0].items.length).toEqual(3);
    expect((firstItem.columns[0].items[0] as ColumnSet).columns[0].items[0].type).toBe("TextBlock");
    expect(((firstItem.columns[0].items[0] as ColumnSet).columns[0].items[0] as TextBlock).text).toBe(
      listData[0][keys.titleKey]
    );
    expect(((firstItem.columns[0].items[1] as ColumnSet).columns[0].items[0] as TextBlock).text).toBe(
      listData[0][keys.bodyKey]
    );
    expect(((firstItem.columns[0].items[2] as ColumnSet).columns[0].items[0] as TextBlock).text).toBe(
      listData[0][keys.captionKey]
    );

    expect(secondItem.columns[0].items.length).toEqual(3);
    expect((secondItem.columns[0].items[0] as ColumnSet).columns[0].items[0].type).toBe("TextBlock");
    expect(((secondItem.columns[0].items[0] as ColumnSet).columns[0].items[0] as TextBlock).text).toBe(
      listData[1][keys.titleKey]
    );
    expect(((secondItem.columns[0].items[1] as ColumnSet).columns[0].items[0] as TextBlock).text).toBe(
      listData[1][keys.bodyKey]
    );
    expect(((secondItem.columns[0].items[2] as ColumnSet).columns[0].items[0] as TextBlock).text).toBe(
      listData[1][keys.captionKey]
    );
  });

  it("Should generate a multiline list with titleIcon", () => {
    const testMultilineList = new List("listID", NewListType.MultilineList, listData, keys, testHostTheme)
      .withLeftAccessoryIcon("")
      .withLeftAccessoryIcon("")
      .withTitleIcon(AvatarBlue_light, "TitleIcon");
    const firstItem = (testMultilineList.items[0] as Container).items[0] as ColumnSet;
    const secondItem = (testMultilineList.items[1] as Container).items[0] as ColumnSet;

    expect((firstItem.columns[2].items[0] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((firstItem.columns[2].items[0] as ColumnSet).columns.length).toEqual(2);
    expect((firstItem.columns[2].items[1] as ColumnSet).columns.length).toEqual(1);
    expect((firstItem.columns[2].items[2] as ColumnSet).columns.length).toEqual(1);

    expect((secondItem.columns[2].items[0] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((secondItem.columns[2].items[0] as ColumnSet).columns.length).toEqual(2);
    expect((secondItem.columns[2].items[1] as ColumnSet).columns.length).toEqual(1);
    expect((secondItem.columns[2].items[2] as ColumnSet).columns.length).toEqual(1);
  });

  it("Should generate a multiline list with bodyIcon", () => {
    const testMultilineList = new List("listID", NewListType.MultilineList, listData, keys, testHostTheme)
      .withLeftAccessoryIcon("")
      .withLeftAccessoryIcon("")
      .withBodyIcon(AvatarBlue_light, "BodyIcon");
    const firstItem = (testMultilineList.items[0] as Container).items[0] as ColumnSet;
    const secondItem = (testMultilineList.items[1] as Container).items[0] as ColumnSet;

    expect((firstItem.columns[2].items[1] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((firstItem.columns[2].items[0] as ColumnSet).columns.length).toEqual(1);
    expect((firstItem.columns[2].items[1] as ColumnSet).columns.length).toEqual(2);
    expect((firstItem.columns[2].items[2] as ColumnSet).columns.length).toEqual(1);

    expect((secondItem.columns[2].items[1] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((secondItem.columns[2].items[0] as ColumnSet).columns.length).toEqual(1);
    expect((secondItem.columns[2].items[1] as ColumnSet).columns.length).toEqual(2);
    expect((secondItem.columns[2].items[2] as ColumnSet).columns.length).toEqual(1);
  });

  it("Should generate a multiline list with captionIcon", () => {
    const testMultilineList = new List("listID", NewListType.MultilineList, listData, keys, testHostTheme)
      .withLeftAccessoryIcon("")
      .withLeftAccessoryIcon("")
      .withCaptionIcon(AvatarBlue_light, "CaptionIcon");
    const firstItem = (testMultilineList.items[0] as Container).items[0] as ColumnSet;
    const secondItem = (testMultilineList.items[1] as Container).items[0] as ColumnSet;

    expect((firstItem.columns[2].items[2] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((firstItem.columns[2].items[0] as ColumnSet).columns.length).toEqual(1);
    expect((firstItem.columns[2].items[1] as ColumnSet).columns.length).toEqual(1);
    expect((firstItem.columns[2].items[2] as ColumnSet).columns.length).toEqual(2);

    expect((secondItem.columns[2].items[2] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((secondItem.columns[2].items[0] as ColumnSet).columns.length).toEqual(1);
    expect((secondItem.columns[2].items[1] as ColumnSet).columns.length).toEqual(1);
    expect((secondItem.columns[2].items[2] as ColumnSet).columns.length).toEqual(2);
  });

  it("Should generate a multiline list with a left icon and titleIcon", () => {
    const testMultilineList = new List("listID", NewListType.MultilineList, listData, keys, testHostTheme)
      .withLeftAccessoryIcon("")
      .withTitleIcon(AvatarBlue_light, "TitleIcon");
    const firstItem = (testMultilineList.items[0] as Container).items[0] as ColumnSet;
    const secondItem = (testMultilineList.items[1] as Container).items[0] as ColumnSet;

    expect((firstItem.columns[1].items[0] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((firstItem.columns[1].items[0] as ColumnSet).columns.length).toEqual(2);
    expect((firstItem.columns[1].items[1] as ColumnSet).columns.length).toEqual(1);
    expect((firstItem.columns[1].items[2] as ColumnSet).columns.length).toEqual(1);

    expect((secondItem.columns[1].items[0] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((secondItem.columns[1].items[0] as ColumnSet).columns.length).toEqual(2);
    expect((secondItem.columns[1].items[1] as ColumnSet).columns.length).toEqual(1);
    expect((secondItem.columns[1].items[2] as ColumnSet).columns.length).toEqual(1);
  });

  it("Should generate a multiline list with a left icon and bodyIcon", () => {
    const testMultilineList = new List("listID", NewListType.MultilineList, listData, keys, testHostTheme)
      .withLeftAccessoryIcon("")
      .withBodyIcon(AvatarBlue_light, "BodyIcon");
    const firstItem = (testMultilineList.items[0] as Container).items[0] as ColumnSet;
    const secondItem = (testMultilineList.items[1] as Container).items[0] as ColumnSet;

    expect((firstItem.columns[1].items[1] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((firstItem.columns[1].items[0] as ColumnSet).columns.length).toEqual(1);
    expect((firstItem.columns[1].items[1] as ColumnSet).columns.length).toEqual(2);
    expect((firstItem.columns[1].items[2] as ColumnSet).columns.length).toEqual(1);

    expect((secondItem.columns[1].items[1] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((secondItem.columns[1].items[0] as ColumnSet).columns.length).toEqual(1);
    expect((secondItem.columns[1].items[1] as ColumnSet).columns.length).toEqual(2);
    expect((secondItem.columns[1].items[2] as ColumnSet).columns.length).toEqual(1);
  });

  it("Should generate a multiline list with a left icon and captionIcon", () => {
    const testMultilineList = new List("listID", NewListType.MultilineList, listData, keys, testHostTheme)
      .withLeftAccessoryIcon("")
      .withCaptionIcon(AvatarBlue_light, "CaptionIcon");
    const firstItem = (testMultilineList.items[0] as Container).items[0] as ColumnSet;
    const secondItem = (testMultilineList.items[1] as Container).items[0] as ColumnSet;

    expect((firstItem.columns[1].items[2] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((firstItem.columns[1].items[0] as ColumnSet).columns.length).toEqual(1);
    expect((firstItem.columns[1].items[1] as ColumnSet).columns.length).toEqual(1);
    expect((firstItem.columns[1].items[2] as ColumnSet).columns.length).toEqual(2);

    expect((secondItem.columns[1].items[2] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((secondItem.columns[1].items[0] as ColumnSet).columns.length).toEqual(1);
    expect((secondItem.columns[1].items[1] as ColumnSet).columns.length).toEqual(1);
    expect((secondItem.columns[1].items[2] as ColumnSet).columns.length).toEqual(2);
  });

  it("Should generate a multiline list with title icon, body icon, caption icon", () => {
    const testMultilineList = new List("listID", NewListType.MultilineList, listData, keys, testHostTheme)
      .withTitleIcon(AvatarBlue_light, "TitleIcon")
      .withBodyIcon(AvatarBlue_light, "BodyIcon")
      .withCaptionIcon(AvatarBlue_light, "Caption");
    const firstItem = (testMultilineList.items[0] as Container).items[0] as ColumnSet;
    const secondItem = (testMultilineList.items[1] as Container).items[0] as ColumnSet;

    expect((firstItem.columns[0].items[0] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((firstItem.columns[0].items[1] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((firstItem.columns[0].items[2] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((firstItem.columns[0].items[0] as ColumnSet).columns.length).toEqual(2);
    expect((firstItem.columns[0].items[1] as ColumnSet).columns.length).toEqual(2);
    expect((firstItem.columns[0].items[2] as ColumnSet).columns.length).toEqual(2);

    expect((secondItem.columns[0].items[0] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((secondItem.columns[0].items[1] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((secondItem.columns[0].items[2] as ColumnSet).columns[0].items[0].type).toBe("Image");
    expect((secondItem.columns[0].items[0] as ColumnSet).columns.length).toEqual(2);
    expect((secondItem.columns[0].items[1] as ColumnSet).columns.length).toEqual(2);
    expect((secondItem.columns[0].items[2] as ColumnSet).columns.length).toEqual(2);
  });

  it("Should generate multiline list with chevron", () => {
    const testMultilineList = new List("listID", NewListType.MultilineList, listData, keys, testHostTheme).withChevron(
      "chevronActionID"
    );
    const firstItem = (testMultilineList.items[0] as Container).items[0] as ColumnSet;
    const secondItem = (testMultilineList.items[1] as Container).items[0] as ColumnSet;

    expect((firstItem.columns[1].items[0] as ColumnSet).columns[1].items[0].type).toBe("Image");
    expect(firstItem.selectAction.id).toContain("chevronActionID");

    expect((secondItem.columns[1].items[0] as ColumnSet).columns[1].items[0].type).toBe("Image");
    expect(secondItem.selectAction.id).toContain("chevronActionID");
  });

  it("Should generate multiline list with toggle", () => {
    const toggleKey = "isActive";
    const testMultilineList = new List("listID", NewListType.MultilineList, listData, keys, testHostTheme).withToggle(
      "toggleAction",
      toggleKey
    );
    const firstItem = (testMultilineList.items[0] as Container).items[0] as ColumnSet;
    const secondItem = (testMultilineList.items[1] as Container).items[0] as ColumnSet;

    expect(firstItem.columns[1].items[0].type).toBe("Input.Toggle");
    expect(firstItem.columns[1].items[0].id).toContain(toggleKey);

    expect(secondItem.columns[1].items[0].type).toBe("Input.Toggle");
    expect(secondItem.columns[1].items[0].id).toContain(toggleKey);
  });

  it("Should generate multiline list with radio button", () => {
    const testMultilineList = new List("listID", NewListType.MultilineList, listData, keys, testHostTheme);
    testMultilineList.withRadioButton();
    const firstItem = (testMultilineList.items[0] as Container).items[0] as ColumnSet;
    const secondItem = (testMultilineList.items[1] as Container).items[0] as ColumnSet;

    expect(firstItem.columns[0].items[0].type).toBe("Image");
    expect(firstItem.columns[0].selectAction.id).toContain("radioAction");
    expect(firstItem.columns[0].selectAction.id).toContain("listID");

    expect(secondItem.columns[0].items[0].type).toBe("Image");
    expect(secondItem.columns[0].selectAction.id).toContain("radioAction");
    expect(secondItem.columns[0].selectAction.id).toContain("listID");
  });

  it("Should generate multiline list as people list with profile picture", () => {
    const testMultilineList = new List(
      "listID",
      NewListType.MultilineList,
      listData,
      keys,
      testHostTheme
    ).withProfilePicture("profile");
    const firstItem = (testMultilineList.items[0] as Container).items[0] as ColumnSet;
    const secondItem = (testMultilineList.items[1] as Container).items[0] as ColumnSet;

    expect((firstItem.columns[0].items[0] as Image).style).toBe("person");
    expect((secondItem.columns[0].items[0] as Image).style).toBe("person");
  });

  it("Should generate multiline list as people list with action", () => {
    const testMultilineList = new List(
      "listID",
      NewListType.MultilineList,
      listData,
      keys,
      testHostTheme
    ).withPeopleListAction("testActionID", "TestAction");
    const firstItem = testMultilineList.items[0] as Container;
    const secondItem = testMultilineList.items[1] as Container;

    expect(firstItem.items[1].type).toBe("ActionSet");
    expect(secondItem.items[1].type).toBe("ActionSet");
  });

  it("Should generate a list with pagination and on the second page", () => {
    const testList = new List("listID", NewListType.MultilineList, peopleData, { titleKey: "name" }, testHostTheme);
    testList.nextPage();
    testList.resetItems();

    const action = (testList.items[testList.items.length - 1] as ColumnSet).columns[1].selectAction;
    expect(action).toBeDefined();
    expect(action.type).toEqual(ActionType.Submit);
    expect(action.title).toEqual("Go to previous page");
  });
});
