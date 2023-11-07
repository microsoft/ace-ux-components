/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LARGE_IMAGE_SIZE, SMALL_IMAGE_SIZE } from "./constants";
import {
  ActionSet,
  ActionSubmit,
  Alignment,
  BaseElement,
  Column,
  ColumnSet,
  Container,
  ContainerStyle,
  FontSize,
  FontWeight,
  Image,
  Spacing,
  TextBlock,
  VerticalAlignment,
} from "../elements";
import { StateViewButtonProps, StateType, StateViewType } from "./StateView.types";
import { HostTheme } from "../types";
import { IconName, IconProps } from "../types";
import { getIcon } from "../getIcon";

const getItems = (
  stateViewType: StateViewType,
  header: string,
  imageAltText: string,
  stateType: StateType,
  hostTheme: HostTheme
): BaseElement[] => {
  // Image template for Error View
  const iconPropsSmall: IconProps = {
    icon:
      stateType === "Error"
        ? IconName.ErrorSmallIllustration
        : stateType === "Empty"
        ? IconName.EmptySmallIllustration
        : IconName.SuccessSmallIllustration,
    height: SMALL_IMAGE_SIZE,
    width: SMALL_IMAGE_SIZE,
    altText: imageAltText,
    hostTheme: hostTheme,
  };

  const iconPropsFull: IconProps = {
    icon:
      stateType === "Error"
        ? IconName.ErrorIllustration
        : stateType === "Empty"
        ? IconName.EmptyIllustration
        : IconName.SuccessIllustration,
    height: LARGE_IMAGE_SIZE,
    width: LARGE_IMAGE_SIZE,
    altText: imageAltText,
    hostTheme: hostTheme,
  };

  const errorImage =
    stateViewType === "Full"
      ? getIcon(iconPropsFull).setHorizontalAlignment(Alignment.Center)
      : getIcon(iconPropsSmall).setHorizontalAlignment(Alignment.Center);
  const heading = new TextBlock(header)
    .setSize(FontSize.Medium)
    .setWeight(FontWeight.Bolder)
    .setHorizontalAlignment(Alignment.Center)
    .setSpacing(stateViewType === "Full" ? Spacing.Large : Spacing.Medium);
  const errorColumn = new Column([errorImage]);
  if (stateViewType !== "Full") {
    errorColumn.shrink();
  }

  return [new ColumnSet([errorColumn]).setHorizontalAlignment(Alignment.Center), heading];
};

export class StateView extends Container {
  private stateViewType: StateViewType;
  private hasDescription: boolean;
  private hasButton: boolean;

  constructor(
    stateViewType: StateViewType,
    header: string,
    imageAltText: string,
    stateType: StateType,
    hostTheme: HostTheme
  ) {
    super(getItems(stateViewType, header, imageAltText, stateType, hostTheme));
    this.stateViewType = stateViewType;
    if (stateViewType !== "Full") this.setStyle(ContainerStyle.Emphasis);
  }

  public withDescription(description: string): StateView {
    // Double-check to ensure we're not adding multiple descriptions
    if (!this.hasDescription) {
      const descText = new TextBlock(description)
        .setHorizontalAlignment(Alignment.Center)
        .enableWrap()
        .setSpacing(Spacing.Medium)
        .stretch();
      const descriptionColumn = new Column([descText]);
      if (this.stateViewType === "Full") {
        descriptionColumn.setVerticalAlignment(VerticalAlignment.Center);
      }
      this.items.splice(2, 0, new ColumnSet([descriptionColumn]));
      this.hasDescription = true;
    }
    return this;
  }

  public withButton(buttonProps: StateViewButtonProps): StateView {
    // Double-check to ensure we're not adding multiple buttons
    if (!this.hasButton) {
      this.items.push(
        new ActionSet([
          new ActionSubmit(buttonProps.actionID, buttonProps.title, null, buttonProps.altText),
        ]).setSpacing(this.stateViewType === "Full" ? Spacing.Large : Spacing.Medium)
      );
      this.hasButton = true;
    }
    return this;
  }
}
