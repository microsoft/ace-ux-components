import { BaseActionElement } from "./BaseActionElement";
import { BaseElement } from "./BaseElement";
import { Column } from "./Column";
import { Alignment, ContainerStyle } from "./Schema.types";
export declare class ColumnSet extends BaseElement {
    columns: Column[];
    horizontalAlignment?: Alignment;
    minHeight?: string;
    selectAction?: BaseActionElement;
    style?: ContainerStyle;
    $data?: any;
    bleed: boolean;
    constructor(columns: Column[]);
    setAction(action: BaseActionElement): ColumnSet;
    setMinHeight(minHeight: string): ColumnSet;
    setStyle(style: ContainerStyle): ColumnSet;
    setHorizontalAlignment(alignment: Alignment): ColumnSet;
    setData(data: any): ColumnSet;
    enableBleed(): ColumnSet;
}
//# sourceMappingURL=ColumnSet.d.ts.map