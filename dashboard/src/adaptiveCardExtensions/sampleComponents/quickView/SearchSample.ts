import { createTemplate, ListType, SearchComponent } from "ace-ux-components";
import { ISPFxAdaptiveCard, ISubmitActionArguments } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

const SAMPLE_SEARCH_INPUT_ID = "SAMPLE_SEARCH_BOX_INPUT";
export class SearchSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.search;
  }

  public onAction(actionData: ISubmitActionArguments): void {
    super.onAction(actionData);
    if (actionData.data.id === "SAMPLE_SEARCH_SUBMIT_BUTTON_ID") {
      const searchText: string = actionData.data[SAMPLE_SEARCH_INPUT_ID]?.trim();
      this.setState({ searchText });
    } else if (actionData.data.id === "SAMPLE_SEARCH_BOX_CANCEL_BUTTON_ID") {
      this.setState({ searchText: "" });
    }
  }

  public get template(): ISPFxAdaptiveCard {
    const searchEnabled = !!this.state.searchText;
    return createTemplate([
      new SearchComponent({
        searchBarInput: {
          cancelButtonVisible: searchEnabled,
          isSearching: false,
          placeholder: "Placeholder",
          searchBoxInputId: SAMPLE_SEARCH_INPUT_ID,
          searchBoxSubmitButtonId: "SAMPLE_SEARCH_SUBMIT_BUTTON_ID",
          showSearchResultHeading: true,
          searchBoxCancelButtonId: "SAMPLE_SEARCH_BOX_CANCEL_BUTTON_ID",
          searchTextValue: this.state.searchText,
          hostTheme: this.hostTheme,
        },
        searchResult: {
          data: this.state.SAMPLE_SEARCH_LIST_DATA,
          listType: ListType.PeopleList,
          nextPageId: "nextPage",
          previousPageId: "previousPage",
          startingIndex: 0,
          actionId: "SAMPLE_SEARCH_ACTION_ID",
          selectedItem: this.state.SAMPLE_SEARCH_SELECTED_ITEM,
          withChevron: false,
          hostTheme: this.hostTheme,
        },
      }),
    ]);
  }
}
