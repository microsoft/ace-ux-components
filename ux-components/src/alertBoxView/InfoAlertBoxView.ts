import { AlertBoxStateView } from "./AlertBoxStateView";
import { AlertBoxIconSize, AlertViewAction } from "./AlertBoxStateView.types";
import { HostTheme } from "@microsoft/sp-adaptive-card-extension-base";
import { ContainerStyle } from "../elements";

export class InfoAlertBoxView extends AlertBoxStateView {
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
      ContainerStyle.Accent,
      message,
      hostTheme,
      "Info",
      useDefaultIcon,
      iconURL ? iconURL : null,
      iconSize,
      alertAction,
      title,
      showActionAtFooter
    );
  }
}
