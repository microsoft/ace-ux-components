import { ListItem } from "ace-ux-components";

/**
 * Views
 */
export enum SampleComponentIds {
  SAMPLE_COMPONENTS_QUICK_VIEW = "SampleComponentsQuickView",
  SAMPLE_COMPONENTS_CARD_VIEW = "SampleComponentsCardView",
  SAMPLE_ALERT_BOX_VIEW = "SampleAlertBoxView",
  SAMPLE_ALERT_BOX_SUCCESS_VIEW = "SampleAlertBoxSuccessView",
  SAMPLE_ALERT_BOX_ERROR_VIEW = "SampleAlertBoxErrorView",
  SAMPLE_ALERT_BOX_WARNING_VIEW = "SampleAlertBoxWarningView",
  SAMPLE_ALERT_BOX_INFO_VIEW = "SampleAlertBoxInfoView",
  SAMPLE_CHOICE_SET_VIEW = "SampleChoiceSetView",
  SAMPLE_EMPTY_VIEW = "SampleEmptyView",
  SAMPLE_ERROR_VIEW = "SampleErrorView",
  SAMPLE_HEADER_VIEW = "SampleHeaderView",
  SAMPLE_INPUT_NUMBER_VIEW = "SampleInputNumberView",
  SAMPLE_INPUT_DATE_VIEW = "SampleInputDateView",
  SAMPLE_INPUT_TIME_VIEW = "SampleInputTimeView",
  SAMPLE_INPUT_TOGGLE_VIEW = "SampleInputToggleView",
  SAMPLE_ITEMS_LIST_VIEW = "SampleItemsListView",
  SAMPLE_LOADING_INDICATOR_VIEW = "SampleLoadingIndicatorView",
  SAMPLE_PERSONA_VIEW = "SamplePersonaView",
  SAMPLE_PICKER_VIEW = "SamplePickerView",
  SAMPLE_REFRESH_VIEW = "SampleRefreshView",
  SAMPLE_SEARCH_VIEW = "SampleSearchView",
  SAMPLE_SUCCESS_VIEW = "SampleSuccessView",
  SAMPLE_TOGGLE_ROW_VIEW = "SampleToggleRowView",
  SAMPLE_WEEK_CALENDAR_VIEW = "SampleWeekCalendarView",
}

export enum ComponentDisplayNames {
  alertBox = "Alert Box",
  alertBoxErrorView = "Alert Box Error View",
  alertBoxSuccessView = "Alert Box Success View",
  alertBoxWarningView = "Alert Box Warning View",
  alertBoxInfoView = "Alert Box Info View",
  choiceSet = "Choice Set",
  emptyView = "Empty View",
  errorView = "Error View",
  header = "Header",
  inputNumber = "Input Number",
  inputDate = "Input Date",
  inputTime = "Input Time",
  inputToggle = "Input Toggle",
  itemsList = "Items List",
  mainQuickView = "Select a component",
  loadingIndicator = "Loading Indicator",
  persona = "Persona",
  picker = "Picker",
  refresh = "Refresh",
  search = "Search",
  successView = "Success View",
  toggleRow = "Toggle Row",
  weekCalendar = "Week Calendar",
}

export enum SampleComponentActionIds {
  ALERT_BOX_CONFIRM = "ALERT_BOX_CONFIRM",
  ALERT_BOX_DENY = "ALERT_BOX_DENY",
}

export const sampleComponentsList: ListItem[] = [
  { name: ComponentDisplayNames.alertBox, id: SampleComponentIds.SAMPLE_ALERT_BOX_VIEW },
  { name: ComponentDisplayNames.alertBoxSuccessView, id: SampleComponentIds.SAMPLE_ALERT_BOX_SUCCESS_VIEW },
  { name: ComponentDisplayNames.alertBoxErrorView, id: SampleComponentIds.SAMPLE_ALERT_BOX_ERROR_VIEW },
  { name: ComponentDisplayNames.alertBoxWarningView, id: SampleComponentIds.SAMPLE_ALERT_BOX_WARNING_VIEW },
  { name: ComponentDisplayNames.alertBoxInfoView, id: SampleComponentIds.SAMPLE_ALERT_BOX_INFO_VIEW },
  { name: ComponentDisplayNames.choiceSet, id: SampleComponentIds.SAMPLE_CHOICE_SET_VIEW },
  { name: ComponentDisplayNames.emptyView, id: SampleComponentIds.SAMPLE_EMPTY_VIEW },
  { name: ComponentDisplayNames.errorView, id: SampleComponentIds.SAMPLE_ERROR_VIEW },
  { name: ComponentDisplayNames.header, id: SampleComponentIds.SAMPLE_HEADER_VIEW },
  { name: ComponentDisplayNames.inputNumber, id: SampleComponentIds.SAMPLE_INPUT_NUMBER_VIEW },
  { name: ComponentDisplayNames.inputDate, id: SampleComponentIds.SAMPLE_INPUT_DATE_VIEW },
  { name: ComponentDisplayNames.inputTime, id: SampleComponentIds.SAMPLE_INPUT_TIME_VIEW },
  { name: ComponentDisplayNames.inputToggle, id: SampleComponentIds.SAMPLE_INPUT_TOGGLE_VIEW },
  { name: ComponentDisplayNames.itemsList, id: SampleComponentIds.SAMPLE_ITEMS_LIST_VIEW },
  { name: ComponentDisplayNames.loadingIndicator, id: SampleComponentIds.SAMPLE_LOADING_INDICATOR_VIEW },
  { name: ComponentDisplayNames.persona, id: SampleComponentIds.SAMPLE_PERSONA_VIEW },
  { name: ComponentDisplayNames.picker, id: SampleComponentIds.SAMPLE_PICKER_VIEW },
  { name: ComponentDisplayNames.search, id: SampleComponentIds.SAMPLE_SEARCH_VIEW },
  { name: ComponentDisplayNames.successView, id: SampleComponentIds.SAMPLE_SUCCESS_VIEW },
  { name: ComponentDisplayNames.toggleRow, id: SampleComponentIds.SAMPLE_TOGGLE_ROW_VIEW },
];

export const samplePickerItems: ListItem[] = [
  { name: "Alabama" },
  { name: "Alaska" },
  { name: "American Samoa" },
  { name: "Arizona" },
  { name: "Arkansas" },
  { name: "California" },
  { name: "Colorado" },
  { name: "Connecticut" },
  { name: "Delaware" },
  { name: "District of Columbia" },
  { name: "Federated States of Micronesia" },
  { name: "Florida" },
  { name: "Georgia" },
  { name: "Guam" },
  { name: "Hawaii" },
  { name: "Idaho" },
  { name: "Illinois" },
  { name: "Indiana" },
  { name: "Iowa" },
  { name: "Kansas" },
  { name: "Kentucky" },
  { name: "Louisiana" },
  { name: "Maine" },
  { name: "Marshall Islands" },
  { name: "Maryland" },
  { name: "Massachusetts" },
  { name: "Michigan" },
  { name: "Minnesota" },
  { name: "Mississippi" },
  { name: "Missouri" },
  { name: "Montana" },
  { name: "Narnia" },
  { name: "Nebraska" },
  { name: "Nevada" },
  { name: "New Hampshire" },
  { name: "New Jersey" },
  { name: "New Mexico" },
  { name: "New York" },
  { name: "North Carolina" },
  { name: "North Dakota" },
  { name: "Northern Mariana Islands" },
  { name: "Ohio" },
  { name: "Oklahoma" },
  { name: "Oregon" },
  { name: "Palau" },
  { name: "Pennsylvania" },
  { name: "Puerto Rico" },
  { name: "Rhode Island" },
  { name: "South Carolina" },
  { name: "South Dakota" },
  { name: "Tennessee" },
  { name: "Texas" },
  { name: "Utah" },
  { name: "Vermont" },
  { name: "Virgin Island" },
  { name: "Virginia" },
  { name: "Washington" },
  { name: "West Virginia" },
  { name: "Wisconsin" },
  { name: "Wyoming" },
];
