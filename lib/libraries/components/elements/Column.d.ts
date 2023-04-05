import { BaseActionElement } from "./BaseActionElement";
import { BaseElement } from "./BaseElement";
import { BlockElementDimension, ContainerStyle, ElementType, Spacing, VerticalAlignment } from "./Schema.types";
export declare class Column {
    readonly items: BaseElement[];
    readonly type: ElementType;
    selectAction?: BaseActionElement;
    separator: boolean;
    spacing: Spacing;
    style?: ContainerStyle;
    verticalContentAlignment: VerticalAlignment;
    width: BlockElementDimension | string | undefined;
    isVisible: boolean;
    rtl: boolean;
    constructor(body: BaseElement[]);
    setAction(action: BaseActionElement): Column;
    setSpacing(spacing: Spacing): Column;
    setStyle(style: ContainerStyle): Column;
    setVerticalAlignment(alignment: VerticalAlignment): Column;
    setWidth(width: string): Column;
    shrink(): Column;
    stretch(): Column;
    useSeparator(separator?: boolean): Column;
    setRtl(rtl: boolean): Column;
    setIsVisible(value: boolean): Column;
}
//# sourceMappingURL=Column.d.ts.map