import {
  Container,
  ContainerStyle,
  createTemplate,
  FontWeight,
  ItemsList,
  ItemsListProps,
  ListItem,
  ListType,
  Spacing,
  TextBlock,
} from "ace-ux-components";
import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { ComponentDisplayNames } from "../constants";
import { SampleBaseQuickView } from "./SampleBaseQuickView";

export class ItemsListSampleQuickView extends SampleBaseQuickView {
  public get title() {
    return ComponentDisplayNames.itemsList;
  }

  private createTitleContainer(text: string) {
    return new Container([
      new TextBlock(text).setWeight(FontWeight.Bolder).useSeparator(true).setSpacing(Spacing.ExtraLarge),
    ])
      .setStyle(ContainerStyle.Emphasis)
      .useSeparator();
  }

  private createListWithTitleContainer(
    listTitle: string,
    listType: ListType,
    listData: ListItem[],
    withChevron: boolean
  ) {
    const props: ItemsListProps = {
      actionId: listTitle,
      withChevron,
      data: listData,
      listType,
      nextPageId: "nextPage",
      previousPageId: "previousPage",
      startingIndex: 0,
      personaProps:
        listType === ListType.PeopleList
          ? { statusText: { text: "StatusText", icon: "AddImage_dark" }, hostTheme: this.hostTheme }
          : undefined,
      hostTheme: this.hostTheme,
    };
    return new Container([this.createTitleContainer(listTitle), new ItemsList(props)]);
  }

  private createListList(listData: ListItem[]): Container[] {
    const listTypes = Object.keys(ListType);
    return listTypes.flatMap((listType) => [
      this.createListWithTitleContainer(listType, ListType[listType], listData, false),
      this.createListWithTitleContainer(`${listType} with Chevron`, ListType[listType], listData, true),
    ]);
  }

  public get template(): ISPFxAdaptiveCard {
    const listData: ListItem[] = [
      { name: "Fred Joe", subtitle: "Boss" },
      { name: "John Doe", subtitle: "Man of Mystery" },
      { name: "Joe Schmoe", subtitle: "Boss Boss" },
      { name: "Mary Sue", subtitle: "Gary Stu" },
    ];

    //TODO: update the type to use a discriminated union as the current typing is weird.
    return createTemplate(this.createListList(listData));
  }
}
