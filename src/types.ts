/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { DeviceContext } from "@microsoft/sp-adaptive-card-extension-base";
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
};

export type ItemsListPersonaProps = {
  actions?: { alignment: Alignment; actionElements: BaseActionElement[] };
  iconAction?: { actionElement: BaseActionElement; icon: string };
  statusText?: { icon: string; text: string };
  workStatus?: { data: WorkStatus[]; statusType: CalendarStatusType };
};

export type FileAttachmentProps = {
  id: string;
  filesList: (AnnotationSimple | Annotation)[];
  maxSize: number;
  isFileTooLarge: boolean;
  selectedFileStateKey: string;
  maxSizeExceededMessage: string;
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

export enum AriaLive {
  Aggressive = "aggressive",
  Polite = "polite",
  Off = "off",
}

export const LOADING_ID: string = "LOADING_ID";
