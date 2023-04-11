import { BaseInputElement } from "./BaseInputElement";
export declare class InputNumber extends BaseInputElement {
    readonly id: string;
    readonly value: number;
    max?: number;
    min?: number;
    placeholder?: string;
    constructor(id: string, initialValue: number);
    setMax(maxValue: number): InputNumber;
    setMin(minValue: number): InputNumber;
    setPlaceholder(placeholder: string): InputNumber;
}
//# sourceMappingURL=InputNumber.d.ts.map