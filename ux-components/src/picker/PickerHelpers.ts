/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { List, SectionList } from "../list";
import { ListActionID } from "../list/types";

type IconValues = {
  iconUrl: string;
  iconAltText: string;
};

export type ListOptions = {
  bodyIcon?: IconValues;
  captionIcon?: IconValues;
  chevron?: { actionID: string; values?: string[] };
  interactiveIcon?: { actionCallback: (item: unknown) => void; iconValues: IconValues };
  leftAccessoryIcon?: string;
  peopleListAction?: { actionCallback: (item: unknown) => void; title: string };
  profilePicture?: string;
  titleIcon?: IconValues;
  toggle?: { actionCallback: (item: unknown) => void; toggleKey: string };
  withRadio: boolean;
};

export type SectionOptions = {
  actions?: { actionCallback: (sectionIndex: number) => void; labels: string[] };
  icon?: IconValues;
  iconActions?: { actionCallback: (sectionIndex: number) => void; iconUrls: string[]; iconAltText: string[] };
  withExpansion: boolean;
};

export class PickerHelpers {
  private static instance: PickerHelpers;

  private constructor() {}

  public static getInstance(): PickerHelpers {
    if (!this.instance) {
      this.instance = new PickerHelpers();
    }

    return this.instance;
  }

  public applyListOptions(list: List, listOptions: ListOptions): void {
    const {
      bodyIcon,
      captionIcon,
      chevron,
      interactiveIcon,
      leftAccessoryIcon,
      peopleListAction,
      profilePicture,
      titleIcon,
      toggle,
      withRadio,
    } = listOptions;

    if (bodyIcon) {
      list.withBodyIcon(bodyIcon.iconUrl, bodyIcon.iconAltText);
    }

    if (captionIcon) {
      list.withCaptionIcon(captionIcon.iconUrl, captionIcon.iconAltText);
    }

    if (chevron) {
      list.withChevron(ListActionID.SelectItem, chevron.values);
    } else {
      list.withSelectableItems(ListActionID.SelectItem);
    }

    if (interactiveIcon) {
      list.withInteractiveIcon(
        interactiveIcon.iconValues.iconUrl,
        ListActionID.InteractiveIconAction,
        interactiveIcon.iconValues.iconAltText
      );
    }

    if (leftAccessoryIcon) {
      list.withLeftAccessoryIcon(leftAccessoryIcon);
    }

    if (peopleListAction) {
      list.withPeopleListAction(ListActionID.PeopleListAction, peopleListAction.title);
    }

    if (profilePicture) {
      list.withProfilePicture(profilePicture);
    }

    if (titleIcon) {
      list.withTitleIcon(titleIcon.iconUrl, titleIcon.iconAltText);
    }

    if (toggle) {
      list.withToggle(ListActionID.ToggleAction, toggle.toggleKey);
    }

    if (withRadio) {
      list.withRadioButton();
    }
  }

  public applySectionListOptions(
    sectionList: SectionList,
    sectionOptions: SectionOptions,
    listOptions: ListOptions
  ): void {
    if (sectionOptions) {
      const { actions, icon, iconActions, withExpansion } = sectionOptions;

      if (actions) {
        sectionList.withSectionAction(ListActionID.SectionAction, actions.labels);
      }

      if (icon) {
        sectionList.withSectionIcon(icon.iconUrl, icon.iconAltText);
      }

      if (iconActions) {
        sectionList.withSectionIconAction(
          ListActionID.SectionIconAction,
          iconActions.iconUrls,
          iconActions.iconAltText
        );
      }

      if (withExpansion) {
        sectionList.withSectionExpansion();
      }
    }

    for (const item of sectionList.items) {
      if (item instanceof List) {
        this.applyListOptions(item, listOptions);
      }
    }
  }
}
