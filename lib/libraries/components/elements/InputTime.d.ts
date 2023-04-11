import { BaseInputElement } from "./BaseInputElement";
export declare class InputTime extends BaseInputElement {
    readonly id: string;
    readonly value: string;
    max?: string;
    min?: string;
    placeholder?: string;
    constructor(id: string, initialValue: string);
    setMax(maxValue: string): InputTime;
    setMin(minValue: string): InputTime;
    setPlaceholder(placeholder: string): InputTime;
}
//# sourceMappingURL=InputTime.d.ts.map