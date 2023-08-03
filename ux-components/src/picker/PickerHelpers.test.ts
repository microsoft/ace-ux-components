/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { HostTheme } from "@microsoft/sp-adaptive-card-extension-base";
import { List, SectionList } from "../list";
import { NewListType } from "../types";
import { ListOptions, PickerHelpers, SectionOptions } from "./PickerHelpers";

const testHostTheme: HostTheme = "light";

describe("Picker helpers", () => {
  let helpers: PickerHelpers;
  beforeEach(() => {
    helpers = PickerHelpers.getInstance();
  });

  it("Should get apply all list options", () => {
    const list: List = new List(
      "testComponentID",
      NewListType.BasicList,
      [{ test: "something" }],
      {
        titleKey: "test",
      },
      testHostTheme
    );

    const spyWithBodyIcon = jest.spyOn(list, "withBodyIcon");
    const spyWithCaptionIcon = jest.spyOn(list, "withCaptionIcon");
    const spyWithChevron = jest.spyOn(list, "withChevron");
    const spyWithInteractiveIcon = jest.spyOn(list, "withInteractiveIcon");
    const spyWithLeftAccessoryIcon = jest.spyOn(list, "withLeftAccessoryIcon");
    const spyWithPeopleListAction = jest.spyOn(list, "withPeopleListAction");
    const spyWithProfilePicture = jest.spyOn(list, "withProfilePicture");
    const spyWithTitleIcon = jest.spyOn(list, "withTitleIcon");
    const spyWithToggle = jest.spyOn(list, "withToggle");
    const spyWithRadioButton = jest.spyOn(list, "withRadioButton");

    const listOptions: ListOptions = {
      bodyIcon: { iconAltText: "bodyIconAltText", iconUrl: "bodyIcon" },
      captionIcon: { iconAltText: "captionIconAltText", iconUrl: "captionIcon" },
      chevron: { actionID: "chevronActionID" },
      interactiveIcon: {
        actionCallback: jest.fn(),
        iconValues: { iconAltText: "interactiveIconAltText", iconUrl: "interactiveIcon" },
      },
      leftAccessoryIcon: "leftAccessoryIcon",
      peopleListAction: { actionCallback: jest.fn(), title: "actionTitle" },
      profilePicture: "pictureUrl",
      titleIcon: { iconAltText: "bodyAltText", iconUrl: "bodyIcon" },
      toggle: { actionCallback: jest.fn(), toggleKey: "toggleKey" },
      withRadio: true,
    };

    helpers.applyListOptions(list, listOptions);

    expect(spyWithBodyIcon).toHaveBeenCalled();
    expect(spyWithCaptionIcon).toHaveBeenCalled();
    expect(spyWithChevron).toHaveBeenCalled();
    expect(spyWithInteractiveIcon).toHaveBeenCalled();
    expect(spyWithLeftAccessoryIcon).toHaveBeenCalled();
    expect(spyWithPeopleListAction).toHaveBeenCalled();
    expect(spyWithProfilePicture).toHaveBeenCalled();
    expect(spyWithTitleIcon).toHaveBeenCalled();
    expect(spyWithToggle).toHaveBeenCalled();
    expect(spyWithRadioButton).toHaveBeenCalled();
  });

  it("Should get always apply selectable items option in the list", () => {
    const list: List = new List(
      "testComponentID",
      NewListType.BasicList,
      [{ test: "something" }],
      {
        titleKey: "test",
      },
      testHostTheme
    );
    const spyWithSelectableItems = jest.spyOn(list, "withSelectableItems");
    const listOptions: ListOptions = {
      withRadio: false,
    };

    helpers.applyListOptions(list, listOptions);

    expect(spyWithSelectableItems).toHaveBeenCalled();
  });

  it("Should apply all section list options", () => {
    const sectionList: SectionList = new SectionList(
      "testComponentID",
      NewListType.BasicList,
      [
        {
          data: [{ test: "something" }],
          listKeys: { titleKey: "test" },
          sectionName: "testSection1",
        },
      ],
      testHostTheme
    );
    const spyWithSectionAction = jest.spyOn(sectionList, "withSectionAction");
    const spyWithSectionIcon = jest.spyOn(sectionList, "withSectionIcon");
    const spyWithSectionIconAction = jest.spyOn(sectionList, "withSectionIconAction");
    const spyWithSectionExpansion = jest.spyOn(sectionList, "withSectionExpansion");

    const listOptions: ListOptions = {
      withRadio: false,
    };
    const sectionListOptions: SectionOptions = {
      actions: { actionCallback: jest.fn(), labels: ["Action 1"] },
      icon: { iconAltText: "iconAltText", iconUrl: "iconUrl" },
      iconActions: { actionCallback: jest.fn(), iconUrls: ["iconUrl1"], iconAltText: ["iconAltText1"] },
      withExpansion: true,
    };

    helpers.applySectionListOptions(sectionList, sectionListOptions, listOptions);

    expect(spyWithSectionAction).toHaveBeenCalled();
    expect(spyWithSectionIcon).toHaveBeenCalled();
    expect(spyWithSectionIconAction).toHaveBeenCalled();
    expect(spyWithSectionExpansion).toHaveBeenCalled();
  });
});
