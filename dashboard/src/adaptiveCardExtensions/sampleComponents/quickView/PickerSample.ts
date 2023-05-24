import { createTemplate, ListItem, Picker, PickerProps } from "@microsoft/ace-ux-components";
import { ISPFxAdaptiveCard, ISubmitActionArguments } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleComponentStateKeys } from "../sampleComponentTypes";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class PickerSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.picker;
  }
  constructor() {
    super();
  }

  private createPicker(selectedItem?: ListItem) {
    const pickerProps: PickerProps = {
      accessibilityLabel: "Sample Picker",
      isHeader: false,
      label: selectedItem?.name,
      listData: this.state[SampleComponentStateKeys.SAMPLE_PICKER_LIST_DATA],
      listKeys: { titleKey: "name" },
      viewHeaderLabel: "Sample View Header Text",
    };

    return this.registerComponent(new Picker("samplePicker", pickerProps), this.selectItem.bind(this));
  }

  public get template(): ISPFxAdaptiveCard {
    return createTemplate([this.createPicker(this.state[SampleComponentStateKeys.SAMPLE_PICKER_SELECTED_ITEM])]);
  }

  private selectItem(item: unknown): void {
    this.setState({ [SampleComponentStateKeys.SAMPLE_PICKER_SELECTED_ITEM]: item as ListItem });
  }

  public onAction(args: ISubmitActionArguments): void {
    super.onAction(args);
  }
}
