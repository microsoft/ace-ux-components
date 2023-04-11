import { BlockElementDimension, ElementType, Spacing } from "./Schema.types";
export declare abstract class BaseElement {
    readonly type: ElementType;
    id: string;
    isVisible: boolean;
    separator: boolean;
    spacing: Spacing;
    width: BlockElementDimension | string | undefined;
    protected constructor(type: ElementType);
    setID(value: string): BaseElement;
    setIsVisible(value: boolean): BaseElement;
    setSpacing(spacing: Spacing): BaseElement;
    shrink(): BaseElement;
    stretch(): BaseElement;
    useSeparator(separator?: boolean): BaseElement;
}
//# sourceMappingURL=BaseElement.d.ts.map