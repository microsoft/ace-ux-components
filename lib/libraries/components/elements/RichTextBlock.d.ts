import { BaseElement } from "./BaseElement";
import { Alignment } from "./Schema.types";
import { TextRun } from "./TextRun";
export declare class RichTextBlock extends BaseElement {
    readonly inlines: TextRun[];
    horizontalAlignment: Alignment;
    constructor(inlines: TextRun[]);
    setHorizontalAlignment(alignment: Alignment): RichTextBlock;
}
//# sourceMappingURL=RichTextBlock.d.ts.map