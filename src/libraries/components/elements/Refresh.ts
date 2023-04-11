/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// For more info: https://adaptivecards.io/explorer/Refresh.html

/// IMPORTANT: This is a stub because some ACE cards still attempt to use Refresh, though it won't do anything yet
/// When ACE upgrades to AC 1.4+, this file will need to be revisited and functionality should start working for the cards referencing this
export class Refresh {
  // Should implement "IRefresh" or something to that extent, when ACE upgrades to AC 1.4+
  public readonly action: any; // Should be "Action.Execute", when ACE upgrades to AC 1.4+
  public readonly userIDs: string[];

  constructor(action: {}, userIDs: string[]) {
    this.action = action;
    this.userIDs = userIDs;
  }
}
