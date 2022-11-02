import { useDarkMode } from "@soperio/react";
import { buildSurface } from "@valerya/surface";

const lightSurface = buildSurface("#b3261e")
const darkSurface = buildSurface("#b3261e", { darkMode: true })

export function useAccentScheme()
{
    const darkMode = useDarkMode()

    return darkMode ? darkSurface : lightSurface;
}