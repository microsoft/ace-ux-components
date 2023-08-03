import { AlertBoxStateView } from "./AlertBoxStateView";
import { AlertBoxIconSize, AlertIcon, AlertViewAction } from "./AlertBoxStateView.types";
import { ContainerStyle } from "../elements";
import { HostTheme } from "@microsoft/sp-adaptive-card-extension-base";

export class SuccessAlertBoxView extends AlertBoxStateView {
  constructor(
    message: string,
    hostTheme: HostTheme,
    useDefaultIcon: boolean,
    iconURL?: string,
    iconSize?: AlertBoxIconSize,
    alertAction?: AlertViewAction[] | null | undefined,
    title?: string,
    showActionAtFooter?: boolean
  ) {
    super(
      ContainerStyle.Good,
      message,
      hostTheme,
      "Success",
      useDefaultIcon,
      iconURL ? iconURL : null,
      iconSize,
      alertAction,
      title,
      showActionAtFooter
    );
  }
}
