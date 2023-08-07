import { ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import {
  Column,
  ColumnSet,
  Container,
  FontWeight,
  IconName,
  TextBlock,
  VerticalAlignment,
  createTemplate,
  getIcon,
} from "ace-ux-components";
import { SampleBaseQuickView } from "./SampleBaseQuickView";
import { ComponentDisplayNames } from "../constants";

export class IconListView extends SampleBaseQuickView {
  private iconList: IconName[] = [
    IconName.AddImage,
    IconName.AvatarBlue,
    IconName.AvatarGreen,
    IconName.AvatarPink,
    IconName.AvatarPurple,
    IconName.AvatarRed,
    IconName.AvatarTeal,
    IconName.CheckboxSelected,
    IconName.CheckboxUnselected,
    IconName.ChevronDown,
    IconName.ChevronDownDisabled,
    IconName.ChevronLeft,
    IconName.ChevronLeftDisabled,
    IconName.ChevronRight,
    IconName.ChevronRightDisabled,
    IconName.ChevronUp,
    IconName.ChevronUpDisabled,
    IconName.ClearSearchBar,
    IconName.DismissIcon,
    IconName.EmptyIllustration,
    IconName.EmptySmallIllustration,
    IconName.ErrorIllustration,
    IconName.ErrorSmallIllustration,
    IconName.ErrorIcon,
    IconName.FileIcon,
    IconName.Image,
    IconName.ExpiredIcon,
    IconName.ImportantIcon,
    IconName.InfoFilled,
    IconName.InfoOutline,
    IconName.InReview,
    IconName.LaptopIcon,
    IconName.LoadingIcon,
    IconName.MarkerCompleted,
    IconName.MarkerCurrent,
    IconName.MarkerNotStarted,
    IconName.PendingIcon,
    IconName.PhoneIcon,
    IconName.QuestionFilled,
    IconName.StepperLine,
    IconName.SuccessSmallIllustration,
    IconName.SuccessIcon,
    IconName.SuccessIllustration,
    IconName.ToggleSelected,
    IconName.ToggleUnselected,
    IconName.WarningIcon,
    IconName.Attach,
    IconName.BuildingAndDesktopFilled,
    IconName.BuildingAndDesktopOutlined,
    IconName.BuildingFilled,
    IconName.BuildingOutlined,
    IconName.ChatBubblesQuestion,
    IconName.DesktopFilled,
    IconName.DesktopOutlined,
    IconName.ErrorLightGray,
    IconName.ExpiredAttention,
    IconName.ExternalLink,
    IconName.InfoFilledAttention,
    IconName.InfoOutlinedAttention,
    IconName.Link,
    IconName.Notepad,
    IconName.PhoneLaptop,
    IconName.Play,
    IconName.QuestionOutlined,
    IconName.Refresh,
    IconName.Send,
    IconName.StarFilled,
    IconName.StarOutlined,
    IconName.SubtractCircle,
    IconName.SupportPerson,
    IconName.Ticket,
  ];
  public get title() {
    return ComponentDisplayNames.iconList;
  }

  public get template(): ISPFxAdaptiveCard {
    return createTemplate([this.getIconColumnSet()]);
  }

  private getIconColumnSet(): ColumnSet {
    const iconColumSet: ColumnSet = new ColumnSet([]);
    iconColumSet.columns.push(
      new Column([new TextBlock("Icon Name").setWeight(FontWeight.Bolder)])
        .stretch()
        .setVerticalAlignment(VerticalAlignment.Top)
    );
    iconColumSet.columns.push(
      new Column([
        new TextBlock(`${this.hostTheme === "dark" ? "Dark" : "Light"} mode`).setWeight(FontWeight.Bolder),
      ]).setVerticalAlignment(VerticalAlignment.Top)
    );

    for (let index = 0; index < this.iconList.length; index++) {
      iconColumSet.columns[0].items.push(
        new Container([new TextBlock(this.iconList[index])]).setMinHeight("24px").stretch().useSeparator()
      );
      iconColumSet.columns[1].items.push(
        getIcon({ icon: this.iconList[index], hostTheme: this.hostTheme }).shrink().useSeparator()
      );
    }

    return iconColumSet;
  }
}
