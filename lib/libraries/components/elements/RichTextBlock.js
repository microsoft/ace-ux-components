/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseElement } from "./BaseElement";
import { Alignment, ElementType } from "./Schema.types";
// For more info: https://adaptivecards.io/explorer/RichTextBlock.html
var RichTextBlock = /** @class */ (function (_super) {
    __extends(RichTextBlock, _super);
    function RichTextBlock(inlines) {
        var _this = _super.call(this, ElementType.RichTextBlock) || this;
        _this.horizontalAlignment = Alignment.Left;
        _this.inlines = inlines;
        return _this;
    }
    RichTextBlock.prototype.setHorizontalAlignment = function (alignment) {
        this.horizontalAlignment = alignment;
        return this;
    };
    return RichTextBlock;
}(BaseElement));
export { RichTextBlock };
//# sourceMappingURL=RichTextBlock.js.map