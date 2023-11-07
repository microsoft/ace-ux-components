/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { isEqual } from "@microsoft/sp-lodash-subset";
import { ComplexComponent } from "../baseComponent/ComplexComponent";
import {
  ActionSet,
  ActionSubmit,
  Alignment,
  BaseElement,
  Column,
  ColumnSet,
  Container,
  FontColor,
  FontSize,
  FontWeight,
  Image,
  ImageStyle,
  InputToggle,
  InputToggleValue,
  Spacing,
  TextBlock,
} from "../elements";
import { IconName, IconProps, ListKeys, NewListType } from "../types";
import { ListActionID } from "./types";
import { HostTheme } from "../types";
import { getIcon } from "../getIcon";

const PAGINATION_SKIP: number = 25;

export class List extends ComplexComponent {
  private listType: NewListType;
  private listData: unknown[];
  private listDataKeys: ListKeys;
  private needsPagination: boolean;
  private selectedRadioItemIndex: number | undefined;
  private startIndex: number;
  private hostTheme: HostTheme;

  /**
   * List component. Can either be a basic list or multiline list with various iterations like with chevrons, radios, toggles, etc.
   * Please consult with your designers on the possible iterations.
   * @param type List type.
   * @param listData Data to be displayed in the list.
   * @param listDataKeys Keys to be used to display data on the list, ex: ["title", "titleIcon", "body", "bodyIcon", "caption", "captionIcon"]. If the specific "key" is not included, simply pass an empty string "".
   */
  constructor(
    componentID: string,
    type: NewListType,
    listData: unknown[],
    listDataKeys: ListKeys,
    hostTheme: HostTheme
  ) {
    super(componentID);
    this.id = componentID;
    this.listType = type;
    this.listData = listData;
    this.listDataKeys = listDataKeys;
    this.needsPagination = listData.length > PAGINATION_SKIP;
    this.startIndex = 0;
    this.hostTheme = hostTheme;
    this.generateItems();
  }

  public getRadioValue(): number | undefined {
    return this.selectedRadioItemIndex;
  }

  public setRadioValue(index: number): void {
    this.selectedRadioItemIndex = index;
  }

  private generateItems(): void {
    const items: BaseElement[] = [];
    const end: number =
      this.startIndex + PAGINATION_SKIP < this.listData.length
        ? this.startIndex + PAGINATION_SKIP
        : this.listData.length;

    for (let index = this.startIndex; index < end; index++) {
      const dataItem = this.listData[index];
      const item: ColumnSet = this.getItem(dataItem).setMinHeight("30px");
      items.push(new Container([item]).useSeparator());
    }

    if (this.needsPagination) {
      const isFirstPage = this.startIndex === 0;
      const isLastPage = end === this.listData.length;

      const iconPropsLeft: IconProps = {
        icon: isFirstPage ? IconName.ChevronLeftDisabled : IconName.ChevronLeft,
        altText: "Left arrow",
        hostTheme: this.hostTheme,
      };

      const iconPropsRight: IconProps = {
        icon: isLastPage ? IconName.ChevronRightDisabled : IconName.ChevronRight,
        altText: "Right arrow",
        hostTheme: this.hostTheme,
      };

      const paginationSection: ColumnSet = new ColumnSet([
        new Column([]).stretch(),
        new Column([getIcon(iconPropsLeft)]).shrink(),
        new Column([new TextBlock(`${this.startIndex + 1}-${end}`)]).shrink(),
        new Column([getIcon(iconPropsRight)]).shrink(),
        new Column([]).stretch(),
      ]);

      if (!isFirstPage) {
        paginationSection.columns[1].setAction(
          new ActionSubmit(
            `${ListActionID.PreviousPage}-${this.componentID}`,
            "Go to previous page",
            { componentID: this.componentID },
            "Go to previous page"
          )
        );
      }

      if (!isLastPage) {
        paginationSection.columns[3].setAction(
          new ActionSubmit(
            `${ListActionID.NextPage}-${this.componentID}`,
            "Go to next page",
            { componentID: this.componentID },
            "Go to next page"
          )
        );
      }

      items.push(paginationSection);
    }

    this.items = items;
  }

  private getItem(dataItem: unknown): ColumnSet {
    switch (this.listType) {
      case NewListType.MultilineList:
        return new ColumnSet([
          new Column([
            new ColumnSet([
              new Column([
                new TextBlock(dataItem[this.listDataKeys.titleKey])
                  .enableWrap()
                  .setSize(FontSize.Default)
                  .setWeight(FontWeight.Bolder)
                  .setColor(FontColor.Default),
              ]),
            ]).setSpacing(Spacing.Small),
            new ColumnSet([
              new Column([
                new TextBlock(this.listDataKeys.bodyKey ? dataItem[this.listDataKeys.bodyKey] : "").enableWrap(),
              ]),
            ]).setSpacing(Spacing.None),
            new ColumnSet([
              new Column([
                new TextBlock(this.listDataKeys.captionKey ? dataItem[this.listDataKeys.captionKey] : "")
                  .enableWrap()
                  .setSize(FontSize.Small),
              ]),
            ]).setSpacing(Spacing.Small),
          ]),
        ]);
      default:
        // Basic list case.
        return new ColumnSet([
          new Column([new TextBlock(dataItem[this.listDataKeys.titleKey]).enableWrap()]).stretch(),
        ]);
    }
  }

  /**
   * Adds an icon to the left of the title in multiline list.
   * @param iconUrl Something
   * @param iconAltText Something accessible
   * @returns Itself.
   */
  public withTitleIcon(iconUrl: string, iconAltText: string): List {
    if (this.listType === NewListType.BasicList) {
      return this;
    }

    for (const item of this.items) {
      if (item instanceof Container) {
        // Getting the column index where all the text is in the item.
        // If there's both a radio button AND a left icon, the text will be in column 3 (index 2).
        // If there's only a radio button OR a left icon, the text will be in column 2 (index 1).
        // Otherwise, the text will be in the first column.
        const columnSet: ColumnSet = item.items[0] as ColumnSet;
        const textColumnIndex: number = !(columnSet.columns[0].items[0] instanceof Image)
          ? 0
          : !(columnSet.columns[1].items[0] instanceof Image)
          ? 1
          : 2;

        const columnToAdd: Column = new Column([
          new Image(iconUrl, iconAltText).setHeight("20px").setWidth("20px"),
        ]).shrink();
        // Index 0 because we add the icon next to the title.
        (columnSet.columns[textColumnIndex].items[0] as ColumnSet).columns.unshift(columnToAdd);
      }
    }

    return this;
  }

  /**
   * Adds an icon to the left of the body in multiline list.
   * @param iconUrl Something
   * @param iconAltText Something accessible
   * @returns Itself.
   */
  public withBodyIcon(iconUrl: string, iconAltText: string): List {
    if (this.listType === NewListType.BasicList) {
      return this;
    }

    for (const item of this.items) {
      if (item instanceof Container) {
        const columnSet: ColumnSet = item.items[0] as ColumnSet;
        // Getting the column index where all the text is in the item.
        // If there's both a radio button AND a left icon, the text will be in column 3 (index 2).
        // If there's only a radio button OR a left icon, the text will be in column 2 (index 1).
        // Otherwise, the text will be in the first column.
        const textColumnIndex: number = !(columnSet.columns[0].items[0] instanceof Image)
          ? 0
          : !(columnSet.columns[1].items[0] instanceof Image)
          ? 1
          : 2;

        const columnToAdd: Column = new Column([
          new Image(iconUrl, iconAltText).setHeight("20px").setWidth("20px"),
        ]).shrink();
        // Index 1 because we add the icon next to the body.
        (columnSet.columns[textColumnIndex].items[1] as ColumnSet).columns.unshift(columnToAdd);
      }
    }

    return this;
  }

  /**
   * Adds an icon to the left of the caption in multiline list.
   * @param iconUrl Something
   * @param iconAltText Something accessible
   * @returns Itself.
   */
  public withCaptionIcon(iconUrl: string, iconAltText: string): List {
    if (this.listType === NewListType.BasicList) {
      return this;
    }

    for (const item of this.items) {
      if (item instanceof Container) {
        const columnSet: ColumnSet = item.items[0] as ColumnSet;
        // Getting the column index where all the text is in the item.
        // If there's both a radio button AND a left icon, the text will be in column 3 (index 2).
        // If there's only a radio button OR a left icon, the text will be in column 2 (index 1).
        // Otherwise, the text will be in the first column.
        const textColumnIndex: number = !(columnSet.columns[0].items[0] instanceof Image)
          ? 0
          : !(columnSet.columns[1].items[0] instanceof Image)
          ? 1
          : 2;

        const columnToAdd: Column = new Column([
          new Image(iconUrl, iconAltText).setHeight("16px").setWidth("16px"),
        ]).shrink();
        // Index 2 because we add the icon next to the caption.
        (columnSet.columns[textColumnIndex].items[2] as ColumnSet).columns.unshift(columnToAdd);
      }
    }

    return this;
  }

  /**
   * Adds a chevron to the right side of the List item.
   * @param actionID action ID for the item.
   * @param value an array of values to be displayed beside the chevron.
   * @returns Itself.
   */
  public withChevron(actionID: string, value?: string[]): List {
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      if (item instanceof Container) {
        const currentColumnSet: ColumnSet = item.items[0] as ColumnSet;
        const iconProps: IconProps = {
          icon: IconName.ChevronRight,
          height: "20px",
          width: "20px",
          altText: "Chevron right",
          hostTheme: this.hostTheme,
        };
        currentColumnSet.columns.push(
          new Column([
            new ColumnSet([
              value ? new Column([new TextBlock(value[index])]) : null,
              new Column([getIcon(iconProps)]).shrink(),
            ]),
          ]).shrink()
        );
        currentColumnSet.setAction(
          new ActionSubmit(`${actionID}${index}-${this.componentID}`, `Item ${index + 1} of ${this.listData.length}`, {
            selectedItem: this.listData[index + this.startIndex],
          })
        );
      }
    }

    return this;
  }

  /**
   * Adds the ability to click/select items.
   * @param actionID Action ID for the item.
   * @returns Itself.
   */
  public withSelectableItems(actionID: string): List {
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      if (item instanceof Container) {
        item.setAction(
          new ActionSubmit(`${actionID}${index}-${this.componentID}`, `Item ${index + 1} of ${this.listData.length}`, {
            selectedItem: this.listData[index + this.startIndex],
            selectedItemIndex: index + this.startIndex,
          })
        );
      }
    }

    return this;
  }

  /**
   * Adds a toggle to the right side of the List item. Index is appended to the actionID for handling.
   * @param actionID action ID for toggle.
   * @param toggleKey the key to determine toggle values of the data.
   * @returns itself to enable method chaining.
   */
  public withToggle(actionID: string, toggleKey: string): List {
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      if (item instanceof Container) {
        const currentColumnSet = item.items[0] as ColumnSet;
        currentColumnSet.columns.push(
          new Column([
            new InputToggle(
              `${toggleKey}${index}-${this.componentID}`,
              "",
              this.listData[index + this.startIndex][toggleKey] ? InputToggleValue.TRUE : InputToggleValue.FALSE
            ),
          ])
            .shrink()
            .setAction(
              new ActionSubmit(
                `${actionID}${index}-${this.componentID}`,
                `${this.listData[index + this.startIndex][this.listDataKeys.titleKey]} toggle of item ${index + 1} of ${
                  this.listData.length
                }`,
                { currentToggledItem: this.listData[index + this.startIndex] }
              )
            )
        );
      }
    }

    return this;
  }

  /**
   * Adds the ability to have radio selection buttons on the list. Must be called after reigstering the component in the BaseView.
   * This method cannot be chained.
   * @returns Itself.
   */
  public withRadioButton(): void {
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      if (item instanceof Container) {
        const currentColumn = item.items[0] as ColumnSet;
        currentColumn.columns.unshift(
          new Column([
            getIcon({
              icon:
                index + this.startIndex === this.selectedRadioItemIndex
                  ? IconName.MarkerCurrent
                  : IconName.MarkerNotStarted,
              altText: `Radio toggle for item ${index + 1} of ${this.listData.length}`,
              hostTheme: this.hostTheme,
            }),
          ])
            .shrink()
            .setAction(
              new ActionSubmit(
                `${ListActionID.RadioAction}${index}-${this.componentID}`,
                `${this.listData[index + this.startIndex][this.listDataKeys.titleKey]} radio of item ${index + 1}`,
                { selectedItemIndex: index + this.startIndex, componentID: this.componentID }
              )
            )
        );
      }
    }
  }

  /**
   * Adds an interactive icon on the right side of each item on the list. Icon should have an action.
   * @param iconURL URL of the icon.
   * @param actionID action ID for the icon.
   * @param iconAltText Alt text for the icon.
   * @returns Itself.
   */
  public withInteractiveIcon(iconURL: string, actionID: string, iconAltText: string): List {
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      if (item instanceof Container) {
        const currentColumnSet = item.items[0] as ColumnSet;
        currentColumnSet.columns.push(
          new Column([new Image(iconURL, iconAltText).setHeight("24px").setWidth("24px")]).shrink().setAction(
            new ActionSubmit(
              `${actionID}${index}-${this.componentID}`,
              `${this.listData[index + this.startIndex][this.listDataKeys.titleKey]} icon`,
              {
                selectedItem: this.listData[index + this.startIndex],
                selectedItemIndex: index,
              }
            )
          )
        );
      }
    }

    return this;
  }

  /**
   * Adds an icon on the left side of the title and/or body and/or caption.
   * @param iconURL URL of the icon.
   * @returns Itself.
   */
  public withLeftAccessoryIcon(iconURL: string): List {
    // NOTE: Might need to revisit data for ActionSubmit
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      if (item instanceof Container) {
        const currentColumnSet = item.items[0] as ColumnSet;
        currentColumnSet.columns.unshift(
          new Column([
            new Image(iconURL, `LeftAccessoryIcon of item ${index + 1}`)
              .setWidth("24px")
              .setHeight("24px")
              .setHorizontalAlignment(Alignment.Center),
          ]).setWidth("40px")
        );
      }
    }
    return this;
  }

  /**
   * Adds a profile picture to the left side of the title and/or body and/or caption.
   * @param pictureKey Key for the profile picture.
   * @returns Itself.
   */
  public withProfilePicture(pictureKey: string): List {
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      if (item instanceof Container) {
        const currentColumnSet = item.items[0] as ColumnSet;
        currentColumnSet.columns.unshift(
          new Column([
            new Image(this.listData[index + this.startIndex][pictureKey], `Profile picture of item ${index + 1}`)
              .setWidth(this.listType === NewListType.BasicList ? "24px" : "40px")
              .setHeight(this.listType === NewListType.BasicList ? "24px" : "40px")
              .setStyle(ImageStyle.Person)
              .setHorizontalAlignment(Alignment.Center),
          ]).setWidth(this.listType === NewListType.BasicList ? "40px" : "56px")
        );
      }
    }
    return this;
  }

  /**
   * Adds an action to the bottom of each item on the list.
   * @param actionID action ID for the action button.
   * @param title title for the action button.
   * @returns Itself.
   */
  public withPeopleListAction(actionID: string, title: string): List {
    if (this.listType === NewListType.MultilineList) {
      for (let index = 0; index < this.items.length; index++) {
        const item = this.items[index];
        if (item instanceof Container) {
          item.items.push(
            new ActionSet([
              new ActionSubmit(`${actionID}${index}-${this.componentID}`, title, {
                selectedItem: this.listData[index + this.startIndex],
              }),
            ])
          );
        }
      }
    }
    return this;
  }

  public withSelectedItem(selectedItem: unknown): List {
    if (!selectedItem) {
      return this;
    }

    for (let index = 0; index < this.listData.length; index++) {
      const item = this.listData[index];
      if (isEqual(item, selectedItem)) {
        const displayedItem = this.items[index - this.startIndex];
        if (displayedItem instanceof Container) {
          const columnSet: ColumnSet = displayedItem.items[0] as ColumnSet;

          for (const column of columnSet.columns) {
            if (this.listType === NewListType.MultilineList && column.items[0] instanceof ColumnSet) {
              ((column.items[0] as ColumnSet).columns[0].items[0] as TextBlock).setColor(FontColor.Accent);
            }
            if (column.items[0] instanceof TextBlock) {
              (column.items[0] as TextBlock).setColor(FontColor.Accent);
            }
          }
        }
      }
    }

    return this;
  }

  public getStartIndex(): number {
    return this.startIndex;
  }

  public setStartIndex(value: number) {
    this.startIndex = value;
  }

  public resetItems(): void {
    this.generateItems();
  }

  public nextPage(): void {
    this.startIndex += PAGINATION_SKIP;
  }

  public previousPage(): void {
    this.startIndex -= PAGINATION_SKIP;
  }
}
