import { ISelectMediaActionParameters } from "@microsoft/sp-adaptive-card-extension-base";
import { BaseActionElement } from "./BaseActionElement";
import { AssociatedInputs } from "./Schema.types";
export declare class ActionSelectMedia extends BaseActionElement {
    readonly data: any;
    readonly parameters: ISelectMediaActionParameters;
    associatedInputs: AssociatedInputs;
    constructor(id: string, title: string, parameters: ISelectMediaActionParameters, altText?: string);
    setAssociatedInputs(associatedInputs: AssociatedInputs): ActionSelectMedia;
}
//# sourceMappingURL=ActionSelectMedia.d.ts.map