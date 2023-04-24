import { AlertBoxStateView } from "./AlertBoxStateView";
import { AlertIcon, AlertViewAction } from "./AlertBoxStateView.types";
import { ErrorAlertIcon } from "../assets";
import { ContainerStyle } from "../elements";

export class ErrorAlertBoxView extends AlertBoxStateView {
  constructor(
    message: string,
    icon?: AlertIcon,
    showDefaultIcon?: boolean,
    alertAction?: AlertViewAction[] | null | undefined,
    title?: string,
    showActionAtFooter?: boolean
  ) {
    super(
      ContainerStyle.Attention,
      message,
      showDefaultIcon ? { iconName: ErrorAlertIcon } : icon,
      alertAction,
      title,
      showActionAtFooter
    );
  }
}
