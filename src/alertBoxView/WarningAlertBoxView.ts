import { AlertBoxStateView } from "./AlertBoxStateView";
import { AlertIcon, AlertViewAction } from "./AlertBoxStateView.types";
import { WarningIcon } from "../assets";
import { ContainerStyle } from "../elements";

export class WarningAlertBoxView extends AlertBoxStateView {
  constructor(
    message: string,
    icon?: AlertIcon,
    showDefaultIcon?: boolean,
    alertAction?: AlertViewAction[] | null | undefined,
    title?: string,
    showActionAtFooter?: boolean
  ) {
    super(
      ContainerStyle.Warning,
      message,
      showDefaultIcon ? { iconName: WarningIcon } : icon,
      alertAction,
      title,
      showActionAtFooter
    );
  }
}
