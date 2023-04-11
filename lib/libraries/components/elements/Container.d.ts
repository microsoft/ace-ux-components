import { BaseActionElement } from "./BaseActionElement";
import { BaseElement } from "./BaseElement";
import { BlockElementDimension, ContainerStyle, VerticalAlignment } from "./Schema.types";
export declare class Container extends BaseElement {
    backgroundImage?: string;
    bleed: boolean;
    data?: string;
    height?: BlockElementDimension;
    items: BaseElement[];
    minHeight?: string;
    selectAction?: BaseActionElement;
    style?: ContainerStyle;
    verticalContentAlignment: VerticalAlignment;
    rtl: boolean;
    constructor(items: BaseElement[]);
    enableBleed(): Container;
    setAction(action: BaseActionElement): Container;
    setBackgroundImage(uri: string): Container;
    setHeight(height: BlockElementDimension): Container;
    setMinHeight(minHeight: string): Container;
    setStyle(style: ContainerStyle): Container;
    setVerticalAlignment(alignment: VerticalAlignment): Container;
    setRtl(rtl: boolean): Container;
    protected updateItems(items: BaseElement[]): void;
}
//# sourceMappingURL=Container.d.ts.map