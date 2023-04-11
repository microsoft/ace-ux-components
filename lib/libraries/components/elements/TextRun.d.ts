import { BaseActionElement } from "./BaseActionElement";
import { ElementType, FontColor, FontSize, FontType, FontWeight } from "./Schema.types";
export declare class TextRun {
    readonly text: string;
    readonly type: ElementType.TextRun;
    color: FontColor;
    fontType: FontType;
    isHighlighted: boolean;
    italic: boolean;
    strikedThrough: boolean;
    isSubtle: boolean;
    underline?: boolean;
    selectAction?: BaseActionElement;
    size: FontSize;
    weight: FontWeight;
    constructor(text: string);
    enableHighlight(): TextRun;
    enableItalic(): TextRun;
    enableStrikedThrough(): TextRun;
    enableSubtle(): TextRun;
    enableUnderlined(): TextRun;
    setAction(action: BaseActionElement): TextRun;
    setColor(color: FontColor): TextRun;
    setFontTypeToMonospace(): TextRun;
    setSize(size: FontSize): TextRun;
    setWeight(weight: FontWeight): TextRun;
}
//# sourceMappingURL=TextRun.d.ts.map