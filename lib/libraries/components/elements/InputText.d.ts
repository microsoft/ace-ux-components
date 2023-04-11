import { BaseActionElement } from "./BaseActionElement";
import { BaseInputElement } from "./BaseInputElement";
import { TextInputStyle } from "./Schema.types";
export declare class InputText extends BaseInputElement {
    readonly id: string;
    readonly value: string;
    inlineAction?: BaseActionElement;
    isMultiline: boolean;
    maxLength?: number;
    placeholder?: string;
    style: TextInputStyle;
    label?: string;
    regex?: string;
    constructor(id: string, initialValue?: string);
    enableMultiline(): InputText;
    setAction(action: BaseActionElement): InputText;
    setMaxLength(maxLength: number): InputText;
    setPlaceholder(placeholder: string): InputText;
    setStyle(style: TextInputStyle): InputText;
    setLabel(label: string): InputText;
    setRegex(regex: string): InputText;
}
//# sourceMappingURL=InputText.d.ts.map