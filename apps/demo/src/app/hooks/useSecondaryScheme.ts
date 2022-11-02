import { useDarkMode } from "@soperio/react";
import { buildSurface } from "@valerya/surface";

const lightSurface = buildSurface("#475569")
const darkSurface = buildSurface("#475569", { darkMode: true })

export function useSecondaryScheme()
{
    const darkMode = useDarkMode()

    return darkMode ? darkSurface : lightSurface;
}