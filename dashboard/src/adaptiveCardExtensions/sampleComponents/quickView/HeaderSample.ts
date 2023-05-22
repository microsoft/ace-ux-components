import { ISPFxAdaptiveCard, ISubmitActionArguments } from "@microsoft/sp-adaptive-card-extension-base";
import {
  Container,
  ContainerStyle,
  createTemplate,
  FontSize,
  FontWeight,
  Header,
  HeaderType,
  ListItem,
  Picker,
  PickerProps,
  Spacing,
  TextBlock,
} from "ace-ux-components";
import { ComponentDisplayNames } from "../constants";
import { ISampleComponentsAdaptiveCardExtensionState, SampleComponentStateKeys } from "../sampleComponentTypes";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class HeaderSampleQuickView extends SampleBaseQuickView {
  constructor() {
    super();
  }

  public get title(): string {
    return ComponentDisplayNames.header;
  }

  public get template(): ISPFxAdaptiveCard {
    const selectedItem: ListItem = this.state[SampleComponentStateKeys.SAMPLE_PICKER_SELECTED_ITEM]
      ? this.state[SampleComponentStateKeys.SAMPLE_PICKER_SELECTED_ITEM]
      : { name: "This is a picker header" };
    const pickerProps: PickerProps = {
      accessibilityLabel: "Test label.",
      label: selectedItem.name,
      isHeader: true,
      listData: this.state[SampleComponentStateKeys.SAMPLE_PICKER_LIST_DATA],
      listKeys: { titleKey: "name" },
      viewHeaderLabel: "Sample label",
    };

    const picker: Picker<ISampleComponentsAdaptiveCardExtensionState> = this.registerComponent(
      new Picker("headerPickerSample", pickerProps),
      this.selectItem.bind(this)
    ) as Picker<ISampleComponentsAdaptiveCardExtensionState>;

    return createTemplate([
      new TextBlock(
        "NOTE: The blue line 'replaces' the current grey line at the top of the view (below the actual view header) when the Header component is used as the first element in the view."
      )
        .setSize(FontSize.Medium)
        .setWeight(FontWeight.Bolder)
        .enableWrap(),
      this.createTitleContainer("Basic header"),
      new Header(HeaderType.Basic, "Sample header", this.context.deviceContext),
      this.createTitleContainer("Basic header with description"),
      new Header(HeaderType.Basic, "Sample header", this.context.deviceContext).withDescription(
        "Sample description. This can get as long as needed, it will only extends to more lines."
      ),
      this.createTitleContainer("Basic header with call to action"),
      new Header(HeaderType.Basic, "Sample header", this.context.deviceContext).withCallToAction("firstId", "Button"),
      this.createTitleContainer("Basic header with call to action and description"),
      new Header(HeaderType.Basic, "Sample header", this.context.deviceContext)
        .withDescription("Sample description. This can get as long as needed, it will only extends to more lines.")
        .withCallToAction("secondId", "Button"),
      this.createTitleContainer("Picker header"),
      new Header(HeaderType.Picker, "", this.context.deviceContext, picker),
      this.createTitleContainer("Empty header"),
      new Header(HeaderType.Empty, "", this.context.deviceContext),
      new Container([]).setSpacing(Spacing.Large),
    ]);
  }

  private selectItem(item: ListItem): void {
    this.setState({ [SampleComponentStateKeys.SAMPLE_PICKER_SELECTED_ITEM]: item });
  }

  private createTitleContainer(text: string) {
    return new Container([
      new TextBlock(text).setWeight(FontWeight.Bolder).useSeparator(true).setSpacing(Spacing.ExtraLarge),
    ])
      .setStyle(ContainerStyle.Emphasis)
      .enableBleed()
      .setSpacing(Spacing.Large);
  }

  public onAction(args: ISubmitActionArguments): void {
    super.onAction(args);
  }
}
