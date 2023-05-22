import { ListItem } from "ace-ux-components";

export enum SampleComponentStateKeys {
  SAMPLE_PICKER_LIST_DATA = "SAMPLE_PICKER_LIST_DATA",
  SAMPLE_PICKER_SELECTED_ITEM = "SAMPLE_PICKER_SELECTED_ITEM",
  SAMPLE_SEARCH_LIST_DATA = "SAMPLE_SEARCH_LIST_DATA",
  SAMPLE_SEARCH_SELECT_ITEM = "SAMPLE_SEARCH_SELECTED_ITEM",
}

export type SampleComponentData = {
  title: string;
};
export type SamplePickerData = {
  [SampleComponentStateKeys.SAMPLE_PICKER_LIST_DATA]?: ListItem[];
  [SampleComponentStateKeys.SAMPLE_PICKER_SELECTED_ITEM]?: ListItem;
};

export type SampleSearchData = {
  [SampleComponentStateKeys.SAMPLE_SEARCH_LIST_DATA]?: ListItem[];
  [SampleComponentStateKeys.SAMPLE_SEARCH_SELECT_ITEM]?: ListItem;
};

export interface ISampleComponentsAdaptiveCardExtensionState extends SamplePickerData, SampleSearchData {
  searchText?: string;
  buttonClicked?: boolean;
  focusID?: string;
}
