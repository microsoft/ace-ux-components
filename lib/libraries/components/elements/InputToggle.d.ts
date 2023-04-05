import { BaseInputElement } from "./BaseInputElement";
import { InputToggleValue } from "./Schema.types";
export declare class InputToggle extends BaseInputElement {
    readonly id: string;
    readonly title: string;
    readonly value: string;
    readonly valueOff: string;
    readonly valueOn: string;
    wrap: boolean;
    constructor(id: string, title: string, initialValue?: InputToggleValue);
    enableWrap(): InputToggle;
}
//# sourceMappingURL=InputToggle.d.ts.map