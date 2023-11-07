import { AdaptiveCardExtensionContext } from "@microsoft/sp-adaptive-card-extension-base";
import { HostTheme } from "./types";

export function getTheme(context: AdaptiveCardExtensionContext): HostTheme {
    // Sets the default theme to light theme
    let theme: HostTheme = "light";
    context.sdks?.microsoftTeams?.teamsJs?.app?.getContext().then((context) => {
      theme = context.app?.appInfo?.theme as HostTheme;
    });
    return theme;
}