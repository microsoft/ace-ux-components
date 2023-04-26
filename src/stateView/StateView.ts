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
import { StateViewButtonProps, StateViewType } from "./StateView.types";

const getItems = (
  stateViewType: StateViewType,
  header: string,
  bigImage: string,
  smallImage: string,
  imageAltText: string
): BaseElement[] => {
  // Image template for Error View
  const errorImage = new Image(stateViewType === "Full" ? bigImage : smallImage, imageAltText)
    .setHorizontalAlignment(Alignment.Center)
    .setHeight(stateViewType === "Full" ? LARGE_IMAGE_SIZE : SMALL_IMAGE_SIZE)
    .setWidth(stateViewType === "Full" ? LARGE_IMAGE_SIZE : SMALL_IMAGE_SIZE);
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
    bigImage: string,
    smallImage: string,
    imageAltText: string
  ) {
    super(getItems(stateViewType, header, bigImage, smallImage, imageAltText));
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
