import {
  ActionSet,
  ActionSubmit,
  Column,
  ColumnSet,
  Container,
  ContainerStyle,
  Image,
  FontWeight,
  RichTextBlock,
  Spacing,
  TextRun,
  VerticalAlignment,
} from "../elements";
import { BaseElement } from "../elements/BaseElement";
import { AlertBoxIconSize, AlertBoxStateType, AlertViewAction } from "./AlertBoxStateView.types";
import { HostTheme } from "@microsoft/sp-adaptive-card-extension-base";
import { getIcon } from "../getIcon";
import { IconName, IconProps } from "../types";

const getItems = (
  backgroundColor: ContainerStyle,
  alertMessage: string,
  hostTheme: HostTheme,
  alertBoxType: AlertBoxStateType,
  useDefaultIcon: boolean,
  iconURL?: string,
  iconSize?: AlertBoxIconSize,
  alertActions?: AlertViewAction[],
  title?: string,
  showActionAtFooter?: boolean
): BaseElement[] => {
  const alertActionContainer: Column = new Column([]) as Column;
  const alertIconContainer: Column = new Column([]).setIsVisible(false) as Column;
  const alertTitleContainer: RichTextBlock = new RichTextBlock([]);
  const alertActionFooterContainer: ColumnSet = new ColumnSet([]).setIsVisible(false) as ColumnSet;
  const descriptionContainer: RichTextBlock = new RichTextBlock([]);
  alertActionContainer.shrink().setSpacing(Spacing.Medium).setVerticalAlignment(VerticalAlignment.Center);

  const renderDismissIcon = () => {
    const iconProps: IconProps = {
      icon: IconName.DismissIcon,
      height: "20px",
      width: "20px",
      altText: "dismiss alert",
      hostTheme: hostTheme,
    };
    alertActionContainer.items.push(getIcon(iconProps).setAction(new ActionSubmit("", "")));
    if (showActionAtFooter) {
      alertActionContainer.setVerticalAlignment(VerticalAlignment.Top);
    }
  };

  if (alertActions && alertActions.length) {
    const actionSubmits = alertActions.map((data) => {
      const actionData = new ActionSubmit(data.actionId, data.actionText, data.actionData);
      if (data.actionStyle) {
        actionData.setStyle(data.actionStyle);
      }
      return actionData;
    });
    if (showActionAtFooter) {
      alertActionFooterContainer.setIsVisible(true);
      alertActionFooterContainer.setSpacing(Spacing.Medium);
      actionSubmits.forEach((action) => {
        alertActionFooterContainer.columns.push(new Column([new ActionSet([action])]));
      });
      renderDismissIcon();
    } else {
      alertActionContainer.items.push(new ActionSet(actionSubmits));
    }
  } else {
    renderDismissIcon();
  }

  if (title) {
    alertTitleContainer.setIsVisible(true);
    alertActionContainer.setSpacing(Spacing.Small);
    alertTitleContainer.inlines.push(new TextRun(title as string).setWeight(FontWeight.Bolder));
  }
  if (alertMessage) {
    descriptionContainer.inlines.push(new TextRun(alertMessage as string));
  }

  if (iconURL && !useDefaultIcon) {
    // If a icon is passed to replace default icons
    alertIconContainer
      .shrink()
      .setSpacing(Spacing.Large)
      .setVerticalAlignment(VerticalAlignment.Center)
      .setIsVisible(true);
    alertIconContainer.items.push(new Image(iconURL, "alert icon").setWidth(iconSize === "medium" ? "48px" : "24px"));
  } else if (useDefaultIcon) {
    // Case where an icon isn't passed and default(s) are being used.
    // If iconURL is null and useDefaultIcon is false, then user does not want to display any icon.
    const iconName: IconName =
      alertBoxType === "Error"
        ? IconName.ErrorIcon
        : alertBoxType === "Info"
        ? IconName.InfoFilled
        : alertBoxType === "Success"
        ? IconName.SuccessIcon
        : IconName.WarningIcon;
    const size: string = iconSize === "medium" ? "48px" : "24px";
    const iconProps: IconProps = {
      icon: iconName,
      height: size,
      width: size,
      altText: "alert icon",
      hostTheme: hostTheme,
    };
    alertIconContainer
      .shrink()
      .setSpacing(Spacing.Large)
      .setVerticalAlignment(VerticalAlignment.Center)
      .setIsVisible(true);
    alertIconContainer.items.push(getIcon(iconProps));
  }

  return [
    new Container([
      new ColumnSet([
        alertIconContainer,
        new Column([alertTitleContainer, descriptionContainer]),
        alertActionContainer,
      ]),
      alertActionFooterContainer,
    ])
      .setStyle(backgroundColor)
      .enableBleed()
      .setSpacing(Spacing.Small) as Container,
  ];
};

export class AlertBoxStateView extends Container {
  constructor(
    backgroundColor: ContainerStyle,
    alertMessage: string,
    hostTheme: HostTheme,
    alertBoxType: AlertBoxStateType,
    useDefaultIcon: boolean,
    icon?: string,
    iconSize?: AlertBoxIconSize,
    alertActions?: AlertViewAction[],
    title?: string,
    showActionAtFooter?: boolean
  ) {
    super(
      getItems(
        backgroundColor,
        alertMessage,
        hostTheme,
        alertBoxType,
        useDefaultIcon,
        icon,
        iconSize,
        alertActions,
        title,
        showActionAtFooter
      )
    );
  }
}
