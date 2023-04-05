/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export enum AlertType {
  Success = "Success",
  Failure = "Failure",
  Warning = "Warning",
}

export type AlertAction = {
  actionText: string;
  actionId: string;
  actionData?: any;
};

export type AlertConfirmation = {
  cancelText: string;
  cancelId: string;
  cancelData?: any;
  okText: string;
  okId: string;
  okData?: any;
};
