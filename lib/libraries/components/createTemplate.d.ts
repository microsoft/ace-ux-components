import { ISelectMediaAction, ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { IOpenUrlAction, IShowCardAction, ISubmitAction } from "adaptivecards/lib/schema";
import { BaseElement } from "./elements/BaseElement";
import { Refresh } from "./elements/Refresh";
export declare function createTemplate(body: BaseElement[], actions?: (ISubmitAction | IOpenUrlAction | IShowCardAction | ISelectMediaAction)[], refresh?: Refresh, version?: string): ISPFxAdaptiveCard;
//# sourceMappingURL=createTemplate.d.ts.map