/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {
  BaseAdaptiveCardView,
  IFocusParameters,
  ISPFxAdaptiveCard,
  ISubmitActionArguments,
} from "@microsoft/sp-adaptive-card-extension-base";
import { ComplexComponent } from "../baseComponent/ComplexComponent";
import { createTemplate } from "../createTemplate";
import { Container, ContainerStyle, FontWeight, TextBlock } from "../elements";
import { Header, HeaderType } from "../header";
import { List, SectionList } from "../list";
import { ListActionID } from "../list/types";
import { SearchBar, SearchBarProps } from "../search";
import { AriaLive, ListKeys, MOBILE, NewListType, SectionListData } from "../types";
import { ListOptions, PickerHelpers, SectionOptions } from "./PickerHelpers";

export type ViewProps = {
  headerLabel: string;
  itemSelectionCallback: (item: unknown) => void;
  listComponentID: string;
  listData: unknown[];
  listKeys: ListKeys;
  listOptions: ListOptions;
  placeholder: string;
  sectionListData?: SectionListData[];
  sectionListOptions?: SectionOptions;
  selectedIndex: number;
  withFilter: boolean;
};

export class PickerListView<TState> extends BaseAdaptiveCardView<{}, TState, {}> {
  private readonly cancelFilterActionId: string;
  private readonly filterActionId: string;
  private readonly helpers: PickerHelpers;
  private readonly listsDictionary: Record<string, ComplexComponent>;
  private readonly titleHeading?: string = "titleHeading";
  private cancelButtonVisible: boolean;
  private focusID?: string;
  private listData: unknown[];
  private listFilter: string;
  private props: ViewProps;
  private sectionListData: unknown[][];
  private selectedIndex: number;

  constructor(props: ViewProps) {
    super();

    this.cancelFilterActionId = "cancelFilter";
    this.filterActionId = "onFilter";
    this.helpers = PickerHelpers.getInstance();
    this.listsDictionary = {};
    this.cancelButtonVisible = false;
    this.listData = [];
    this.listFilter = "";
    this.props = props;
    this.sectionListData = [];
    this.selectedIndex = props.selectedIndex;
    this.focusID = this.titleHeading;
  }

  public get template(): ISPFxAdaptiveCard {
    const { headerLabel, placeholder, sectionListData, withFilter } = this.props;

    const filterProps: SearchBarProps = {
      cancelButtonVisible: this.cancelButtonVisible,
      searchBoxCancelButtonId: this.cancelFilterActionId,
      isSearching: false,
      placeholder,
      searchBoxInputId: "listFilter",
      searchBoxSubmitButtonId: this.filterActionId,
      searchTextValue: this.listFilter,
      showSearchResultHeading: false,
    };

    let list: List | SectionList;
    if (sectionListData) {
      this.filterSectionData();
      list = this.getSectionList();
    } else {
      this.filterData();
      list = this.getList();
    }

    return createTemplate([
      new Header(HeaderType.Basic, headerLabel, this.context.deviceContext)
        .setID(this.titleHeading)
        .setIsVisible(this.context.deviceContext !== MOBILE),
      withFilter ? new SearchBar(filterProps) : null,
      new Container([
        new TextBlock(`Displaying ${this.listData?.length} results`)
          .setWeight(FontWeight.Bolder)
          .enableWrap()
          .setID("searchResults_textblock"),
      ])
        .setStyle(ContainerStyle.Emphasis)
        .enableBleed(),
      list,
    ]);
  }

  private filterData(): void {
    const list = [...this.props.listData];

    if (!this.listFilter) {
      this.listData = list;
    }

    this.listData = this.filterList(list);
  }

  private filterSectionData(): void {
    this.sectionListData = [];
    for (const listData of this.props.sectionListData) {
      const list = [...listData.data];

      if (!this.listFilter) {
        this.sectionListData.push(list);
      } else {
        this.sectionListData.push(this.filterList(list));
      }
    }
  }

  private filterList(list: unknown[]): unknown[] {
    return list.filter((item) => {
      return item[this.props.listKeys.titleKey].toLowerCase().includes(this.listFilter.toLowerCase());
    });
  }

  private getList(): List {
    const { listComponentID, listKeys, listOptions } = this.props;

    const list: List = new List(listComponentID, NewListType.BasicList, this.listData, listKeys).withSelectedItem(
      this.selectedIndex !== -1 ? this.props.listData[this.selectedIndex] : undefined
    );

    if (this.listsDictionary[listComponentID]) {
      const registeredList: List = this.listsDictionary[listComponentID] as List;
      this.applyListUpdates(list, registeredList);
    }
    this.helpers.applyListOptions(list, listOptions);

    this.listsDictionary[list.getComponentID()] = list;

    return list;
  }

  private getSectionList(): SectionList {
    const { listComponentID, listOptions, sectionListData, sectionListOptions } = this.props;

    const filteredData: SectionListData[] = [];
    for (let index = 0; index < sectionListData.length; index++) {
      const data = sectionListData[index];
      filteredData.push({
        ...data,
        data: [...this.sectionListData[index]],
      });
    }

    const sectionList: SectionList = new SectionList(listComponentID, NewListType.BasicList, filteredData);

    for (let index = 0; index < sectionList.items.length; index++) {
      const item = sectionList.items[index];

      if (item instanceof List) {
        if (this.listsDictionary[listComponentID]) {
          const registeredItem: List = this.listsDictionary[listComponentID].items[index] as List;
          this.applyListUpdates(item, registeredItem);
        }
        this.listsDictionary[item.getComponentID()] = item;
      }
    }
    this.helpers.applySectionListOptions(sectionList, sectionListOptions, listOptions);

    this.listsDictionary[sectionList.getComponentID()] = sectionList;
    return sectionList;
  }

  private applyListUpdates(list: List, registeredList: List): void {
    // Passes the selected radio item index to the List after its rendered to update the value.
    if (list.getRadioValue() !== registeredList.getRadioValue()) {
      list.setRadioValue(registeredList.getRadioValue());
    }
    if (list.getStartIndex() !== registeredList.getStartIndex()) {
      list.setStartIndex(registeredList.getStartIndex());
      list.resetItems();
    }
  }

  public onAction(action: ISubmitActionArguments): void {
    const { data } = action;
    const id: string = data.id || "";
    if (id.includes(ListActionID.SelectItem)) {
      this.quickViewNavigator.pop();
      this.selectedIndex = data.selectedItemIndex;
      this.props.itemSelectionCallback(data.selectedItem);
      this.setState({});
    } else if (id === this.filterActionId) {
      this.listFilter = data.listFilter ?? "";
      this.cancelButtonVisible = !!data.listFilter;
      this.focusID = "searchResults_textblock";
      this.setState({});
    } else if (id === this.cancelFilterActionId) {
      this.listFilter = "";
      this.cancelButtonVisible = false;
      this.focusID = "searchResults_textblock";
      this.setState({});
    } else if (id.includes(ListActionID.NextPage)) {
      const list: List = this.listsDictionary[data.componentID] as List;
      list.nextPage();
      this.setState({});
    } else if (id.includes(ListActionID.PreviousPage)) {
      const list: List = this.listsDictionary[data.componentID] as List;
      list.previousPage();
      this.setState({});
    } else if (id.includes(ListActionID.RadioAction)) {
      const list: List = this.listsDictionary[data.componentID] as List;
      list.setRadioValue(data.selectedItemIndex);
      this.setState({});
    } else if (id.includes(ListActionID.InteractiveIconAction)) {
      this.props.listOptions.interactiveIcon.actionCallback(data.selectedItem);
    } else if (id.includes(ListActionID.PeopleListAction)) {
      this.props.listOptions.peopleListAction.actionCallback(data.selectedItem);
    } else if (id.includes(ListActionID.SectionAction)) {
      this.props.sectionListOptions.actions.actionCallback(data.sectionIndex);
    } else if (id.includes(ListActionID.SectionIconAction)) {
      this.props.sectionListOptions.iconActions.actionCallback(data.sectionIndex);
    } else if (id.includes(ListActionID.ToggleAction)) {
      this.props.listOptions.toggle.actionCallback(data.currentToggledItem);
    }
  }

  public get focusParameters(): IFocusParameters {
    return {
      focusTarget: this.focusID,
      ariaLive: AriaLive.Polite,
    };
  }
}
