import { HostTheme } from "@microsoft/sp-adaptive-card-extension-base";
import {
  AddImage_dark,
  AddImage_light,
  Attach_dark,
  Attach_light,
  AvatarBlue_dark,
  AvatarBlue_light,
  AvatarGreen_dark,
  AvatarGreen_light,
  AvatarPink_dark,
  AvatarPink_light,
  AvatarPurple_dark,
  AvatarPurple_light,
  AvatarRed_dark,
  AvatarRed_light,
  AvatarTeal_dark,
  AvatarTeal_light,
  BuildingAndDesktopFilled_dark,
  BuildingAndDesktopFilled_light,
  BuildingAndDesktopOutlined_dark,
  BuildingAndDesktopOutlined_light,
  BuildingFilled_dark,
  BuildingFilled_light,
  BuildingOutlined_dark,
  BuildingOutlined_light,
  ChatBubblesQuestion_dark,
  ChatBubblesQuestion_light,
  CheckboxSelected_dark,
  CheckboxSelected_light,
  CheckboxUnselected_dark,
  CheckboxUnselected_light,
  ChevronDownDisabled_dark,
  ChevronDownDisabled_light,
  ChevronDown_dark,
  ChevronDown_light,
  ChevronLeftDisabled_dark,
  ChevronLeftDisabled_light,
  ChevronLeft_dark,
  ChevronLeft_light,
  ChevronRightDisabled_dark,
  ChevronRightDisabled_light,
  ChevronRight_dark,
  ChevronRight_light,
  ChevronUpDisabled_dark,
  ChevronUpDisabled_light,
  ChevronUp_dark,
  ChevronUp_light,
  ClearSearchBar_dark,
  ClearSearchBar_light,
  DesktopFilled_dark,
  DesktopFilled_light,
  DesktopOutlined_dark,
  DesktopOutlined_light,
  DismissIcon_dark,
  DismissIcon_light,
  EmptyIllustration_dark,
  EmptyIllustration_light,
  EmptySmallIllustration_dark,
  EmptySmallIllustration_light,
  ErrorIcon_dark,
  ErrorIcon_light,
  ErrorIllustration_dark,
  ErrorIllustration_light,
  ErrorLightGray_dark,
  ErrorLightGray_light,
  ErrorSmallIllustration_dark,
  ErrorSmallIllustration_light,
  ExpiredAttention_dark,
  ExpiredAttention_light,
  ExpiredIcon_dark,
  ExpiredIcon_light,
  ExternalLink_dark,
  ExternalLink_light,
  FileIcon_dark,
  FileIcon_light,
  Image_dark,
  Image_light,
  ImportantIcon_dark,
  ImportantIcon_light,
  InReview_dark,
  InReview_light,
  InfoFilledAttention_dark,
  InfoFilledAttention_light,
  InfoFilled_dark,
  InfoFilled_light,
  InfoOutline_dark,
  InfoOutline_light,
  InfoOutlinedAttention_dark,
  InfoOutlinedAttention_light,
  LaptopIcon_dark,
  LaptopIcon_light,
  Link_dark,
  Link_light,
  LoadingIcon_dark,
  LoadingIcon_light,
  MarkerCompleted_dark,
  MarkerCompleted_light,
  MarkerCurrent_dark,
  MarkerCurrent_light,
  MarkerNotStarted_dark,
  MarkerNotStarted_light,
  MyHubLogo_dark,
  MyHubLogo_light,
  Notepad_dark,
  Notepad_light,
  PendingIcon_dark,
  PendingIcon_light,
  PhoneIcon_dark,
  PhoneIcon_light,
  PhoneLaptop_dark,
  PhoneLaptop_light,
  Play_dark,
  Play_light,
  QuestionFilled_dark,
  QuestionFilled_light,
  QuestionOutlined_dark,
  QuestionOutlined_light,
  Refresh_dark,
  Refresh_light,
  Send_dark,
  Send_light,
  StarFilled_dark,
  StarFilled_light,
  StarOutlined_dark,
  StarOutlined_light,
  StepperLine_dark,
  StepperLine_light,
  SubtractCircle_dark,
  SubtractCircle_light,
  SuccessIcon_dark,
  SuccessIcon_light,
  SuccessIllustration_dark,
  SuccessIllustration_light,
  SuccessSmallIllustration_dark,
  SuccessSmallIllustration_light,
  SupportPerson_dark,
  SupportPerson_light,
  Ticket_dark,
  Ticket_light,
  ToggleSelected_dark,
  ToggleSelected_light,
  ToggleUnselected_dark,
  ToggleUnselected_light,
  WarningIcon_dark,
  WarningIcon_light,
} from "./assets";
import { Image } from "./elements";
import { IconName, IconProps } from "./types";

export function getIcon(iconProps: IconProps): Image {
  return new Image(getThemeBasesIcon(iconProps.icon, iconProps.hostTheme), iconProps.altText || iconProps.icon)
    .setHeight(iconProps.height || "24px")
    .setWidth(iconProps.width || "24px");
}

export function getThemeBasesIcon(iconName: IconName, hostTheme: HostTheme): string {
  let imageURL: string = "";
  switch (iconName) {
    case IconName.AddImage: {
      imageURL = hostTheme === "dark" ? AddImage_dark : AddImage_light;
      break;
    }
    case IconName.AvatarBlue: {
      imageURL = hostTheme === "dark" ? AvatarBlue_dark : AvatarBlue_light;
      break;
    }
    case IconName.AvatarGreen: {
      imageURL = hostTheme === "dark" ? AvatarGreen_dark : AvatarGreen_light;
      break;
    }
    case IconName.AvatarPink: {
      imageURL = hostTheme === "dark" ? AvatarPink_dark : AvatarPink_light;
      break;
    }
    case IconName.AvatarPurple: {
      imageURL = hostTheme === "dark" ? AvatarPurple_dark : AvatarPurple_light;
      break;
    }
    case IconName.AvatarRed: {
      imageURL = hostTheme === "dark" ? AvatarRed_dark : AvatarRed_light;
      break;
    }
    case IconName.AvatarTeal: {
      imageURL = hostTheme === "dark" ? AvatarTeal_dark : AvatarTeal_light;
      break;
    }
    case IconName.CheckboxSelected: {
      imageURL = hostTheme === "dark" ? CheckboxSelected_dark : CheckboxSelected_light;
      break;
    }
    case IconName.CheckboxUnselected: {
      imageURL = hostTheme === "dark" ? CheckboxUnselected_dark : CheckboxUnselected_light;
      break;
    }
    case IconName.ChevronDown: {
      imageURL = hostTheme === "dark" ? ChevronDown_dark : ChevronDown_light;
      break;
    }
    case IconName.ChevronDownDisabled: {
      imageURL = hostTheme === "dark" ? ChevronDownDisabled_dark : ChevronDownDisabled_light;
      break;
    }
    case IconName.ChevronLeft: {
      imageURL = hostTheme === "dark" ? ChevronLeft_dark : ChevronLeft_light;
      break;
    }
    case IconName.ChevronLeftDisabled: {
      imageURL = hostTheme === "dark" ? ChevronLeftDisabled_dark : ChevronLeftDisabled_light;
      break;
    }
    case IconName.ChevronRight: {
      imageURL = hostTheme === "dark" ? ChevronRight_dark : ChevronRight_light;
      break;
    }
    case IconName.ChevronRightDisabled: {
      imageURL = hostTheme === "dark" ? ChevronRightDisabled_dark : ChevronRightDisabled_light;
      break;
    }
    case IconName.ChevronUp: {
      imageURL = hostTheme === "dark" ? ChevronUp_dark : ChevronUp_light;
      break;
    }
    case IconName.ChevronUpDisabled: {
      imageURL = hostTheme === "dark" ? ChevronUpDisabled_dark : ChevronUpDisabled_light;
      break;
    }
    case IconName.ClearSearchBar: {
      imageURL = hostTheme === "dark" ? ClearSearchBar_dark : ClearSearchBar_light;
      break;
    }
    case IconName.DismissIcon: {
      imageURL = hostTheme === "dark" ? DismissIcon_dark : DismissIcon_light;
      break;
    }
    case IconName.EmptyIllustration: {
      imageURL = hostTheme === "dark" ? EmptyIllustration_dark : EmptyIllustration_light;
      break;
    }
    case IconName.EmptySmallIllustration: {
      imageURL = hostTheme === "dark" ? EmptySmallIllustration_dark : EmptySmallIllustration_light;
      break;
    }
    case IconName.ErrorIllustration: {
      imageURL = hostTheme === "dark" ? ErrorIllustration_dark : ErrorIllustration_light;
      break;
    }
    case IconName.ErrorSmallIllustration: {
      imageURL = hostTheme === "dark" ? ErrorSmallIllustration_dark : ErrorSmallIllustration_light;
      break;
    }
    case IconName.ErrorIcon: {
      imageURL = hostTheme === "dark" ? ErrorIcon_dark : ErrorIcon_light;
      break;
    }
    case IconName.Image: {
      imageURL = hostTheme === "dark" ? Image_dark : Image_light;
      break;
    }
    case IconName.FileIcon: {
      imageURL = hostTheme === "dark" ? FileIcon_dark : FileIcon_light;
      break;
    }
    case IconName.ExpiredIcon: {
      imageURL = hostTheme === "dark" ? ExpiredIcon_dark : ExpiredIcon_light;
      break;
    }
    case IconName.ImportantIcon: {
      imageURL = hostTheme === "dark" ? ImportantIcon_dark : ImportantIcon_light;
      break;
    }
    case IconName.InfoFilled: {
      imageURL = hostTheme === "dark" ? InfoFilled_dark : InfoFilled_light;
      break;
    }
    case IconName.InfoOutline: {
      imageURL = hostTheme === "dark" ? InfoOutline_dark : InfoOutline_light;
      break;
    }
    case IconName.InReview: {
      imageURL = hostTheme === "dark" ? InReview_dark : InReview_light;
      break;
    }
    case IconName.LaptopIcon: {
      imageURL = hostTheme === "dark" ? LaptopIcon_dark : LaptopIcon_light;
      break;
    }
    case IconName.LoadingIcon: {
      imageURL = hostTheme === "dark" ? LoadingIcon_dark : LoadingIcon_light;
      break;
    }
    case IconName.MarkerCompleted: {
      imageURL = hostTheme === "dark" ? MarkerCompleted_dark : MarkerCompleted_light;
      break;
    }
    case IconName.MarkerCurrent: {
      imageURL = hostTheme === "dark" ? MarkerCurrent_dark : MarkerCurrent_light;
      break;
    }
    case IconName.MarkerNotStarted: {
      imageURL = hostTheme === "dark" ? MarkerNotStarted_dark : MarkerNotStarted_light;
      break;
    }
    case IconName.MyHubLogo: {
      imageURL = hostTheme === "dark" ? MyHubLogo_dark : MyHubLogo_light;
      break;
    }
    case IconName.PendingIcon: {
      imageURL = hostTheme === "dark" ? PendingIcon_dark : PendingIcon_light;
      break;
    }
    case IconName.PhoneIcon: {
      imageURL = hostTheme === "dark" ? PhoneIcon_dark : PhoneIcon_light;
      break;
    }
    case IconName.QuestionFilled: {
      imageURL = hostTheme === "dark" ? QuestionFilled_dark : QuestionFilled_light;
      break;
    }
    case IconName.StepperLine: {
      imageURL = hostTheme === "dark" ? StepperLine_dark : StepperLine_light;
      break;
    }
    case IconName.SuccessIcon: {
      imageURL = hostTheme === "dark" ? SuccessIcon_dark : SuccessIcon_light;
      break;
    }
    case IconName.SuccessSmallIllustration: {
      imageURL = hostTheme === "dark" ? SuccessSmallIllustration_dark : SuccessSmallIllustration_light;
      break;
    }
    case IconName.SuccessIllustration: {
      imageURL = hostTheme === "dark" ? SuccessIllustration_dark : SuccessIllustration_light;
      break;
    }
    case IconName.ToggleSelected: {
      imageURL = hostTheme === "dark" ? ToggleSelected_dark : ToggleSelected_light;
      break;
    }
    case IconName.ToggleUnselected: {
      imageURL = hostTheme === "dark" ? ToggleUnselected_dark : ToggleUnselected_light;
      break;
    }
    case IconName.WarningIcon: {
      imageURL = hostTheme === "dark" ? WarningIcon_dark : WarningIcon_light;
      break;
    }
    case IconName.Attach: {
      imageURL = hostTheme === "dark" ? Attach_dark : Attach_light;
      break;
    }
    case IconName.BuildingAndDesktopFilled: {
      imageURL = hostTheme === "dark" ? BuildingAndDesktopFilled_dark : BuildingAndDesktopFilled_light;
      break;
    }
    case IconName.BuildingAndDesktopOutlined: {
      imageURL = hostTheme === "dark" ? BuildingAndDesktopOutlined_dark : BuildingAndDesktopOutlined_light;
      break;
    }
    case IconName.BuildingFilled: {
      imageURL = hostTheme === "dark" ? BuildingFilled_dark : BuildingFilled_light;
      break;
    }
    case IconName.BuildingOutlined: {
      imageURL = hostTheme === "dark" ? BuildingOutlined_dark : BuildingOutlined_light;
      break;
    }
    case IconName.ChatBubblesQuestion: {
      imageURL = hostTheme === "dark" ? ChatBubblesQuestion_dark : ChatBubblesQuestion_light;
      break;
    }
    case IconName.DesktopFilled: {
      imageURL = hostTheme === "dark" ? DesktopFilled_dark : DesktopFilled_light;
      break;
    }
    case IconName.DesktopOutlined: {
      imageURL = hostTheme === "dark" ? DesktopOutlined_dark : DesktopOutlined_light;
      break;
    }
    case IconName.ErrorLightGray: {
      imageURL = hostTheme === "dark" ? ErrorLightGray_dark : ErrorLightGray_light;
      break;
    }
    case IconName.ExpiredAttention: {
      imageURL = hostTheme === "dark" ? ExpiredAttention_dark : ExpiredAttention_light;
      break;
    }
    case IconName.ExternalLink: {
      imageURL = hostTheme === "dark" ? ExternalLink_dark : ExternalLink_light;
      break;
    }
    case IconName.InfoFilledAttention: {
      imageURL = hostTheme === "dark" ? InfoFilledAttention_dark : InfoFilledAttention_light;
      break;
    }
    case IconName.InfoOutlinedAttention: {
      imageURL = hostTheme === "dark" ? InfoOutlinedAttention_dark : InfoOutlinedAttention_light;
      break;
    }
    case IconName.Link: {
      imageURL = hostTheme === "dark" ? Link_dark : Link_light;
      break;
    }
    case IconName.Notepad: {
      imageURL = hostTheme === "dark" ? Notepad_dark : Notepad_light;
      break;
    }
    case IconName.PhoneLaptop: {
      imageURL = hostTheme === "dark" ? PhoneLaptop_dark : PhoneLaptop_light;
      break;
    }
    case IconName.Play: {
      imageURL = hostTheme === "dark" ? Play_dark : Play_light;
      break;
    }
    case IconName.QuestionOutlined: {
      imageURL = hostTheme === "dark" ? QuestionOutlined_dark : QuestionOutlined_light;
      break;
    }
    case IconName.Refresh: {
      imageURL = hostTheme === "dark" ? Refresh_dark : Refresh_light;
      break;
    }
    case IconName.Send: {
      imageURL = hostTheme === "dark" ? Send_dark : Send_light;
      break;
    }
    case IconName.StarFilled: {
      imageURL = hostTheme === "dark" ? StarFilled_dark : StarFilled_light;
      break;
    }
    case IconName.StarOutlined: {
      imageURL = hostTheme === "dark" ? StarOutlined_dark : StarOutlined_light;
      break;
    }
    case IconName.SubtractCircle: {
      imageURL = hostTheme === "dark" ? SubtractCircle_dark : SubtractCircle_light;
      break;
    }
    case IconName.SupportPerson: {
      imageURL = hostTheme === "dark" ? SupportPerson_dark : SupportPerson_light;
      break;
    }
    case IconName.Ticket: {
      imageURL = hostTheme === "dark" ? Ticket_dark : Ticket_light;
      break;
    }
  }
  return imageURL;
}
