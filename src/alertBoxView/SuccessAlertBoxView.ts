import { AlertBoxStateView } from "./AlertBoxStateView";
import { AlertIcon, AlertViewAction } from "./AlertBoxStateView.types";
import { SuccessAlertIcon } from "../assets";
import { ContainerStyle } from "../elements";

export class SuccessAlertBoxView extends AlertBoxStateView {
  constructor(
    message: string,
    icon?: AlertIcon,
    showDefaultIcon?: boolean,
    alertAction?: AlertViewAction[] | null | undefined,
    title?: string,
    showActionAtFooter?: boolean
  ) {
    super(
      ContainerStyle.Good,
      message,
      showDefaultIcon ? { iconName: SuccessAlertIcon } : icon,
      alertAction,
      title,
      showActionAtFooter
    );
  }
}
