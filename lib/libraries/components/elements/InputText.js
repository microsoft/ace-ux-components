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
import { BaseInputElement } from "./BaseInputElement";
import { ElementType, TextInputStyle } from "./Schema.types";
// For more info: https://adaptivecards.io/explorer/Input.Text.html
var InputText = /** @class */ (function (_super) {
    __extends(InputText, _super);
    function InputText(id, initialValue) {
        if (initialValue === void 0) { initialValue = ""; }
        var _this = _super.call(this, ElementType.InputText) || this;
        _this.isMultiline = false;
        _this.style = TextInputStyle.Text;
        _this.id = id;
        _this.value = initialValue;
        return _this;
    }
    InputText.prototype.enableMultiline = function () {
        this.isMultiline = true;
        return this;
    };
    InputText.prototype.setAction = function (action) {
        this.inlineAction = action;
        return this;
    };
    InputText.prototype.setMaxLength = function (maxLength) {
        this.maxLength = maxLength;
        return this;
    };
    InputText.prototype.setPlaceholder = function (placeholder) {
        this.placeholder = placeholder;
        return this;
    };
    InputText.prototype.setStyle = function (style) {
        this.style = style;
        return this;
    };
    InputText.prototype.setLabel = function (label) {
        this.label = label;
        return this;
    };
    InputText.prototype.setRegex = function (regex) {
        this.regex = regex;
        return this;
    };
    return InputText;
}(BaseInputElement));
export { InputText };
//# sourceMappingURL=InputText.js.map