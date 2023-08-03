import { AlertBoxStateView } from "./AlertBoxStateView";
import { AlertBoxIconSize, AlertViewAction } from "./AlertBoxStateView.types";
import { HostTheme } from "@microsoft/sp-adaptive-card-extension-base";
import { ContainerStyle } from "../elements";

export class ErrorAlertBoxView extends AlertBoxStateView {
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
      ContainerStyle.Attention,
      message,
      hostTheme,
      "Error",
      useDefaultIcon,
      iconURL ? iconURL : null,
      iconSize,
      alertAction,
      title,
      showActionAtFooter
    );
  }
}
