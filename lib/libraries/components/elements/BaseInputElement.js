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
var BaseInputElement = /** @class */ (function (_super) {
    __extends(BaseInputElement, _super);
    function BaseInputElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRequired = false;
        return _this;
    }
    BaseInputElement.prototype.setLabel = function (label) {
        this.label = label;
        return this;
    };
    BaseInputElement.prototype.setErrorMessage = function (errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    };
    BaseInputElement.prototype.setIsRequired = function (isRequired) {
        this.isRequired = isRequired;
        return this;
    };
    return BaseInputElement;
}(BaseElement));
export { BaseInputElement };
//# sourceMappingURL=BaseInputElement.js.map