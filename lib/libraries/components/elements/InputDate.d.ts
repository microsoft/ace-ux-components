import { BaseInputElement } from "./BaseInputElement";
export declare class InputDate extends BaseInputElement {
    readonly id: string;
    readonly value: string;
    max?: string;
    min?: string;
    placeholder?: string;
    constructor(id: string, initialValue: Date);
    setMax(maxValue: Date): InputDate;
    setMin(minValue: Date): InputDate;
    setPlaceholder(placeholder: string): InputDate;
    private formatDate;
}
//# sourceMappingURL=InputDate.d.ts.map