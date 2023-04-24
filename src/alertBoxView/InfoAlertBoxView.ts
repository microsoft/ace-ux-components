import { AlertBoxStateView } from "./AlertBoxStateView";
import { AlertIcon, AlertViewAction } from "./AlertBoxStateView.types";
import { InfoIcon } from "../assets";
import { ContainerStyle } from "../elements";

export class InfoAlertBoxView extends AlertBoxStateView {
  constructor(
    message: string,
    icon?: AlertIcon,
    showDefaultIcon?: boolean,
    alertAction?: AlertViewAction[] | null | undefined,
    title?: string,
    showActionAtFooter?: boolean
  ) {
    super(
      ContainerStyle.Accent,
      message,
      showDefaultIcon ? { iconName: InfoIcon } : icon,
      alertAction,
      title,
      showActionAtFooter
    );
  }
}
