import { ActionStyle } from "../elements";

export type AlertViewAction = {
  actionText: string;
  actionId: string;
  actionData?: any;
  actionStyle?: ActionStyle;
};

export type AlertIcon = {
  iconName: string;
  size?: string;
};

export declare type AlertBoxIconSize = "small" | "medium";

export declare type AlertBoxStateType = "Error" | "Info" | "Success" | "Warning";
