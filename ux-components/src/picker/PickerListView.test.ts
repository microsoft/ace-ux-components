/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Container } from "../elements";
import { Header } from "../header";
import { List, SectionList } from "../list";
import { ListActionID } from "../list/types";
import { SearchBar } from "../search";
import { SectionListData } from "../types";
import { ListOptions, SectionOptions } from "./PickerHelpers";
import { PickerListView, ViewProps } from "./PickerListView";

jest.mock("@microsoft/sp-adaptive-card-extension-base", () => ({
  BaseAdaptiveCardView: {
    apply: jest.fn(),
    call: jest.fn(),
    prototype: {
      context: {
        deviceContext: "WebView",
      },
      quickViewNavigator: {
        pop: jest.fn(),
      },
      setState: jest.fn(),
    },
  },
}));

type MockState = {
  listData: Record<string, unknown>[];
  selectedItem: Record<string, unknown>;
};

const data: Array<{ name: string }> = [{ name: "John Doe" }, { name: "Joe Schmoe" }];
const componentID: string = "PickerList";

const itemSelectionCallback = jest.fn();
function getProps(
  withFilter: boolean,
  listOptions?: ListOptions,
  sectionListData?: SectionListData[],
  sectionListOptions?: SectionOptions
): ViewProps {
  return {
    headerLabel: "test header label",
    itemSelectionCallback,
    listComponentID: componentID,
    listData: data,
    listKeys: { titleKey: "name" },
    listOptions: listOptions ?? { withRadio: false },
    placeholder: "test placeholder",
    sectionListData,
    sectionListOptions,
    selectedIndex: -1,
    withFilter,
  };
}

describe("Picker list view", () => {
  let view: PickerListView<MockState>;
  describe("With List component", () => {
    beforeEach(() => {
      const viewProps: ViewProps = getProps(true);
      view = new PickerListView<MockState>(viewProps);
    });

    it("Should render properly without filtering", () => {
      const viewProps: ViewProps = getProps(false);
      view = new PickerListView<MockState>(viewProps);

      const template = view.template;

      expect(template.body[0] instanceof Header).toBeTruthy();
      expect(template.body[1]).toBeNull();
      expect(template.body[2] instanceof Container).toBeTruthy();
      expect(template.body[3] instanceof List).toBeTruthy();
    });

    it("Should render a filtered view", () => {
      view.onAction({ type: "Submit", data: { id: "onFilter", listFilter: "m" } });
      const template = view.template;

      expect(template.body[1]).not.toBeNull();
      expect(template.body[1] instanceof SearchBar).toBeTruthy();
    });

    it("Should update an already existing list", () => {
      let template = view.template;

      expect((view["listsDictionary"][componentID] as List).getRadioValue()).toBeUndefined();
      expect((view["listsDictionary"][componentID] as List).getStartIndex()).toEqual(0);

      (view["listsDictionary"][componentID] as List).setRadioValue(1);
      (view["listsDictionary"][componentID] as List).setStartIndex(1);

      template = view.template;

      expect((view["listsDictionary"][componentID] as List).getRadioValue()).toEqual(1);
      expect((view["listsDictionary"][componentID] as List).getStartIndex()).toEqual(1);
    });

    it("Should trigger the item selection action", () => {
      view.template;
      view.onAction({
        type: "Submit",
        data: { id: ListActionID.SelectItem, componentID, selectedItemIndex: 1, selectedItem: { name: "Joe Schmoe" } },
      });

      expect(view.quickViewNavigator.pop).toHaveBeenCalled();
      expect(itemSelectionCallback).toHaveBeenCalled();
    });

    it("Should cancel the filtering", () => {
      view.onAction({ type: "Submit", data: { id: "cancelFilter" } });

      expect(view["listFilter"]).toEqual("");
      expect(view.setState).toHaveBeenCalledWith({});
    });

    it("Should trigger list pagination (next)", () => {
      view.template;
      view.onAction({ type: "Submit", data: { id: ListActionID.NextPage, componentID } });

      expect(view.setState).toHaveBeenCalledWith({});
    });

    it("Should trigger list pagination (previous)", () => {
      view.template;
      view.onAction({ type: "Submit", data: { id: ListActionID.PreviousPage, componentID } });

      expect(view.setState).toHaveBeenCalledWith({});
    });

    it("Should trigger the radio action", () => {
      view.template;
      view.onAction({ type: "Submit", data: { id: ListActionID.RadioAction, componentID, selectedItemIndex: 1 } });

      expect(view.setState).toHaveBeenCalledWith({});
    });

    it("Should trigger the interactive icon action", () => {
      const actionCallback = jest.fn();
      const viewProps: ViewProps = getProps(true, {
        interactiveIcon: { actionCallback, iconValues: { iconAltText: "testIconAltText", iconUrl: "testIconUrl" } },
        withRadio: false,
      });
      view = new PickerListView<MockState>(viewProps);

      view.onAction({
        type: "Submit",
        data: { id: ListActionID.InteractiveIconAction, selectedItem: { name: "Joe Schmoe" } },
      });

      expect(actionCallback).toHaveBeenCalled();
    });

    it("Should trigger the people list action", () => {
      const actionCallback = jest.fn();
      const viewProps: ViewProps = getProps(true, {
        peopleListAction: {
          actionCallback,
          title: "testAction",
        },
        withRadio: false,
      });
      view = new PickerListView<MockState>(viewProps);

      view.onAction({
        type: "Submit",
        data: { id: ListActionID.PeopleListAction, selectedItem: { name: "Joe Schmoe" } },
      });

      expect(actionCallback).toHaveBeenCalled();
    });

    it("Should trigger the toggle action", () => {
      const actionCallback = jest.fn();
      const viewProps: ViewProps = getProps(true, {
        toggle: {
          actionCallback,
          toggleKey: "someKey",
        },
        withRadio: false,
      });
      view = new PickerListView<MockState>(viewProps);

      view.onAction({
        type: "Submit",
        data: { id: ListActionID.ToggleAction, currentToggledItem: { name: "Joe Schmoe" } },
      });

      expect(actionCallback).toHaveBeenCalled();
    });
  });

  describe("With SectionList component", () => {
    beforeEach(() => {
      const viewProps: ViewProps = getProps(
        true,
        { withRadio: false },
        [
          { data, listKeys: { titleKey: "name" }, sectionName: "People 1" },
          { data, listKeys: { titleKey: "name" }, sectionName: "People 2" },
        ],
        { withExpansion: true }
      );

      view = new PickerListView<MockState>(viewProps);
    });

    it("Should render properly", () => {
      const template = view.template;
      expect(template.body[3] instanceof SectionList).toBeTruthy();
    });

    it("Should render with a filtered section list", () => {
      view.onAction({ type: "Submit", data: { id: "onFilter", listFilter: "m" } });
      const template = view.template;

      expect(template.body[3] instanceof SectionList).toBeTruthy();
    });

    it("Should update an already existing section list", () => {
      let template = view.template;

      expect(((view["listsDictionary"][componentID] as SectionList).items[1] as List).getRadioValue()).toBeUndefined();
      expect(((view["listsDictionary"][componentID] as SectionList).items[1] as List).getStartIndex()).toEqual(0);

      ((view["listsDictionary"][componentID] as SectionList).items[1] as List).setRadioValue(1);
      ((view["listsDictionary"][componentID] as SectionList).items[1] as List).setStartIndex(1);

      template = view.template;

      expect(((view["listsDictionary"][componentID] as SectionList).items[1] as List).getRadioValue()).toEqual(1);
      expect(((view["listsDictionary"][componentID] as SectionList).items[1] as List).getStartIndex()).toEqual(1);
    });

    it("Should trigger the section action", () => {
      const actionCallback = jest.fn();
      const viewProps: ViewProps = getProps(
        true,
        undefined,
        [
          { data, listKeys: { titleKey: "name" }, sectionName: "People 1" },
          { data, listKeys: { titleKey: "name" }, sectionName: "People 2" },
        ],
        {
          actions: {
            actionCallback,
            labels: ["Action 1", "Action 2"],
          },
          withExpansion: true,
        }
      );
      view = new PickerListView<MockState>(viewProps);

      view.onAction({ type: "Submit", data: { id: ListActionID.SectionAction, sectionIndex: 0 } });

      expect(actionCallback).toHaveBeenCalled();
    });

    it("Should trigger the section icon action", () => {
      const actionCallback = jest.fn();
      const viewProps: ViewProps = getProps(
        true,
        undefined,
        [
          { data, listKeys: { titleKey: "name" }, sectionName: "People 1" },
          { data, listKeys: { titleKey: "name" }, sectionName: "People 2" },
        ],
        {
          iconActions: {
            actionCallback,
            iconAltText: ["altText1", "altText2"],
            iconUrls: ["icon1", "icon2"],
          },
          withExpansion: true,
        }
      );
      view = new PickerListView<MockState>(viewProps);

      view.onAction({ type: "Submit", data: { id: ListActionID.SectionIconAction, sectionIndex: 0 } });

      expect(actionCallback).toHaveBeenCalled();
    });
  });
});
