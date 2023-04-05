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
import { BaseActionElement } from "./BaseActionElement";
import { ActionType, AssociatedInputs } from "./Schema.types";
// For more info: https://docs.microsoft.com/en-us/sharepoint/dev/spfx/release-1.14#new-action-types-for-media-and-geolocation
var ActionSelectMedia = /** @class */ (function (_super) {
    __extends(ActionSelectMedia, _super);
    function ActionSelectMedia(id, title, parameters, altText) {
        var _this = _super.call(this, ActionType.SelectMedia, id, title, altText) || this;
        _this.associatedInputs = AssociatedInputs.Auto;
        _this.parameters = parameters;
        _this.data = {
            id: id,
        };
        return _this;
    }
    ActionSelectMedia.prototype.setAssociatedInputs = function (associatedInputs) {
        this.associatedInputs = associatedInputs;
        return this;
    };
    return ActionSelectMedia;
}(BaseActionElement));
export { ActionSelectMedia };
//# sourceMappingURL=ActionSelectMedia.js.map