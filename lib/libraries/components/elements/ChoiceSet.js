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
import { ChoiceSetStyle, ElementType } from "./Schema.types";
// For more info: https://adaptivecards.io/explorer/Input.ChoiceSet.html
var ChoiceSet = /** @class */ (function (_super) {
    __extends(ChoiceSet, _super);
    function ChoiceSet(id, choices, initialValue) {
        var _this = _super.call(this, ElementType.InputChoiceSet) || this;
        _this.isMultiSelect = false;
        _this.style = ChoiceSetStyle.Compact;
        _this.wrap = false;
        _this.id = id;
        _this.choices = choices;
        _this.value = initialValue;
        return _this;
    }
    ChoiceSet.prototype.enableMultiSelect = function () {
        this.isMultiSelect = true;
        return this;
    };
    ChoiceSet.prototype.enableWrap = function () {
        this.wrap = true;
        return this;
    };
    ChoiceSet.prototype.setPlaceholder = function (placeholder) {
        this.placeholder = placeholder;
        return this;
    };
    ChoiceSet.prototype.setStyleToExpanded = function () {
        this.style = ChoiceSetStyle.Expanded;
        return this;
    };
    return ChoiceSet;
}(BaseInputElement));
export { ChoiceSet };
//# sourceMappingURL=ChoiceSet.js.map