/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { QuickViewNavigator, BaseAdaptiveCardQuickView } from "@microsoft/sp-adaptive-card-extension-base";
import { isEqual } from "@microsoft/sp-lodash-subset";
import {
  ActionSubmit,
  Alignment,
  BaseElement,
  Column,
  ColumnSet,
  Container,
  FontColor,
  FontSize,
  FontWeight,
  Spacing,
  TextBlock,
} from "../elements";
import { Persona, PersonaParams } from "../persona";
import {
  ComponentProps,
  HostTheme,
  IconName,
  IconProps,
  ItemsListPersonaProps,
  ItemsListProps,
  ListItem,
  ListType,
} from "../types";
import { getIcon } from "../getIcon";

export const PAGINATION_SKIP: number = 25;

export class ItemsList extends Container {
  private actionId?: string;
  private chevron: Column | null;
  private listData: ListItem[];
  private listType: ListType;
  private needsPagination: boolean;
  private nextPageId: string;
  private hostTheme: HostTheme;
  private personaProps?: ItemsListPersonaProps;
  private previousPageId: string;
  private selectedItem?: ListItem;

  constructor(props: ItemsListProps) {
    super([]);

    this.actionId = props.actionId;
    this.listData = props.data;
    this.listType = props.listType;
    this.needsPagination = props.data.length > PAGINATION_SKIP;
    this.nextPageId = props.nextPageId;
    this.personaProps = props.personaProps;
    this.previousPageId = props.previousPageId;
    this.selectedItem = props.selectedItem;
    this.hostTheme = props.hostTheme;
    this.chevron = props.withChevron
      ? new Column([
          getIcon({
            icon: IconName.ChevronRightDisabled,
            altText: "Chevron right",
            height: "20px",
            width: "20px",
            hostTheme: this.hostTheme,
          }),
        ]).shrink()
      : null;
    this.items = this.generateItems(props.startingIndex ? props.startingIndex : 0);
  }

  private generateItems(start: number): BaseElement[] {
    const items: BaseElement[] = [];
    const end: number = start + PAGINATION_SKIP < this.listData.length ? start + PAGINATION_SKIP : this.listData.length;

    for (let index = start; index < end; index++) {
      const dataItem = this.listData[index];

      const action = this.actionId
        ? new ActionSubmit(
            `${this.actionId}${index}`,
            `Item ${index + 1} of ${this.listData.length}, ${dataItem.name}`,
            {
              selectedItem: dataItem,
            }
          )
        : undefined;

      const isSelectedItem = isEqual(this.selectedItem, dataItem);
      const item: Container | ColumnSet = this.getItem(dataItem, isSelectedItem)
        .setMinHeight("30px")
        .useSeparator() as ColumnSet;

      if (action) {
        item.setAction(action);
      }

      items.push(item);
    }

    if (this.needsPagination) {
      const isFirstPage = start === 0;
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
        new Column([new TextBlock(`${start + 1}-${end}`)]).shrink(),
        new Column([getIcon(iconPropsRight)]).shrink(),
        new Column([]).stretch(),
      ]);

      if (!isFirstPage) {
        paginationSection.columns[1].setAction(
          new ActionSubmit(
            this.previousPageId,
            "Go to previous page",
            { currentStartIndex: start },
            "Go to previous page"
          )
        );
      }

      if (!isLastPage) {
        paginationSection.columns[3].setAction(
          new ActionSubmit(this.nextPageId, "Go to next page", { currentStartIndex: start }, "Go to next page")
        );
      }

      items.push(paginationSection);
    }

    return items;
  }

  private getItem(dataItem: ListItem, isSelectedItem: boolean): Container | ColumnSet {
    let firstColumn: Column;

    switch (this.listType) {
      case ListType.TitleWithSubtitleList:
        firstColumn = new Column([
          new TextBlock(dataItem.name)
            .enableWrap()
            .setSize(FontSize.Default)
            .setWeight(FontWeight.Bolder)
            .setColor(isSelectedItem ? FontColor.Accent : FontColor.Default),
          new TextBlock(dataItem.subtitle ? dataItem.subtitle : "").enableWrap().setSpacing(Spacing.None),
        ]).stretch();
        break;
      case ListType.PeopleList:
        if (this.personaProps) {
          return this.generatePersona(dataItem, this.personaProps);
        }
      default:
        firstColumn = new Column([
          new TextBlock(dataItem.name)
            .enableWrap()
            .setSize(FontSize.Medium)
            .setColor(isSelectedItem ? FontColor.Accent : FontColor.Default),
        ]).stretch();
    }

    return new ColumnSet(this.chevron ? [firstColumn, this.chevron] : [firstColumn]);
  }

  private generatePersona(dataItem: ListItem, personaProps: ItemsListPersonaProps): Persona {
    const personaParams: PersonaParams = {
      profilePictureUrl: dataItem.profilePicture,
      name: dataItem.name,
    };
    const persona = new Persona(personaParams);

    if (this.chevron) {
      persona.withChevron(personaProps.hostTheme);
    }

    if (dataItem.subtitle) {
      persona.withJobTitle(dataItem.subtitle);
    }

    if (personaProps.actions) {
      const actions = personaProps.actions;
      switch (actions.alignment) {
        case Alignment.Left:
          persona.withLeftAlignedAction(actions.actionElements[0]);
          break;
        case Alignment.Right:
          persona.withRightAlignedAction(actions.actionElements[0]);
          break;
        default:
          persona.withActions(actions.actionElements);
          break;
      }
    }

    if (personaProps.iconAction) {
      const action = personaProps.iconAction;
      persona.withItemActionIcon(action.icon, `Select ${dataItem?.name}`, action.actionElement);
    }

    if (personaProps.statusText) {
      const status = personaProps.statusText;
      persona.withStatusText(status.icon, status.text);
    }

    if (personaProps.workStatus) {
      persona.withWorkStatus(personaProps.workStatus.data, personaProps.workStatus.statusType);
    }

    return persona;
  }

  action(quickViewNavigator: QuickViewNavigator<BaseAdaptiveCardQuickView<{}, {}, {}>>): void {
    // This method comes from IBaseComponent. It's not being used for this component so we'll leave it unimplemented.
  }

  updateProps(props: ComponentProps): void {
    // This method comes from IBaseComponent. It's not being used for this component so we'll leave it unimplemented.
  }
}
