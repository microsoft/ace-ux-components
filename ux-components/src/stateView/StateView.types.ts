/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export declare type StateViewType = "Full" | "Section";

export declare type StateType = "Empty" | "Error" | "Success";

export type StateViewButtonProps = {
  actionID: string;
  title: string;
  altText: string;
};
