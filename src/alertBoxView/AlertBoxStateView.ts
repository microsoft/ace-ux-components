/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {
  ActionSet,
  ActionSubmit,
  Column,
  ColumnSet,
  Container,
  ContainerStyle,
  FontWeight,
  RichTextBlock,
  Spacing,
  TextRun,
  VerticalAlignment,
  Image,
} from "../elements";
import { DismissIcon } from "../assets";
import { BaseElement } from "../elements/BaseElement";
import { AlertIcon, AlertViewAction } from "./AlertBoxStateView.types";

const getItems = (
  backgroundColor: ContainerStyle,
  alertMessage: string,
  icon?: AlertIcon,
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
    alertActionContainer.items.push(
      new Image(DismissIcon, "dismiss alert").setWidth("20px").setAction(new ActionSubmit("", ""))
    );
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

  if (icon) {
    alertIconContainer
      .shrink()
      .setSpacing(Spacing.Large)
      .setVerticalAlignment(VerticalAlignment.Center)
      .setIsVisible(true);
    alertIconContainer.items.push(
      new Image(icon.iconName, "alert icon").setWidth(icon.size === "medium" ? "48px" : "24px")
    );
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
    icon?: AlertIcon,
    alertActions?: AlertViewAction[],
    title?: string,
    showActionAtFooter?: boolean
  ) {
    super(getItems(backgroundColor, alertMessage, icon, alertActions, title, showActionAtFooter));
  }
}
