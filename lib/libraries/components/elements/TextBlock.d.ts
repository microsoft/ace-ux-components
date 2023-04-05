import { BaseElement } from "./BaseElement";
import { Alignment, FontColor, FontSize, FontType, FontWeight, TextBlockStyle } from "./Schema.types";
export declare class TextBlock extends BaseElement {
    color?: FontColor;
    fontType?: FontType;
    horizontalAlignment?: Alignment;
    isSubtle?: boolean;
    maxLines?: number;
    size?: FontSize;
    text: string;
    style: TextBlockStyle;
    weight?: FontWeight;
    wrap: boolean;
    constructor(text: string);
    enableSubtle(): TextBlock;
    enableWrap(): TextBlock;
    setColor(color: FontColor): TextBlock;
    setFontTypeToMonospace(): TextBlock;
    setHorizontalAlignment(alignment: Alignment): TextBlock;
    setSize(size: FontSize): TextBlock;
    setWeight(weight: FontWeight): TextBlock;
    useBinding(binding: string): TextBlock;
    useMultiline(maxLines: number | undefined): TextBlock;
    setStyle(textBlockStyle: TextBlockStyle): TextBlock;
}
//# sourceMappingURL=TextBlock.d.ts.map