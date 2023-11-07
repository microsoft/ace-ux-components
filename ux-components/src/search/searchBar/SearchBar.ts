/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { getIcon } from "../../getIcon";
import {
  ActionSet,
  ActionStyle,
  ActionSubmit,
  Alignment,
  BaseElement,
  Column,
  ColumnSet,
  Container,
  FontSize,
  FontWeight,
  Image,
  InputText,
  Spacing,
  TextBlock,
  VerticalAlignment,
} from "../../elements";

import { SearchBarProps } from "./SearchBarProps.types";
import { HostTheme, IconName } from "../../types";
export class SearchBar extends Container {
  private searchTextValue: string;
  private searchBoxInputId: string;
  private searchBoxSubmitButtonId: string;
  private searchBoxCancelButtonId?: string;
  private cancelButtonVisible: boolean;
  private showSearchResultHeading: boolean;
  private placeholder: string = "Search Text";
  private searchResultsText: string;
  private hostTheme: HostTheme;
  private componentID: string;

  constructor(searchData: SearchBarProps) {
    super([]);
    this.searchTextValue = searchData.searchTextValue;
    this.searchBoxInputId = searchData.searchBoxInputId;
    this.searchBoxSubmitButtonId = searchData.searchBoxSubmitButtonId;
    this.searchBoxCancelButtonId = searchData.searchBoxCancelButtonId;
    this.cancelButtonVisible = searchData.cancelButtonVisible;
    this.showSearchResultHeading = searchData.showSearchResultHeading;
    this.placeholder = searchData.placeholder;
    this.searchResultsText = searchData.isSearching ? "Searching..." : "";
    this.hostTheme = searchData.hostTheme;
    this.componentID = searchData.componentID;
    this.items = this.getSearchBarElements();
  }

  private getSearchBarElements(): BaseElement[] {
    return [
      new ColumnSet([
        new Column([new InputText(this.searchBoxInputId, this.searchTextValue).setPlaceholder(this.placeholder)])
          .setSpacing(Spacing.Small)
          .setVerticalAlignment(VerticalAlignment.Center)
          .stretch(),
        new Column([
          getIcon({
            icon: IconName.ClearSearchBar,
            altText: "clear search text",
            width: "35px",
            height: "35px",
            hostTheme: this.hostTheme,
          }).setAction(new ActionSubmit(this.searchBoxCancelButtonId, "")),
        ])
          .setVerticalAlignment(VerticalAlignment.Bottom)
          .setIsVisible(this.cancelButtonVisible)
          .setSpacing(Spacing.Small)
          .shrink() as Column,
        new Column([
          new ActionSet([
            new ActionSubmit(this.searchBoxSubmitButtonId, "Search", { componentID: this.componentID }).setStyle(
              ActionStyle.Positive
            ),
          ]),
        ])
          .setVerticalAlignment(VerticalAlignment.Center)
          .setSpacing(Spacing.Small)
          .shrink()
          .setWidth("83px"),
      ]).setHorizontalAlignment(Alignment.Center),
      new ColumnSet([
        new Column([
          new TextBlock(this.searchResultsText).setSize(FontSize.Small).setWeight(FontWeight.Bolder),
        ]).setIsVisible(this.showSearchResultHeading) as Column,
      ]).setHorizontalAlignment(Alignment.Left),
    ];
  }
}
