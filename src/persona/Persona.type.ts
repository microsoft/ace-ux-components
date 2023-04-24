/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export type PersonaParams = {
  profilePictureUrl?: string;
  name: string;
  hasSelfViewed?: boolean;
};

export type WorkStatus = {
  day?: string;
  displayIcon: string;
  displayText: string;
  altText?: string;
};

export type CalendarStatusType = "Day" | "Week";
