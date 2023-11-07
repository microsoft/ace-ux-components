/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { getIcon } from "../getIcon";
import {
  ActionSet,
  Alignment,
  BaseElement,
  CalendarType,
  Column,
  ColumnSet,
  Container,
  FontColor,
  FontSize,
  FontWeight,
  Image,
  ImageSize,
  ImageStyle,
  Spacing,
  TextBlock,
  VerticalAlignment,
} from "../elements";
import { BaseActionElement } from "../elements/BaseActionElement";
import { CHEVRON_RIGHT, EMPLOYEE_ALT_TEXT, LOCATION_STATUS_ICON, STATUS_ICON } from "./constants";
import { CalendarStatusType, PersonaParams, WorkStatus } from "./Persona.type";
import { IconName } from "../types";
import { HostTheme } from "../types";

function createInitialsImage(name: string) {
  const namesArray = name?.split(" ");
  const initials = namesArray?.[0][0]?.toUpperCase() + namesArray?.[namesArray.length - 1][0]?.toUpperCase() || "";
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Ccircle cx='100' cy='100' r='100' style='fill:rgb(232,235,250);'/%3E%3Ctext x='50%' y='50%' dx='0em' dy='0.3em' font-size='70' font-family='Segoe UI,"Segoe UI Web (West European)",-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif' text-anchor='middle' fill='rgb(91,95,199)'%3E${initials}%3C/text%3E%3C/svg%3E`;
}

function personaTemplate(params: PersonaParams): BaseElement[] {
  const imageUrl = params.profilePictureUrl ? params.profilePictureUrl : createInitialsImage(params.name);
  return [
    new ColumnSet([
      new Column([
        new Image(imageUrl, `${EMPLOYEE_ALT_TEXT}${params.name}`)
          .setHorizontalAlignment(Alignment.Center)
          .setStyle(ImageStyle.Person)
          .setWidth("50px")
          .setHeight("50px"),
      ]).setWidth("60px"),
      new Column([
        new TextBlock(params.name)
          .enableWrap()
          .setWeight(FontWeight.Bolder)
          .setSize(FontSize.Medium)
          .setColor(params.hasSelfViewed ? FontColor.Accent : FontColor.Default),
      ]).setVerticalAlignment(VerticalAlignment.Center),
    ]).setSpacing(Spacing.Medium),
  ];
}

export class Persona extends Container {
  constructor(personaParams: PersonaParams) {
    super(personaTemplate(personaParams));
  }

  public withLeftAlignedAction(actionElement: BaseActionElement): Persona {
    const colSet = new ColumnSet([new Column([new ActionSet([actionElement])]), new Column([new TextBlock("")])]);
    this.items.push(colSet);
    return this;
  }

  public withRightAlignedAction(actionElement: BaseActionElement): Persona {
    const colSet = new ColumnSet([new Column([new TextBlock("")]), new Column([new ActionSet([actionElement])])]);
    this.items.push(colSet);
    return this;
  }

  public withActions(actionElements: BaseActionElement[]): Persona {
    const colSet = new ColumnSet([new Column([new ActionSet([...actionElements])])]);
    this.items.push(colSet);
    return this;
  }

  public withChevron(hostTheme: HostTheme): Persona {
    const chevron = new Column([
      getIcon({
        icon: IconName.ChevronRightDisabled,
        hostTheme: hostTheme,
        height: "20px",
        width: "20px",
        altText: CHEVRON_RIGHT,
      }),
    ]).shrink();
    (this.items[0] as ColumnSet).columns.push(chevron);
    return this;
  }

  public withStatusText(statusIconImageUrl?: string, statusText?: string, statusTextColor?: FontColor): Persona {
    let cs: ColumnSet = new ColumnSet([
      new Column([new Image(statusIconImageUrl, STATUS_ICON)]).setWidth("20px"),
      new Column([
        new TextBlock(statusText)
          .setHorizontalAlignment(Alignment.Left)
          .setColor(statusTextColor)
          .enableWrap()
          .setWeight(FontWeight.Lighter)
          .setSize(FontSize.Small),
      ]).setSpacing(Spacing.Small),
    ]);

    (this.items[0] as ColumnSet).columns[1].items.push(cs);
    return this;
  }

  /**
   * @desc withJobTitle() will add job title of user to the persona component
   * @param jobTitle the job title string to be displayed.
   * @returns Itself.
   */
  public withJobTitle(jobTitle: string): Persona {
    const jobTitleTextBlock: BaseElement = new TextBlock(jobTitle)
      .enableWrap()
      .setWeight(FontWeight.Lighter)
      .setSize(FontSize.Small)
      .setSpacing(Spacing.None);
    (this.items[0] as ColumnSet).columns[1].items.push(jobTitleTextBlock);
    return this;
  }

  /**
   * @desc withWorkStatus will help add the users working status for the day or week
   * @params data of type WorkStatus[] it contains information about users week and working location
   *  and viewType can be of CalendarStausType for Day or week view
   * @returns Itself.
   */
  public withWorkStatus(data: WorkStatus[], viewType: CalendarStatusType): Persona {
    switch (viewType) {
      case CalendarType.Day:
        return this.withDayStatus(data[0].displayIcon, data[0].displayText);
      case CalendarType.Week:
        return this.withWeekStatus(data);
      default:
        break;
    }
  }

  /**
   * @desc withItemActionIcon will help add the an actionable or non actionable
   * icon to the right end
   * of each item loading via persona compoent
   * @params icon of type string, here you can pass the icon value and
   * actionElement provides what action
   * to perform when user clicks the icon
   * @returns Itself.
   */
  public withItemActionIcon(icon: string, altText: string, actionElement?: BaseActionElement): Persona {
    const column = new Column([
      new Image(icon, altText)
        .setSize(ImageSize.Small)
        .setHorizontalAlignment(Alignment.Right)
        .setHeight("18px")
        .setWidth("18px"),
    ])
      .shrink()
      .setVerticalAlignment(VerticalAlignment.Center)
      .setAction(actionElement) as Column;
    (this.items[0] as ColumnSet).columns.push(column);
    return this;
  }

  /**
   * @desc withDayStatus will help add user's day working location status
   * @params icon of type string, here you can pass the icon value and
   * statusText provides status infromation
   * @returns Itself.
   */
  private withDayStatus(icon: string, statusText: string): Persona {
    const template = new ColumnSet([
      new Column([new Image(icon, statusText + LOCATION_STATUS_ICON).setWidth("18px")]).shrink(),
      new Column([
        new TextBlock(statusText)
          .setHorizontalAlignment(Alignment.Left)
          .setColor(FontColor.Default)
          .enableWrap()
          .setWeight(FontWeight.Lighter)
          .setSize(FontSize.Small)
          .setSpacing(Spacing.Medium),
      ]).setVerticalAlignment(VerticalAlignment.Bottom),
    ]);
    (this.items[0] as ColumnSet).columns[1].items.push(template);
    return this;
  }

  /**
   * @desc withWeekStatus will help add user's week working location status
   * @params data of type WorkStatus[] it contains information about users week
   *  working location
   * @returns Itself.
   */
  private withWeekStatus(data: WorkStatus[]): Persona {
    const weekTemplate = new ColumnSet([]);
    data.forEach((weekData: WorkStatus, index) => {
      let template = new Column([
        new TextBlock(weekData.displayText)
          .setHorizontalAlignment(Alignment.Center)
          .setColor(FontColor.Default)
          .enableWrap()
          .setWeight(FontWeight.Lighter)
          .setSize(FontSize.Small),
        new Image(weekData.displayIcon, weekData.altText ? weekData.altText : weekData.day + LOCATION_STATUS_ICON)
          .setHorizontalAlignment(Alignment.Center)
          .setWidth("18px")
          .setHeight("18px")
          .setSpacing(Spacing.None),
      ])
        .setSpacing(Spacing.Medium)
        .setVerticalAlignment(VerticalAlignment.Center)
        .shrink();

      weekTemplate.columns.push(template);
    });
    (this.items[0] as ColumnSet).columns[1].items.push(weekTemplate);
    return this;
  }
}
