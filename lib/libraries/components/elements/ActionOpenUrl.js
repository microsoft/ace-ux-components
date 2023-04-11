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
import { ActionType } from "./Schema.types";
// For more info: https://adaptivecards.io/explorer/Action.OpenUrl.html
var ActionOpenUrl = /** @class */ (function (_super) {
    __extends(ActionOpenUrl, _super);
    function ActionOpenUrl(id, title, url, toolTip) {
        var _this = _super.call(this, ActionType.OpenUrl, id, title, toolTip) || this;
        _this.url = url;
        return _this;
    }
    return ActionOpenUrl;
}(BaseActionElement));
export { ActionOpenUrl };
//# sourceMappingURL=ActionOpenUrl.js.map