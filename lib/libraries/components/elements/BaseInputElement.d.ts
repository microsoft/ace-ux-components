import { BaseElement } from "./BaseElement";
export declare abstract class BaseInputElement extends BaseElement {
    label?: string;
    isRequired: boolean;
    errorMessage?: string;
    setLabel(label: string): BaseInputElement;
    setErrorMessage(errorMessage: string): BaseInputElement;
    setIsRequired(isRequired: boolean): BaseInputElement;
}
//# sourceMappingURL=BaseInputElement.d.ts.map