/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {
  ActionSubmit,
  AssociatedInputs,
  BaseElement,
  Column,
  ColumnSet,
  Container,
  FontSize,
  FontWeight,
  InputToggle,
  Spacing,
  TextBlock,
  VerticalAlignment,
} from "../elements";
import { ManageCalendarData, ToggleData } from "./ToggleRow.types";

const getItems = (toggleData: ToggleData, manageCalendarData: ManageCalendarData, associatedInputs:AssociatedInputs=AssociatedInputs.Auto): BaseElement[] => {
  let warningTextBlock: TextBlock = new TextBlock("");
  if (manageCalendarData.currentValue === "true") {
    warningTextBlock = new TextBlock(toggleData?.warningMessage || "")
      .enableSubtle()
      .enableWrap()
      .setSize(FontSize.Small);
  }
  return [
    new ColumnSet([
      new Column([
        new TextBlock(toggleData.title).setSize(FontSize.Medium).setWeight(FontWeight.Bolder),
        new TextBlock(toggleData.description).enableSubtle().enableWrap().useMultiline(2),
        warningTextBlock,
      ]).setVerticalAlignment(VerticalAlignment.Top),
      new Column([new InputToggle(toggleData.title, "", manageCalendarData?.currentValue)])
        .setVerticalAlignment(VerticalAlignment.Top)
        .setAction(new ActionSubmit(toggleData.id, toggleData.title, manageCalendarData)
        .setAssociatedInputs(associatedInputs))
        .setWidth("auto"),
    ]).setSpacing(Spacing.Small),
  ];
};

export class ToggleRow extends Container {
  constructor(toggleData: ToggleData, manageCalendarData: ManageCalendarData, associatedInputs:AssociatedInputs=AssociatedInputs.Auto) {
    super(getItems(toggleData, manageCalendarData, associatedInputs));
    this.useSeparator();
    this.setMinHeight("70px");
    this.setVerticalAlignment(VerticalAlignment.Center);
    this.setSpacing(Spacing.Large);
  }
}
