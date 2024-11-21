import { AdaptiveCardExtensionContext } from "@microsoft/sp-adaptive-card-extension-base";
import { HostTheme } from "./types";

export async function getTheme(context: AdaptiveCardExtensionContext): Promise<HostTheme> {
  // Sets the default theme to light theme
  let theme: HostTheme = "light";

  // Check if Teams SDK is available and get the theme asynchronously
  if (context.sdks?.microsoftTeams?.teamsJs?.app?.getContext) {
    const teamsContext = await context.sdks.microsoftTeams.teamsJs.app.getContext();
    theme = teamsContext.app?.appInfo?.theme as HostTheme;
  }
  return theme;
}