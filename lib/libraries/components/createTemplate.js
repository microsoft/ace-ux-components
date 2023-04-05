export function createTemplate(body, actions, refresh, version) {
    if (actions === void 0) { actions = []; }
    if (refresh === void 0) { refresh = null; }
    return {
        schema: "http=//adaptivecards.io/schemas/adaptive-card.json",
        type: "AdaptiveCard",
        version: version || "1.5",
        body: body,
        actions: actions,
        refresh: refresh,
    };
}
//# sourceMappingURL=createTemplate.js.map