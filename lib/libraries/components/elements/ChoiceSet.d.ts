import { BaseInputElement } from "./BaseInputElement";
import { Choice } from "./Choice";
import { ChoiceSetStyle } from "./Schema.types";
export declare class ChoiceSet extends BaseInputElement {
    readonly choices: Choice[];
    readonly id: string;
    readonly value: string;
    isMultiSelect: boolean;
    placeholder?: string;
    style: ChoiceSetStyle;
    wrap: boolean;
    constructor(id: string, choices: Choice[], initialValue: string);
    enableMultiSelect(): ChoiceSet;
    enableWrap(): ChoiceSet;
    setPlaceholder(placeholder: string): ChoiceSet;
    setStyleToExpanded(): ChoiceSet;
}
//# sourceMappingURL=ChoiceSet.d.ts.map