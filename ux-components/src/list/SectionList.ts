/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ChevronDown, ChevronRight } from "../assets";
import { ComplexComponent } from "../baseComponent/ComplexComponent";
import {
  ActionSubmit,
  ActionToggleVisibility,
  BaseElement,
  Column,
  ColumnSet,
  ContainerStyle,
  FontColor,
  FontSize,
  FontWeight,
  Image,
  TextBlock,
} from "../elements";
import { ListKeys, NewListType, SectionListData } from "../types";
import { List } from "./List";
import { ListActionID } from "./types";

export class SectionList extends ComplexComponent {
  private sectionListData: SectionListData[];
  private listType: NewListType;

  constructor(componentID: string, listType: NewListType, sectionListData: SectionListData[]) {
    super(componentID);

    this.listType = listType;
    this.sectionListData = sectionListData;
    this.generateItems();
  }

  private generateItems(): void {
    const items: BaseElement[] = [];

    for (let index = 0; index < this.sectionListData.length; index++) {
      const listData: unknown[] = this.sectionListData[index].data;
      const sectionName: string = this.sectionListData[index].sectionName;
      const listKeys: ListKeys = this.sectionListData[index].listKeys;

      items.push(
        new ColumnSet([
          new Column([new TextBlock(sectionName).setSize(FontSize.Small).setWeight(FontWeight.Bolder)]).stretch(),
        ])
          .setStyle(ContainerStyle.Emphasis)
          .enableBleed()
          .stretch(),
        new List(`${this.componentID}List${index}`, this.listType, listData, listKeys)
      );
    }

    this.items = items;
  }

  /**
   * Section methods
   */

  /**
   * Adds an icon to the left of each section headers.
   * @param iconUrl URL of the icon to display.
   * @param altText Alt text of the icons.
   * @returns Itself.
   */
  public withSectionIcon(iconUrl: string, altText: string): SectionList {
    for (const item of this.items) {
      // The Section headers are ColumnSets whereas the Lists are Containers
      if (item instanceof ColumnSet) {
        item.columns.unshift(new Column([new Image(iconUrl, altText).setHeight("24px").setWidth("24px")]).shrink());
      }
    }

    return this;
  }

  /**
   * Adds the ability to expand/collapse a section.
   * @returns Itself.
   */
  public withSectionExpansion(): SectionList {
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      if (item instanceof ColumnSet) {
        item.columns.unshift(
          new Column([
            new Image(ChevronDown, `Click here to collapse the list items for section ${index / 2}`)
              .setHeight("16px")
              .setWidth("16px")
              .setID(`collapseImage${index}`),
            new Image(ChevronRight, `Click here to expand the list items for section ${index / 2}`)
              .setHeight("16px")
              .setWidth("16px")
              .setID(`expandImage${index}`)
              .setIsVisible(false),
          ])
            .setAction(
              new ActionToggleVisibility(`${ListActionID.ExpandCollapse}${index}`, "", [
                `${this.componentID}List${index / 2}`,
                `collapseImage${index}`,
                `expandImage${index}`,
              ])
            )
            .shrink()
        );
      }
    }

    return this;
  }

  /**
   * Adds an action to the right of each section headers with some text.
   * @param actionID Action ID to use in your onAction method
   * @param displayedText Text to display for the action.
   * @returns Itself.
   */
  public withSectionAction(actionID: string, displayedTexts: string[]): SectionList {
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      // The Section headers are ColumnSets whereas the Lists are Containers
      if (item instanceof ColumnSet) {
        // Index for displayed texts is the items index / 2, since the sections are items 0, 2, 4, 6... and so on
        const textIndex: number = Math.floor(index / 2);
        item.columns.push(
          new Column([
            new TextBlock(displayedTexts[textIndex])
              .setColor(FontColor.Accent)
              .setSize(FontSize.Small)
              .setWeight(FontWeight.Bolder),
          ])
            .setAction(new ActionSubmit(`${actionID}${index}`, displayedTexts[textIndex], { sectionIndex: textIndex }))
            .shrink()
        );
      }
    }

    return this;
  }

  /**
   * Adds an action to the right of each section headers with an icon.
   * @param actionID Action ID to use in your onAction method.
   * @param iconUrl URL of the icon to display.
   * @param iconAltText Alternative text for the displayed icon.
   * @returns Itself.
   */
  public withSectionIconAction(actionID: string, iconUrls: string[], iconAltTexts: string[]): SectionList {
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      // The Section headers are ColumnSets whereas the Lists are Containers
      if (item instanceof ColumnSet) {
        // Index for displayed icons is the items index / 2, since the sections are items 0, 2, 4, 6... and so on
        const iconIndex: number = Math.floor(index / 2);
        item.columns.push(
          new Column([new Image(iconUrls[iconIndex], iconAltTexts[iconIndex]).setHeight("24px").setWidth("24px")])
            .setAction(new ActionSubmit(`${actionID}${index}`, iconAltTexts[iconIndex], { sectionIndex: iconIndex }))
            .shrink()
        );
      }
    }

    return this;
  }

  /**
   * List methods
   */

  /**
   * Adds an accessory icon to the left of the list items.
   * @param iconUrl URL of the icon to display.
   * @returns Itself.
   */
  public withListLeftAccessoryIcon(iconUrl: string): SectionList {
    for (const item of this.items) {
      if (item instanceof List) {
        item.withLeftAccessoryIcon(iconUrl);
      }
    }

    return this;
  }

  /**
   * Adds a chevron to the right of each list items and makes the item actionable.
   * @param actionID Action ID to use in your onAction method.
   * @returns Itself.
   */
  public withListChevron(actionID: string): SectionList {
    for (const item of this.items) {
      if (item instanceof List) {
        item.withChevron(actionID);
      }
    }

    return this;
  }

  /**
   * Adds a toggle to the right of each list items.
   * @param actionID Action ID to use in your onAction method.
   * @param toggleKeys Keys for the toggled value in each list.
   * @returns Itself.
   */
  public withListToggles(actionID: string, toggleKeys: string[]): SectionList {
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      if (item instanceof List) {
        item.withToggle(actionID, toggleKeys[Math.floor(index / 2)]);
      }
    }

    return this;
  }

  /**
   * Adds an actionable column containing an icon to the right of each list items.
   * @param iconURL URL of the icon displayed.
   * @param actionID Action ID to use in your onAction method.
   * @returns Itself.
   */
  public withListInteractiveIcon(iconURL: string, actionID: string, iconAltText: string): SectionList {
    for (const item of this.items) {
      if (item instanceof List) {
        item.withInteractiveIcon(iconURL, actionID, iconAltText);
      }
    }

    return this;
  }

  /**
   * Adds a radio button to the left of each list items.
   * This method cannot be chained.
   * @param actionID Action ID to use in your onAction method.
   * @returns Itself.
   */
  public withListRadioButton(): void {
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      if (item instanceof List) {
        item.withRadioButton();
      }
    }
  }

  /**
   * Adds an icon to the left of the title of each item.
   * @param iconUrl Something
   * @param iconAltText Something accessible.
   * @returns Itself.
   */
  public withListTitleIcon(iconUrl: string, iconAltText: string): SectionList {
    if (this.listType === NewListType.BasicList) {
      return this;
    }

    for (const item of this.items) {
      if (item instanceof List) {
        item.withTitleIcon(iconUrl, iconAltText);
      }
    }

    return this;
  }

  /**
   * Adds an icon to the left of the body of each item.
   * @param iconUrl Something
   * @param iconAltText Something accessible.
   * @returns Itself.
   */
  public withListBodyIcon(iconUrl: string, iconAltText: string): SectionList {
    if (this.listType === NewListType.BasicList) {
      return this;
    }

    for (const item of this.items) {
      if (item instanceof List) {
        item.withBodyIcon(iconUrl, iconAltText);
      }
    }

    return this;
  }

  /**
   * Adds an icon to the left of the caption of each item.
   * @param iconUrl Something
   * @param iconAltText Something accessible.
   * @returns Itself.
   */
  public withListCaptionIcon(iconUrl: string, iconAltText: string): SectionList {
    if (this.listType === NewListType.BasicList) {
      return this;
    }

    for (const item of this.items) {
      if (item instanceof List) {
        item.withCaptionIcon(iconUrl, iconAltText);
      }
    }

    return this;
  }

  /**
   * Adds a profile picture to the left of each items.
   * @param pictureKeys The keys used to access the item's profile picture.
   * @returns Itself.
   */
  public withListProfilePicture(pictureKeys: string[]): SectionList {
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      if (item instanceof List) {
        item.withProfilePicture(pictureKeys[Math.floor(index / 2)]);
      }
    }

    return this;
  }

  /**
   * Adds an action below each item. Only applies to Multiline lists.
   * @param actionID Action ID.
   * @param title Text displayed on the button.
   * @returns Itself.
   */
  public withListPeopleAction(actionID: string, title: string): SectionList {
    if (this.listType === NewListType.BasicList) {
      return this;
    }

    for (const item of this.items) {
      if (item instanceof List) {
        item.withPeopleListAction(actionID, title);
      }
    }

    return this;
  }
}
