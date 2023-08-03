/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { DeviceContext, HostTheme } from "@microsoft/sp-adaptive-card-extension-base";
import { Alignment } from "./elements";
import { BaseActionElement } from "./elements/BaseActionElement";
import { CalendarStatusType, WorkStatus } from "./persona";

export enum ListType {
  PeopleList = "PeopleList",
  TitleList = "TitleList",
  TitleWithSubtitleList = "TitleWithSubtitleList",
}

export enum LoadingSize {
  Medium = "medium",
  Large = "large",
}

export enum NewListType {
  BasicList = "BasicList",
  MultilineList = "MultilineList",
}

export type BaseListItem = {
  name: string;
  subtitle?: string;
  profilePicture?: string;
};

export enum ComplexComponentType {
  FileAttachment = "FileAttachment",
}

export type ListItem = Record<string, unknown> & BaseListItem;

export type ListKeys = {
  titleKey: string;
  bodyKey?: string;
  captionKey?: string;
};

export type SectionListData = {
  data: unknown[];
  sectionName: string;
  listKeys: ListKeys;
};

export type ItemsListProps = {
  actionId?: string;
  data: ListItem[];
  listType: ListType;
  nextPageId: string;
  personaProps?: ItemsListPersonaProps;
  previousPageId: string;
  selectedItem?: ListItem;
  startingIndex: number;
  withChevron?: boolean;
  hostTheme: HostTheme;
};

export type ItemsListPersonaProps = {
  actions?: { alignment: Alignment; actionElements: BaseActionElement[] };
  iconAction?: { actionElement: BaseActionElement; icon: string };
  statusText?: { icon: string; text: string };
  workStatus?: { data: WorkStatus[]; statusType: CalendarStatusType };
  hostTheme: HostTheme;
};

export type FileAttachmentProps = {
  id: string;
  filesList: (AnnotationSimple | Annotation)[];
  maxSize: number;
  isFileTooLarge: boolean;
  selectedFileStateKey: string;
  maxSizeExceededMessage: string;
  hostTheme: HostTheme;
};

export type AnnotationSimple = {
  filename: string;
  base64Uri: string;
};

export type Annotation = {
  annotationid: string;
  notetext: string;
  filename: string;
  subject: string;
  mimetype: string;
};

export type ComponentProps = FileAttachmentProps;

// NOTE: Hardcoded type from https://docs.microsoft.com/en-us/javascript/api/sp-adaptive-card-extension-base/mediatype?view=sp-typescript-latest due to unit testing errors.
//       Please continue to update this type if new MediaTypes are added.
export enum MediaType {
  Image = 1,
  Audio = 4,
  Document = 8,
}

export type ImageData = {
  fileName: string;
  content: string;
  fileSize: number;
};

export enum QrCodeStatus {
  InitialStatus = "InitialStatus",
  InputTextStatus = "InputTextStatus",
  SuccessStatus = "SuccessStatus",
  UnableToNotifyErrorStatus = "UnableNotifyStatus",
  OptedOutErrorStatus = "OptedOutErrorStatus",
}

// NOTE: Moved from myhub-viva-library constants
export const MOBILE: DeviceContext = "Mobile";
export const TEAMS_DESKTOP: DeviceContext = "TeamsDesktop";
export const WEB_VIEW: DeviceContext = "WebView";
export enum AceRenderType {
  Card = "Card",
  QuickView = "QuickView",
}

export enum AriaLive {
  Polite = "polite",
  Off = "off",
  Assertive = "assertive",
}

export const LOADING_ID: string = "LOADING_ID";

export type IconProps = {
  icon: IconName;
  hostTheme: HostTheme;
  altText?: string;
  height?: string;
  width?: string;
};

export enum IconName {
  AddImage = "AddImage",
  AvatarBlue = "AvatarBlue",
  AvatarGreen = "AvatarGreen",
  AvatarPink = "AvatarPink",
  AvatarPurple = "AvatarPurple",
  AvatarRed = "AvatarRed",
  AvatarTeal = "AvatarTeal",
  CheckboxSelected = "CheckboxSelected",
  CheckboxUnselected = "CheckboxUnselected",
  ChevronDown = "ChevronDown",
  ChevronDownDisabled = "ChevronDownDisabled",
  ChevronLeft = "ChevronLeft",
  ChevronLeftDisabled = "ChevronLeftDisabled",
  ChevronRight = "ChevronRight",
  ChevronRightDisabled = "ChevronRightDisabled",
  ChevronUp = "ChevronUp",
  ChevronUpDisabled = "ChevronUpDisabled",
  ClearSearchBar = "ClearSearchBar",
  DismissIcon = "DismissIcon",
  EmptyIllustration = "EmptyIllustration",
  EmptySmallIllustration = "EmptySmallIllustration",
  ErrorIllustration = "ErrorIllustration",
  ErrorSmallIllustration = "ErrorSmallIllustration",
  ErrorIcon = "ErrorIcon",
  FileIcon = "FileIcon",
  Image = "Image",
  ExpiredIcon = "ExpiredIcon",
  ImportantIcon = "ImportantIcon",
  InfoFilled = "InfoFilled",
  InfoOutline = "InfoOutline",
  InReview = "InReview",
  LaptopIcon = "LaptopIcon",
  LoadingIcon = "LoadingIcon",
  MarkerCompleted = "MarkerCompleted",
  MarkerCurrent = "MarkerCurrent",
  MarkerNotStarted = "MarkerNotStarted",
  MyHubLogo = "MyHubLogo",
  PendingIcon = "PendingIcon",
  PhoneIcon = "PhoneIcon",
  QuestionFilled = "QuestionFilled",
  StepperLine = "StepperLine",
  SuccessSmallIllustration = "SuccessSmallIllustration",
  SuccessIcon = "SuccessIcon",
  SuccessIllustration = "SuccessIllustration",
  ToggleSelected = "ToggleSelected",
  ToggleUnselected = "ToggleUnselected",
  WarningIcon = "WarningIcon",
  Attach = "Attach",
  BuildingAndDesktopFilled = "BuildingAndDesktopFilled",
  BuildingAndDesktopOutlined = "BuildingAndDesktopOutlined",
  BuildingFilled = "BuildingFilled",
  BuildingOutlined = "BuildingOutlined",
  ChatBubblesQuestion = "ChatBubblesQuestion",
  DesktopFilled = "DesktopFilled",
  DesktopOutlined = "DesktopOutlined",
  ErrorLightGray = "ErrorLightGray",
  ExpiredAttention = "ExpiredAttention",
  ExternalLink = "ExternalLink",
  InfoFilledAttention = "InfoFilledAttention",
  InfoOutlinedAttention = "InfoOutlinedAttention",
  Link = "Link",
  Notepad = "Notepad",
  PhoneLaptop = "PhoneLaptop",
  Play = "Play",
  QuestionOutlined = "QuestionOutlined",
  Refresh = "Refresh",
  Send = "Send",
  StarFilled = "Star_Filled",
  StarOutlined = "Star_Outlined",
  SubtractCircle = "SubtractCircle",
  SupportPerson = "SupportPerson",
  Ticket = "Ticket",
}
