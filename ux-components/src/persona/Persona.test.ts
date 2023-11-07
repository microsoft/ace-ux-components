/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { HostTheme } from "../types";
import { ActionStyle, ActionSubmit, CalendarType, ColumnSet, FontColor, Image, TextBlock } from "../elements";
import { Persona } from "./Persona";
import { PersonaParams, WorkStatus } from "./Persona.type";
import { SuccessIcon_light } from "../assets";
const personaParams: PersonaParams = {
  profilePictureUrl: "https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg",
  name: "Sirisha Bollapalli",
};
const personaParamsEmptyImg: PersonaParams = {
  profilePictureUrl: "",
  name: "Varsha Rani Sharma",
};
const workLocationMockdata: WorkStatus[] = [
  {
    day: "Monday",
    displayIcon: "WFHIcon",
    displayText: "Monday",
  },
  {
    day: "Tuesday",
    displayIcon: "InOffice",
    displayText: "Tuesday",
  },
];
const mockActionData = new ActionSubmit("`${feedback?.PerspectiveId}`", "ViewDetailFeedback", {
  id: "VIEW_DETAIL_FEEDBACK",
  feedback: "feedback",
  PerspectiveId: "${feedback?.PerspectiveId}",
}).setStyle(ActionStyle.Default);

const testHostTheme: HostTheme = "light";

describe("Persona Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it("Should contain Person Image, Name", () => {
    const personaContainer: Persona = new Persona(personaParams);
    expect(((personaContainer.items[0] as ColumnSet).columns[0].items[0] as Image).url).toEqual(
      "https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg"
    );
    expect(((personaContainer.items[0] as ColumnSet).columns[1].items[0] as TextBlock).text).toEqual(
      "Sirisha Bollapalli"
    );
  });

  it("Should contain Person Image with initials, Name", () => {
    const personaContainer: Persona = new Persona(personaParamsEmptyImg);
    const imgUrl = ((personaContainer.items[0] as ColumnSet).columns[0].items[0] as Image).url;
    expect(imgUrl).toContain("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'");
    expect(imgUrl).toContain("VS");
    expect(((personaContainer.items[0] as ColumnSet).columns[1].items[0] as TextBlock).text).toEqual(
      "Varsha Rani Sharma"
    );
  });

  it("Should contain empty Person Image when name is empty", () => {
    const personaParamsEmptyImg: PersonaParams = {
      profilePictureUrl: "",
      name: "",
    };
    const personaContainer: Persona = new Persona(personaParamsEmptyImg);
    const imgUrl = ((personaContainer.items[0] as ColumnSet).columns[0].items[0] as Image).url;
    expect(imgUrl).toContain("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'");
    expect(imgUrl).toContain("%3E%3C/text%3E%3C/svg%3E");
    expect(((personaContainer.items[0] as ColumnSet).columns[1].items[0] as TextBlock).text).toEqual("");
  });

  it("Should contain Person Image, Name and Job Title", () => {
    const personaContainer: Persona = new Persona(personaParams).withJobTitle("Senior Software Engineer");
    expect(((personaContainer.items[0] as ColumnSet).columns[0].items[0] as Image).url).toEqual(
      "https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg"
    );
    const personaTree: TextBlock[] = (personaContainer.items[0] as ColumnSet).columns[1].items as TextBlock[];
    expect(personaTree[0].text).toEqual("Sirisha Bollapalli");
    expect(personaTree[1].text).toEqual("Senior Software Engineer");
  });

  it("Should contain Status Icon and Status Text", () => {
    const personaContainer: Persona = new Persona(personaParams).withStatusText(
      SuccessIcon_light,
      "Provided May 16,2021"
    );
    expect(
      (((personaContainer.items[0] as ColumnSet).columns[1].items[1] as ColumnSet).columns[1].items[0] as TextBlock)
        .text
    ).toEqual("Provided May 16,2021");
  });

  it("Should display Status Text in input Status text color", () => {
    const personaContainer: Persona = new Persona(personaParams).withStatusText(
      SuccessIcon_light,
      "Provided May 16,2021",
      FontColor.Good
    );
    expect(
      (((personaContainer.items[0] as ColumnSet).columns[1].items[1] as ColumnSet).columns[1].items[0] as TextBlock)
        .color
    ).toEqual(FontColor.Good);
  });

  it("Should display day working status", () => {
    const personaContainer: Persona = new Persona(personaParams).withWorkStatus(workLocationMockdata, CalendarType.Day);
    expect(
      (((personaContainer.items[0] as ColumnSet).columns[1].items[1] as ColumnSet).columns[0].items[0] as Image).url
    ).toEqual("WFHIcon");
    expect(
      (((personaContainer.items[0] as ColumnSet).columns[1].items[1] as ColumnSet).columns[1].items[0] as TextBlock)
        .text
    ).toEqual("Monday");
  });

  it("Should display week working status", () => {
    const personaContainer: Persona = new Persona(personaParams).withWorkStatus(
      workLocationMockdata,
      CalendarType.Week
    );
    expect(
      (((personaContainer.items[0] as ColumnSet).columns[1].items[1] as ColumnSet).columns[0].items[0] as TextBlock)
        .text
    ).toEqual("Monday");
    expect(
      (((personaContainer.items[0] as ColumnSet).columns[1].items[1] as ColumnSet).columns[0].items[1] as Image).url
    ).toEqual("WFHIcon");
  });

  it("Should not display week working status", () => {
    const personaContainer: Persona = new Persona(personaParams).withWorkStatus(workLocationMockdata, null);
    expect(personaContainer).toBeUndefined();
  });

  it("Should display the Right Action Icon", () => {
    const personaContainer: Persona = new Persona(personaParams).withItemActionIcon(
      "icon",
      "Select Icon",
      mockActionData
    );
    expect((personaContainer.items[0] as ColumnSet).columns[2]).toBeDefined();
    expect(((personaContainer.items[0] as ColumnSet).columns[2].items[0] as Image).url).toEqual("icon");
    expect((personaContainer.items[0] as ColumnSet).columns[2].selectAction.type).toEqual("Action.Submit");
  });

  it("Should display the Chevron Icon", () => {
    const personaContainer: Persona = new Persona(personaParams).withChevron(testHostTheme);

    const chevronImage: Image = (personaContainer.items[0] as ColumnSet).columns[2].items[0] as Image;
    expect(chevronImage.type).toEqual("Image");
    expect(chevronImage.altText).toEqual("Chevron right");
  });

  it("Should load withActions", () => {
    const personaContainer: Persona = new Persona(personaParams).withActions([]);
    expect(personaContainer).toBeDefined();
    expect((personaContainer.items[1] as ColumnSet).columns[0].items[0].type).toEqual("ActionSet");
  });

  it("Should load withRightAlignedAction", () => {
    const personaContainer: Persona = new Persona(personaParams).withRightAlignedAction(mockActionData);
    expect(personaContainer).toBeDefined();
    expect((personaContainer.items[1] as ColumnSet).columns[1].items[0].type).toEqual("ActionSet");
  });

  it("Should load withLeftAlignedAction", () => {
    const personaContainer: Persona = new Persona(personaParams).withLeftAlignedAction(mockActionData);
    expect(personaContainer).toBeDefined();
    expect((personaContainer.items[1] as ColumnSet).columns[0].items[0].type).toEqual("ActionSet");
  });

  it("Should load when profile picture is not available", () => {
    personaParams.profilePictureUrl = "";
    const personaContainer: Persona = new Persona(personaParams).withLeftAlignedAction(mockActionData);
    expect(personaContainer).toBeDefined();
  });
});
