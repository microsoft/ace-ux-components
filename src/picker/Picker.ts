/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseAdaptiveCardView, QuickViewNavigator } from "@microsoft/sp-adaptive-card-extension-base";
import { ChevronRight } from "../assets";
import { ComplexComponent } from "../baseComponent/ComplexComponent";
import { ActionSubmit, Column, ColumnSet, ElementType, FontSize, FontWeight, Image, TextBlock } from "../elements";
import { ListKeys, SectionListData } from "../types";
import { ListOptions, SectionOptions } from "./PickerHelpers";
import { PickerListView, ViewProps } from "./PickerListView";

export type PickerProps = {
  accessibilityLabel: string;
  isHeader: boolean;
  label: string;
  listData: unknown[];
  listKeys: ListKeys;
  viewHeaderLabel: string;
  foucsID?: string;
};

export const OPEN_PICKER_VIEW: string = "openPickerView";

export class Picker<TState> extends ComplexComponent {
  private accessibilityLabel: string;
  private filterPlaceholder: string;
  private isHeader: boolean;
  private label: string;
  private listData: unknown[];
  private listKeys: ListKeys;
  private listOptions: ListOptions | undefined;
  private sectionListData: SectionListData[] | undefined;
  private sectionListOptions: SectionOptions | undefined;
  private selectedIndex: number;
  private viewHeaderLabel: string;
  private foucsID: string;

  constructor(componentID: string, props: PickerProps) {
    super(componentID);

    this.accessibilityLabel = props.accessibilityLabel;
    this.filterPlaceholder = "";
    this.isHeader = props.isHeader;
    this.label = props.label;
    this.listData = props.listData;
    this.listKeys = props.listKeys;
    this.listOptions = undefined;
    this.sectionListData = undefined;
    this.sectionListOptions = undefined;
    this.selectedIndex = -1;
    this.viewHeaderLabel = props.viewHeaderLabel;
    this.foucsID = props.foucsID;

    this.setMinHeight("30px");
    this.useSeparator(!props.isHeader);

    this.generateItems();
  }

  private generateItems(): void {
    const textBlock: TextBlock = new TextBlock(this.label).enableWrap();

    if (this.isHeader) {
      textBlock.setSize(FontSize.Large).setWeight(FontWeight.Bolder);
    }

    this.items = [
      new ColumnSet([
        new Column([textBlock.setID(this.foucsID)]).stretch(),
        new Column([new Image(ChevronRight, "Chevron right").setHeight("16px").setWidth("16px")]).shrink(),
      ]).setAction(
        new ActionSubmit(
          `${OPEN_PICKER_VIEW}-${this.componentID}`,
          this.label,
          { componentID: this.componentID },
          this.accessibilityLabel
        )
      ),
    ];
  }

  public openView(
    quickViewNavigator: QuickViewNavigator<BaseAdaptiveCardView<{}, TState, {}>>,
    itemSelectionCallback: (item: unknown) => void
  ): void {
    const viewID: string = `${this.componentID}-view`;
    const viewProps: ViewProps = {
      headerLabel: this.viewHeaderLabel,
      itemSelectionCallback,
      listComponentID: "PickerList",
      listData: this.listData,
      listKeys: this.listKeys,
      listOptions: this.listOptions ?? { withRadio: false },
      placeholder: this.filterPlaceholder,
      sectionListData: this.sectionListData,
      sectionListOptions: this.sectionListOptions,
      selectedIndex: this.selectedIndex,
      withFilter: this.filterPlaceholder !== "",
    };

    quickViewNavigator.register(viewID, () => new PickerListView<TState>(viewProps));
    quickViewNavigator.push(viewID);
  }

  public withFiltering(placeholder: string): Picker<TState> {
    this.filterPlaceholder = placeholder;

    return this;
  }

  public withLeftIcon(iconUrl: string, iconAltText: string): Picker<TState> {
    const columnSet: ColumnSet = this.items[0] as ColumnSet;
    if (columnSet.columns[0].items[0].type === ElementType.Image) {
      return this;
    }

    columnSet.columns.unshift(
      new Column([new Image(iconUrl, iconAltText).setHeight("24px").setWidth("24px")]).shrink()
    );

    return this;
  }

  public withListOptions(options: ListOptions): Picker<TState> {
    this.listOptions = options;

    return this;
  }

  public withPreselectedItem(itemIndex: number): Picker<TState> {
    this.selectedIndex = itemIndex;

    return this;
  }

  public withRightValue(valueText: string): Picker<TState> {
    const columnSet: ColumnSet = this.items[0] as ColumnSet;
    const index: number = columnSet.columns[0].items[0].type === ElementType.Image ? 2 : 1;
    if (columnSet.columns[index].items[0].type !== ElementType.Image) {
      return this;
    }

    columnSet.columns.splice(index, 0, new Column([new TextBlock(valueText)]).shrink());

    return this;
  }

  public withSectionList(sectionListData: SectionListData[], sectionListOptions: SectionOptions): Picker<TState> {
    this.sectionListData = sectionListData;
    this.sectionListOptions = sectionListOptions;

    return this;
  }
}
