import { BaseActionElement } from "./BaseActionElement";
import { AssociatedInputs } from "./Schema.types";
export declare class ActionSubmit extends BaseActionElement {
    readonly data: any;
    associatedInputs: AssociatedInputs;
    constructor(id: string, title: string, data?: any, toolTip?: string);
    setAssociatedInputs(associatedInputs: AssociatedInputs): ActionSubmit;
}
//# sourceMappingURL=ActionSubmit.d.ts.map