/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseAdaptiveCardView, ISubmitActionArguments } from "@microsoft/sp-adaptive-card-extension-base";
import { IBaseComponent } from "../baseComponent";
import { ComplexComponent } from "../baseComponent/ComplexComponent";
import { FileAttachment } from "../fileAttachment";
import { List, SectionList } from "../list";
import { ListActionID } from "../list/types";
import { OPEN_PICKER_VIEW, Picker } from "../picker";
import { ComplexComponentType, ComponentProps, FileAttachmentProps } from "../types";

export abstract class BaseViewWithComponents<TProps, TState, TData> extends BaseAdaptiveCardView<
  TProps,
  TState,
  TData
> {
  private callbacks: Record<string, (item?: unknown) => void> = {};
  private components: Record<string, ComplexComponent> = {};
  private registeredComponentsLegacy: Record<string, IBaseComponent> = {};

  public onAction(action: ISubmitActionArguments): void {
    const { data } = action;
    if (this.registeredComponentsLegacy[data.id]) {
      this.registeredComponentsLegacy[data.id].action(this.quickViewNavigator);
    }

    if (data.id.includes(ListActionID.NextPage)) {
      const list: List = this.components[data.componentID] as List;
      list.nextPage();
      this.setState({});
    } else if (data.id.includes(ListActionID.PreviousPage)) {
      const list: List = this.components[data.componentID] as List;
      list.previousPage();
      this.setState({});
    } else if (data.id.includes(ListActionID.RadioAction)) {
      // Section to handle the radio button actions.
      const list: List = this.components[data.componentID] as List;
      list.setRadioValue(data.selectedItemIndex);
      this.setState({});
    } else if (data.id.includes(OPEN_PICKER_VIEW)) {
      const picker: Picker<TState> = this.components[data.componentID] as Picker<TState>;
      picker.openView(this.quickViewNavigator, this.callbacks[data.componentID]);
    }
  }

  protected registerComponent(component: ComplexComponent, callback?: () => void): ComplexComponent {
    const registrationID: string = component.getComponentID();

    if (callback) {
      this.callbacks[registrationID] = callback;
    }

    if (component instanceof SectionList) {
      for (let index = 0; index < component.items.length; index++) {
        const item = component.items[index];

        if (item instanceof List) {
          if (this.components[registrationID]) {
            const registeredItem: List = this.components[registrationID].items[index] as List;
            this.applyListUpdates(item, registeredItem);
          }

          this.components[item.getComponentID()] = item;
        }
      }
    } else if (component instanceof List && this.components[registrationID]) {
      const registeredList: List = this.components[registrationID] as List;
      this.applyListUpdates(component, registeredList);
    }

    this.components[registrationID] = component;
    return this.components[registrationID];
  }

  private applyListUpdates(list: List, registeredList: List): void {
    // Passes the selected radio item index to the List after its rendered to update the value.
    if (list.getRadioValue() !== registeredList.getRadioValue()) {
      list.setRadioValue(registeredList.getRadioValue());
    }
    if (list.getStartIndex() !== registeredList.getStartIndex()) {
      list.setStartIndex(registeredList.getStartIndex());
      list.resetItems();
    }
  }

  protected instanciateComponent(componentProps: ComponentProps, componentType: ComplexComponentType): IBaseComponent {
    if (this.registeredComponentsLegacy[componentProps.id]) {
      this.registeredComponentsLegacy[componentProps.id].updateProps(componentProps);
    }

    const component = this.getComponent(componentType, componentProps);
    this.registerComponentLegacy(component);

    return component;
  }

  private getComponent(componentType: ComplexComponentType, props: ComponentProps): IBaseComponent {
    switch (componentType) {
      case ComplexComponentType.FileAttachment:
        return new FileAttachment(props as FileAttachmentProps, this.quickViewNavigator);
      default:
        throw new Error("Component type doesn't exist.");
    }
  }

  private registerComponentLegacy(component: IBaseComponent): void {
    this.registeredComponentsLegacy[component.actionId] = component;
  }
}
