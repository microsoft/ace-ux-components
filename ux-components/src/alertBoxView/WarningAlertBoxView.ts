import { AlertBoxStateView } from "./AlertBoxStateView";
import { AlertBoxIconSize, AlertIcon, AlertViewAction } from "./AlertBoxStateView.types";
import { ContainerStyle } from "../elements";
import { HostTheme } from "../types";

export class WarningAlertBoxView extends AlertBoxStateView {
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
      ContainerStyle.Warning,
      message,
      hostTheme,
      "Warning",
      useDefaultIcon,
      iconURL ? iconURL : null,
      iconSize,
      alertAction,
      title,
      showActionAtFooter
    );
  }
}
