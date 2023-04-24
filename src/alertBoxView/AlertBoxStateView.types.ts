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
