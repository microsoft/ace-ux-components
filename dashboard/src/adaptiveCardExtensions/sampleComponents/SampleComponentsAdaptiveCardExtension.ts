import { SampleCardView } from "./cardView/SampleCardView";
import { SampleComponentIds, samplePickerItems } from "./constants";
import {
  AlertBoxErrorSampleQuickView,
  AlertBoxInfoSampleQuickView,
  AlertBoxSampleQuickView,
  AlertBoxSuccessSampleQuickView,
  AlertBoxWarningSampleQuickView,
  ChoiceSetSampleQuickView,
  EmptySampleQuickView,
  ErrorSampleQuickView,
  HeaderSampleQuickView,
  InputDateSampleQuickView,
  InputNumberSampleQuickView,
  InputTimeSampleQuickView,
  InputToggleSampleQuickView,
  ItemsListSampleQuickView,
  LoadingIndicatorSampleQuickView,
  PersonaSampleQuickView,
  PickerSampleQuickView,
  SampleQuickView,
  SearchSampleQuickView,
  SuccessSampleQuickView,
  ToggleRowSampleQuickView,
} from "./quickView";
import { ISampleComponentsAdaptiveCardExtensionState } from "./sampleComponentTypes";
import { BaseAdaptiveCardExtension } from "@microsoft/sp-adaptive-card-extension-base";

export default class SampleComponentsAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  {},
  ISampleComponentsAdaptiveCardExtensionState
> {
  constructor() {
    super();
  }

  public onInit(): Promise<void> {
    super.onInit();
    this.state = {
      SAMPLE_PICKER_LIST_DATA: samplePickerItems,
      SAMPLE_PICKER_SELECTED_ITEM: samplePickerItems[0],
      SAMPLE_SEARCH_LIST_DATA: samplePickerItems,
    };
    //TODO: seems like I could just move most of this into the constrctor
    this.cardNavigator.register(SampleComponentIds.SAMPLE_COMPONENTS_CARD_VIEW, () => new SampleCardView());
    this.registerQuickViews();

    return Promise.resolve();
  }

  //TODO: could reduce by iterating over a map of constructors to ids
  private registerQuickViews() {
    this.quickViewNavigator.register(SampleComponentIds.SAMPLE_COMPONENTS_QUICK_VIEW, () => new SampleQuickView());
    this.quickViewNavigator.register(SampleComponentIds.SAMPLE_ALERT_BOX_VIEW, () => new AlertBoxSampleQuickView());
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_ALERT_BOX_SUCCESS_VIEW,
      () => new AlertBoxSuccessSampleQuickView()
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_ALERT_BOX_ERROR_VIEW,
      () => new AlertBoxErrorSampleQuickView()
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_ALERT_BOX_WARNING_VIEW,
      () => new AlertBoxWarningSampleQuickView()
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_ALERT_BOX_INFO_VIEW,
      () => new AlertBoxInfoSampleQuickView()
    );
    this.quickViewNavigator.register(SampleComponentIds.SAMPLE_CHOICE_SET_VIEW, () => new ChoiceSetSampleQuickView());
    this.quickViewNavigator.register(SampleComponentIds.SAMPLE_EMPTY_VIEW, () => new EmptySampleQuickView());
    this.quickViewNavigator.register(SampleComponentIds.SAMPLE_ERROR_VIEW, () => new ErrorSampleQuickView());
    this.quickViewNavigator.register(SampleComponentIds.SAMPLE_HEADER_VIEW, () => new HeaderSampleQuickView());
    this.quickViewNavigator.register(SampleComponentIds.SAMPLE_INPUT_DATE_VIEW, () => new InputDateSampleQuickView());
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_INPUT_NUMBER_VIEW,
      () => new InputNumberSampleQuickView()
    );
    this.quickViewNavigator.register(SampleComponentIds.SAMPLE_INPUT_TIME_VIEW, () => new InputTimeSampleQuickView());
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_INPUT_TOGGLE_VIEW,
      () => new InputToggleSampleQuickView()
    );
    this.quickViewNavigator.register(SampleComponentIds.SAMPLE_ITEMS_LIST_VIEW, () => new ItemsListSampleQuickView());
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_LOADING_INDICATOR_VIEW,
      () => new LoadingIndicatorSampleQuickView()
    );
    this.quickViewNavigator.register(SampleComponentIds.SAMPLE_PERSONA_VIEW, () => new PersonaSampleQuickView());
    this.quickViewNavigator.register(SampleComponentIds.SAMPLE_PICKER_VIEW, () => new PickerSampleQuickView());
    this.quickViewNavigator.register(SampleComponentIds.SAMPLE_SEARCH_VIEW, () => new SearchSampleQuickView());
    this.quickViewNavigator.register(SampleComponentIds.SAMPLE_SUCCESS_VIEW, () => new SuccessSampleQuickView());
    this.quickViewNavigator.register(SampleComponentIds.SAMPLE_TOGGLE_ROW_VIEW, () => new ToggleRowSampleQuickView());
  }

  public renderCard(): string | undefined {
    return SampleComponentIds.SAMPLE_COMPONENTS_CARD_VIEW;
  }
}
