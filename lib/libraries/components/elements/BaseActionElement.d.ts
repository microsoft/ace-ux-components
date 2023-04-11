import { IAction } from "adaptivecards/lib/schema";
import { ActionMode, ActionStyle, ActionType } from "./Schema.types";
export declare abstract class BaseActionElement implements IAction {
    readonly id: string;
    readonly title: string;
    readonly type: ActionType;
    readonly tooltip?: string;
    iconUrl?: string;
    style: ActionStyle;
    mode: ActionMode;
    isEnabled: boolean;
    protected constructor(type: ActionType, id: string, title: string, tooltip?: string);
    setIconUrl(url: string): BaseActionElement;
    setMode(mode: ActionMode): BaseActionElement;
    setStyle(style: ActionStyle): BaseActionElement;
    setIsEnabled(isEnabled: boolean): BaseActionElement;
}
//# sourceMappingURL=BaseActionElement.d.ts.map