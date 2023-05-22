/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ISelectMediaAction, ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { IOpenUrlAction, IShowCardAction, ISubmitAction } from "adaptivecards/lib/schema";
import { BaseElement } from "./elements/BaseElement";
import { Refresh } from "./elements/Refresh";

export function createTemplate(
  body: BaseElement[],
  actions: (ISubmitAction | IOpenUrlAction | IShowCardAction | ISelectMediaAction)[] = [],
  refresh: Refresh = null,
  version?: string
): ISPFxAdaptiveCard {
  return {
    schema: "http=//adaptivecards.io/schemas/adaptive-card.json",
    type: "AdaptiveCard",
    version: version || "1.5",
    body,
    actions,
    refresh, // NOTE: Does nothing until ACE upgrades to AC 1.4+, but we want to pre-enable this in the schema for ACE component users
  };
}
