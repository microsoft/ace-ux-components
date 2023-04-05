import { BaseActionElement } from "./BaseActionElement";
import { BaseElement } from "./BaseElement";
import { Alignment, Height, ImageSize, ImageStyle } from "./Schema.types";
export declare class Image extends BaseElement {
    readonly altText: string;
    readonly url: string;
    backgroundColor?: string;
    height: Height | string;
    horizontalAlignment: Alignment;
    selectAction?: BaseActionElement;
    size: ImageSize;
    style: ImageStyle;
    constructor(url: string, altText: string);
    setAction(action: BaseActionElement): Image;
    setBackgroundColor(hexColor: string): Image;
    setHeight(height: Height | string): Image;
    setHorizontalAlignment(alignment: Alignment): Image;
    setSize(size: ImageSize): Image;
    setStyle(style: ImageStyle): Image;
    setWidth(width: string): Image;
}
//# sourceMappingURL=Image.d.ts.map