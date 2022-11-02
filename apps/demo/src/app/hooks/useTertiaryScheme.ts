import { useDarkMode } from "@soperio/react";
import { buildSurface } from "@valerya/surface";

const lightSurface = buildSurface("#39B8FC")
const darkSurface = buildSurface("#39B8FC", { darkMode: true })

export function useTertiaryScheme()
{
    const darkMode = useDarkMode()

    return darkMode ? darkSurface : lightSurface;
}