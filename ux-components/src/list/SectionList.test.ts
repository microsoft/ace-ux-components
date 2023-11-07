/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ColumnSet, FontColor, FontSize, FontWeight, Image, TextBlock } from "../elements";
import { NewListType } from "../types";
import { sectionActionTexts, sectionListData } from "./constants";
import { List } from "./List";
import { SectionList } from "./SectionList";
import { ListActionID } from "./types";
import { HostTheme } from "../types";

const testHostTheme: HostTheme = "light";
describe("SectionList component", () => {
  let sectionList: SectionList;
  describe("Basic SectionList", () => {
    beforeEach(() => {
      sectionList = new SectionList("basicList", NewListType.BasicList, sectionListData, testHostTheme);
    });

    it("Should generate the items properly", () => {
      expect(sectionList.items.length).toEqual(6);
    });

    it("Should append an icon to the left of the section headers", () => {
      sectionList.withSectionIcon("testingIcon", "testingIconAltText");
      for (const item of sectionList.items) {
        if (item instanceof ColumnSet) {
          expect(item.columns.length).toEqual(2);
          expect(item.columns[0].items[0] instanceof Image).toBeTruthy();
        }
      }
    });

    it("Should apply the list expansion functionality to the section headers", () => {
      sectionList.items[1].setIsVisible(false);
      sectionList.withSectionExpansion();
      for (const item of sectionList.items) {
        if (item instanceof ColumnSet) {
          expect(item.columns[0].items[0] instanceof Image).toBeTruthy();
          expect(item.columns[0].selectAction.id).toContain(ListActionID.ExpandCollapse);
        }
      }
    });

    it("Should add an actionable text on the right of section headers", () => {
      sectionList.withSectionAction("actionID", sectionActionTexts);
      for (const item of sectionList.items) {
        if (item instanceof ColumnSet) {
          expect(item.columns[1].items[0] instanceof TextBlock).toBeTruthy();
          expect((item.columns[1].items[0] as TextBlock).color).toEqual(FontColor.Accent);
          expect((item.columns[1].items[0] as TextBlock).size).toEqual(FontSize.Small);
          expect((item.columns[1].items[0] as TextBlock).weight).toEqual(FontWeight.Bolder);
        }
      }
    });

    it("Should add an actionable icon on the right of section headers", () => {
      sectionList.withSectionIconAction("actionID", sectionActionTexts, ["", "", ""]);
      for (const item of sectionList.items) {
        if (item instanceof ColumnSet) {
          expect(item.columns[1].items[0] instanceof Image).toBeTruthy();
          expect(item.columns[1].selectAction.id).toContain("actionID");
        }
      }
    });

    it("Should add a left accessory icon to the left of the list items", () => {
      (sectionList.items[1] as List).withLeftAccessoryIcon = jest.fn();
      sectionList.withListLeftAccessoryIcon("iconUrl");
      expect((sectionList.items[1] as List).withLeftAccessoryIcon).toHaveBeenCalled();
    });

    it("Should add a chevron to the right of the list items", () => {
      (sectionList.items[1] as List).withChevron = jest.fn();
      sectionList.withListChevron("actionID");
      expect((sectionList.items[1] as List).withChevron).toHaveBeenCalled();
    });

    it("Should add toggle to the right of the list items", () => {
      (sectionList.items[1] as List).withToggle = jest.fn();
      (sectionList.items[3] as List).withToggle = jest.fn();
      (sectionList.items[5] as List).withToggle = jest.fn();
      sectionList.withListToggles("actionID", ["isActive", "isActive", "isActive"]);
      expect((sectionList.items[1] as List).withToggle).toHaveBeenCalled();
    });

    it("Should add an interactive icon to the right of the list items", () => {
      (sectionList.items[1] as List).withInteractiveIcon = jest.fn();
      sectionList.withListInteractiveIcon("iconUrl", "actionID", "altText");
      expect((sectionList.items[1] as List).withInteractiveIcon).toHaveBeenCalled();
    });

    it("Should add a radio button to the left of the list items", () => {
      (sectionList.items[1] as List).withRadioButton = jest.fn();
      sectionList.withListRadioButton();
      expect((sectionList.items[1] as List).withRadioButton).toHaveBeenCalled();
    });

    it("Should NOT add a small icon to the left of the title of list items", () => {
      (sectionList.items[1] as List).withTitleIcon = jest.fn();
      sectionList.withListTitleIcon("iconUrl", "altText");
      expect((sectionList.items[1] as List).withTitleIcon).not.toHaveBeenCalled();
    });

    it("Should NOT add a small icon to the left of the body of list items", () => {
      (sectionList.items[1] as List).withBodyIcon = jest.fn();
      sectionList.withListBodyIcon("iconUrl", "altText");
      expect((sectionList.items[1] as List).withBodyIcon).not.toHaveBeenCalled();
    });

    it("Should NOT add a small icon to the left of the caption of list items", () => {
      (sectionList.items[1] as List).withCaptionIcon = jest.fn();
      sectionList.withListCaptionIcon("iconUrl", "altText");
      expect((sectionList.items[1] as List).withCaptionIcon).not.toHaveBeenCalled();
    });
  });

  describe("Multiline SectionList", () => {
    beforeEach(() => {
      sectionList = new SectionList("multilineList", NewListType.MultilineList, sectionListData, testHostTheme);
    });

    it("Should add a small icon to the left of the title of list items", () => {
      (sectionList.items[1] as List).withTitleIcon = jest.fn();
      sectionList.withListTitleIcon("iconUrl", "altText");
      expect((sectionList.items[1] as List).withTitleIcon).toHaveBeenCalled();
    });

    it("Should add a small icon to the left of the body of list items", () => {
      (sectionList.items[1] as List).withBodyIcon = jest.fn();
      sectionList.withListBodyIcon("iconUrl", "altText");
      expect((sectionList.items[1] as List).withBodyIcon).toHaveBeenCalled();
    });

    it("Should add a small icon to the left of the caption of list items", () => {
      (sectionList.items[1] as List).withCaptionIcon = jest.fn();
      sectionList.withListCaptionIcon("iconUrl", "altText");
      expect((sectionList.items[1] as List).withCaptionIcon).toHaveBeenCalled();
    });
  });
});
