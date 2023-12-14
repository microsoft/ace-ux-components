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
  IconListView,
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
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_COMPONENTS_QUICK_VIEW,
      // @ts-ignore
      () => new SampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_ALERT_BOX_VIEW,
      // @ts-ignore
      () => new AlertBoxSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_ALERT_BOX_SUCCESS_VIEW,
      // @ts-ignore
      () => new AlertBoxSuccessSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_ALERT_BOX_ERROR_VIEW,
      // @ts-ignore
      () => new AlertBoxErrorSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_ALERT_BOX_WARNING_VIEW,
      // @ts-ignore
      () => new AlertBoxWarningSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_ALERT_BOX_INFO_VIEW,
      // @ts-ignore
      () => new AlertBoxInfoSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_CHOICE_SET_VIEW,
      // @ts-ignore
      () => new ChoiceSetSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_EMPTY_VIEW,
      // @ts-ignore
      () => new EmptySampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_ERROR_VIEW,
      // @ts-ignore
      () => new ErrorSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_HEADER_VIEW,
      // @ts-ignore
      () => new HeaderSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_INPUT_DATE_VIEW,
      // @ts-ignore
      () => new InputDateSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_INPUT_NUMBER_VIEW,
      // @ts-ignore
      () => new InputNumberSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_INPUT_TIME_VIEW,
      // @ts-ignore
      () => new InputTimeSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_INPUT_TOGGLE_VIEW,
      // @ts-ignore
      () => new InputToggleSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_ITEMS_LIST_VIEW,
      // @ts-ignore
      () => new ItemsListSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_LOADING_INDICATOR_VIEW,
      // @ts-ignore
      () => new LoadingIndicatorSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_PERSONA_VIEW,
      // @ts-ignore
      () => new PersonaSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_PICKER_VIEW,
      // @ts-ignore
      () => new PickerSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_SEARCH_VIEW,
      // @ts-ignore
      () => new SearchSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_SUCCESS_VIEW,
      // @ts-ignore
      () => new SuccessSampleQuickView(this.context)
    );
    this.quickViewNavigator.register(
      SampleComponentIds.SAMPLE_TOGGLE_ROW_VIEW,
      // @ts-ignore
      () => new ToggleRowSampleQuickView(this.context)
    );
    // @ts-ignore
    this.quickViewNavigator.register(SampleComponentIds.ICON_LIST_VIEW, () => new IconListView(this.context));
  }

  public renderCard(): string | undefined {
    return SampleComponentIds.SAMPLE_COMPONENTS_CARD_VIEW;
  }
}
