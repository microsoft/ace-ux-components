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
import { ElementType, InputToggleValue } from "./Schema.types";
// For more info: https://adaptivecards.io/explorer/Input.Toggle.html
var InputToggle = /** @class */ (function (_super) {
    __extends(InputToggle, _super);
    function InputToggle(id, title, initialValue) {
        if (initialValue === void 0) { initialValue = InputToggleValue.FALSE; }
        var _this = _super.call(this, ElementType.InputToggle) || this;
        _this.valueOff = InputToggleValue.FALSE;
        _this.valueOn = InputToggleValue.TRUE;
        _this.wrap = false;
        _this.id = id;
        _this.title = title;
        _this.value = initialValue;
        return _this;
    }
    InputToggle.prototype.enableWrap = function () {
        this.wrap = true;
        return this;
    };
    return InputToggle;
}(BaseInputElement));
export { InputToggle };
//# sourceMappingURL=InputToggle.js.map