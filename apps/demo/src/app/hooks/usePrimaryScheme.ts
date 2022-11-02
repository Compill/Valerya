import { useDarkMode } from "@soperio/react";
import { buildDarkSurface, buildWhiteSurface } from "@valerya/surface";

const lightSurface = buildWhiteSurface("#ffffff", "#181818")
const darkSurface = buildDarkSurface("#181818", "#ffffff")

export function usePrimaryScheme()
{
    const darkMode = useDarkMode()

    return darkMode ? darkSurface : lightSurface;
}