/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/** Reference URL for schema - https://adaptivecards.io/explorer/ **/

export enum ActionArgument {
  Submit = "Submit",
  ShowCard = "ShowCard",
  SelectMedia = "VivaAction.SelectMedia",
}

export enum ActionType {
  Execute = "Action.Execute",
  OpenUrl = "Action.OpenUrl",
  ShowCard = "Action.ShowCard",
  Submit = "Action.Submit",
  ToggleVisibility = "Action.ToggleVisibility",
  SelectMedia = "VivaAction.SelectMedia",
}

export enum ActionStyle {
  Default = "default",
  Positive = "positive",
  Destructive = "destructive",
}

export enum Alignment {
  Center = "center",
  Left = "left",
  Right = "right",
}

export enum BlockElementDimension {
  Auto = "auto",
  Stretch = "stretch",
}

export enum ChoiceSetStyle {
  Compact = "compact",
  Expanded = "expanded",
}

export enum ContainerStyle {
  Accent = "accent",
  Attention = "attention",
  Default = "default",
  Emphasis = "emphasis",
  Good = "good",
  Warning = "warning",
}

export enum ElementType {
  ActionSet = "ActionSet",
  AdaptiveCard = "AdaptiveCard",
  Column = "Column",
  ColumnSet = "ColumnSet",
  Container = "Container",
  FactSet = "FactSet",
  Image = "Image",
  ImageSet = "ImageSet",
  InputChoiceSet = "Input.ChoiceSet",
  InputDate = "Input.Date",
  InputNumber = "Input.Number",
  InputText = "Input.Text",
  InputTime = "Input.Time",
  InputToggle = "Input.Toggle",
  Media = "Media",
  RichTextBlock = "RichTextBlock",
  TextBlock = "TextBlock",
  TextRun = "TextRun",
}

export enum FontColor {
  Accent = "accent",
  Attention = "attention",
  Dark = "dark",
  Default = "default",
  Good = "good",
  Light = "light",
  Warning = "warning",
}

export enum FontSize {
  Default = "default",
  ExtraLarge = "extraLarge",
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export enum FontType {
  Default = "default",
  Monospace = "monospace",
}

export enum FontWeight {
  Bolder = "bolder",
  Default = "default",
  Lighter = "lighter",
}

export enum Height {
  Auto = "auto",
  Stretch = "stretch",
}

export enum ImageSize {
  Auto = "auto",
  Large = "large",
  Medium = "medium",
  Stretch = "stretch",
  Small = "small",
}

export enum ImageStyle {
  Default = "default",
  Person = "person",
}

export enum InputToggleValue {
  TRUE = "true",
  FALSE = "false",
}

// export enum RenderType {
//   Card = "Card",
//   QuickView = "QuickView",
// }

export enum Spacing {
  Default = "default",
  ExtraLarge = "extraLarge",
  Large = "large",
  Medium = "Medium",
  None = "none",
  Padding = "padding",
  Small = "small",
}

export enum Style {
  Emphasis = "emphasis",
  Positive = "positive",
  Destructive = "destructive",
  Compact = "compact",
  Expanded = "expanded",
  Default = "default",
}

export enum TextInputStyle {
  Email = "email",
  Tel = "tel",
  Text = "text",
  Url = "url",
}

export enum TextBlockStyle {
  Default = "default",
  Heading = "heading",
}

export enum VerticalAlignment {
  Top = "top",
  Center = "center",
  Bottom = "bottom",
}

export enum ActionMode {
  Primary = "primary",
  Secondary = "secondary",
}

export enum AssociatedInputs {
  Auto = "auto",
  None = "none",
}

export enum CalendarType {
  Day = "Day",
  Week = "Week",
}
