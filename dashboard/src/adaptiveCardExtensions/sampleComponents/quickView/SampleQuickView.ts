import { createTemplate, ItemsList, ItemsListProps, ListType } from "ace-ux-components";
import {
  IActionArguments,
  ISPFxAdaptiveCard,
  ISubmitActionArguments,
} from "@microsoft/sp-adaptive-card-extension-base";
import { sampleComponentsList } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class SampleQuickView extends SampleBaseQuickView {
  constructor() {
    super();
  }

  public get template(): ISPFxAdaptiveCard {
    const props: ItemsListProps = {
      actionId: "itemId",
      data: sampleComponentsList,
      listType: ListType.TitleList,
      nextPageId: "nextPage",
      previousPageId: "previousPage",
      startingIndex: 0,
      withChevron: true,
    };

    return createTemplate([new ItemsList(props)]);
  }
  public onAction(action: IActionArguments): void {
    const data = (<ISubmitActionArguments>action).data;
    this.setState({ buttonClicked: false });
    this.quickViewNavigator.push(data.selectedItem.id);
  }
}
