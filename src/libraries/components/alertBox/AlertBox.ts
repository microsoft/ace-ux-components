/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {
  ActionSet,
  ActionStyle,
  ActionSubmit,
  Alignment,
  Column,
  ColumnSet,
  Container,
  ContainerStyle,
  FontColor,
  FontSize,
  FontWeight,
  RichTextBlock,
  Spacing,
  TextBlock,
  TextRun,
  VerticalAlignment,
} from "../elements";
import { BaseElement } from "../elements/BaseElement";
import { AlertAction, AlertConfirmation, AlertType } from "./AlertBox.types";

const getItems = (
  alertType: AlertType,
  alertMessage: string | string[],
  alertAction?: AlertAction | null | undefined,
  alertConfirmation?: AlertConfirmation | null | undefined
): BaseElement[] => {
  const color: ContainerStyle =
    alertType === AlertType.Success
      ? ContainerStyle.Good
      : alertType === AlertType.Warning
      ? ContainerStyle.Warning
      : ContainerStyle.Attention;
  const alertActionContainer: Column = new Column([]).setWidth("0").setIsVisible(false) as Column;
  const alertConfirmationContainer: ColumnSet = new ColumnSet([]).setIsVisible(false) as ColumnSet;
  const descriptionContainer: RichTextBlock = new RichTextBlock([]);

  if (alertAction) {
    alertActionContainer
      .shrink()
      .setSpacing(Spacing.Medium)
      .setVerticalAlignment(VerticalAlignment.Center)
      .setIsVisible(true);
    alertActionContainer.items.push(
      new RichTextBlock([
        new TextRun(alertAction.actionText)
          .setSize(FontSize.Small)
          .setWeight(FontWeight.Bolder)
          .enableUnderlined()
          .setAction(new ActionSubmit(alertAction.actionId, "", alertAction.actionData)),
      ]).setHorizontalAlignment(Alignment.Right)
    );
  }

  if (alertConfirmation) {
    alertConfirmationContainer.setIsVisible(true);
    alertConfirmationContainer.columns.push(
      new Column([
        new ActionSet([
          new ActionSubmit(alertConfirmation.cancelId, alertConfirmation.cancelText, alertConfirmation.cancelData),
        ]),
      ]).stretch(),
      new Column([
        new ActionSet([
          new ActionSubmit(alertConfirmation.okId, alertConfirmation.okText, alertConfirmation.okData).setStyle(
            ActionStyle.Destructive
          ),
        ]),
      ]).stretch()
    );
  }

  if (typeof alertMessage === "string" || alertMessage instanceof String) {
    descriptionContainer.inlines.push(
      new TextRun(alertMessage as string).setSize(FontSize.Small).setColor(FontColor.Dark)
    );
  } else {
    descriptionContainer.inlines.push(
      ...(alertMessage as String[]).map((message) =>
        new TextRun(message as string).setSize(FontSize.Small).setColor(FontColor.Dark)
      )
    );
  }

  return [
    new Container([
      new ColumnSet([
        new Column([
          new TextBlock(alertType)
            .setSize(FontSize.Small)
            .setWeight(FontWeight.Bolder)
            .setColor(FontColor.Dark)
            .enableWrap(),

          descriptionContainer,
          alertConfirmationContainer,
        ]).stretch(),
        alertActionContainer,
      ]),
    ])
      .setStyle(color)
      .enableBleed()
      .setSpacing(Spacing.Medium) as Container,
  ];
};

export class AlertBox extends Container {
  constructor(
    alertType: AlertType,
    alertMessage: string | string[],
    alertAction?: AlertAction | null | undefined,
    alertConfirmation?: AlertConfirmation | null | undefined
  ) {
    super(getItems(alertType, alertMessage, alertAction, alertConfirmation));
  }
}
