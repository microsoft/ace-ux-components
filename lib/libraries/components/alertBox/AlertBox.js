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
import { ActionSet, ActionStyle, ActionSubmit, Alignment, Column, ColumnSet, Container, ContainerStyle, FontColor, FontSize, FontWeight, RichTextBlock, Spacing, TextBlock, TextRun, VerticalAlignment, } from "../elements";
import { AlertType } from "./AlertBox.types";
var getItems = function (alertType, alertMessage, alertAction, alertConfirmation) {
    var _a;
    var color = alertType === AlertType.Success
        ? ContainerStyle.Good
        : alertType === AlertType.Warning
            ? ContainerStyle.Warning
            : ContainerStyle.Attention;
    var alertActionContainer = new Column([]).setWidth("0").setIsVisible(false);
    var alertConfirmationContainer = new ColumnSet([]).setIsVisible(false);
    var descriptionContainer = new RichTextBlock([]);
    if (alertAction) {
        alertActionContainer
            .shrink()
            .setSpacing(Spacing.Medium)
            .setVerticalAlignment(VerticalAlignment.Center)
            .setIsVisible(true);
        alertActionContainer.items.push(new RichTextBlock([
            new TextRun(alertAction.actionText)
                .setSize(FontSize.Small)
                .setWeight(FontWeight.Bolder)
                .enableUnderlined()
                .setAction(new ActionSubmit(alertAction.actionId, "", alertAction.actionData)),
        ]).setHorizontalAlignment(Alignment.Right));
    }
    if (alertConfirmation) {
        alertConfirmationContainer.setIsVisible(true);
        alertConfirmationContainer.columns.push(new Column([
            new ActionSet([
                new ActionSubmit(alertConfirmation.cancelId, alertConfirmation.cancelText, alertConfirmation.cancelData),
            ]),
        ]).stretch(), new Column([
            new ActionSet([
                new ActionSubmit(alertConfirmation.okId, alertConfirmation.okText, alertConfirmation.okData).setStyle(ActionStyle.Destructive),
            ]),
        ]).stretch());
    }
    if (typeof alertMessage === "string" || alertMessage instanceof String) {
        descriptionContainer.inlines.push(new TextRun(alertMessage).setSize(FontSize.Small).setColor(FontColor.Dark));
    }
    else {
        (_a = descriptionContainer.inlines).push.apply(_a, alertMessage.map(function (message) {
            return new TextRun(message).setSize(FontSize.Small).setColor(FontColor.Dark);
        }));
    }
    return [
        new Container([
            new ColumnSet([
                new Column([
                    new TextBlock(alertType)
                        .setSize(FontSize.Small)
                        .setWeight(FontWeight.Bolder)
                        .setColor(FontColor.Dark)
                        .enableWrap(),
                    descriptionContainer,
                    alertConfirmationContainer,
                ]).stretch(),
                alertActionContainer,
            ]),
        ])
            .setStyle(color)
            .enableBleed()
            .setSpacing(Spacing.Medium),
    ];
};
var AlertBox = /** @class */ (function (_super) {
    __extends(AlertBox, _super);
    function AlertBox(alertType, alertMessage, alertAction, alertConfirmation) {
        return _super.call(this, getItems(alertType, alertMessage, alertAction, alertConfirmation)) || this;
    }
    return AlertBox;
}(Container));
export { AlertBox };
//# sourceMappingURL=AlertBox.js.map