import { buildSurface, SurfaceScheme } from "@valerya/surface";
import { IS_DEV, useDarkMode, useThemeExtra } from "@soperio/react";
import { ValeryaConfigSurfaces } from "../ValeryaConfig";
import { ThemeSurfaceScheme } from "../surface/types";

const defaultSurface = buildSurface(0xFF0EA5E9)
const defaultSurfaceDark = buildSurface(0xFF0EA5E9, { darkMode: true })
// const defaultSurface = buildSurfaceFromColor(0xff0ea5e9)
// const defaultSurface = buildSurfaceFromColor(0xFF0369a1)

export function useSurface(surface?: ThemeSurfaceScheme | SurfaceScheme): SurfaceScheme
{
  const surfaces = useThemeExtra("valerya.surfaces")
  const darkSurfaces = useThemeExtra("valerya.surfaces.dark")
  const defaultSurfaces = useThemeExtra("valerya.surfaces.default")

  const darkMode = useDarkMode();

  if (typeof surface === "string")
  {
    const s = surfaces as ValeryaConfigSurfaces

    // If dark mode and dark mode surface exists, return it
    if (darkMode)
    {
      const ds = darkSurfaces as ValeryaConfigSurfaces
      const darkSurface = ds?.[surface];

      if (darkSurface)
        return darkSurface;
      // return processSurface(darkSurface);
    }

    // Else, find light surface

    const indexedSurface = s?.[surface]

    if (!indexedSurface)
    {
      if (IS_DEV && surface !== "default")
        console.warn(`[Valerya UI]: You're trying to use useSurface() with the param "${surface}" but this surface does not exist in your theme. Add it in the theme configuration under extras -> valerya.surfaces`);

      // Avoid crashing, return default surface
      return darkMode ? (defaultSurfaces?.dark ?? defaultSurfaceDark) : (defaultSurfaces?.light ?? defaultSurface)
    }

    return indexedSurface;
    // return processSurface(indexedSurface || {});
  }

  // Return surface if defined, default surface otherwise
  return surface ?? (darkMode ? (defaultSurfaces?.dark ?? defaultSurfaceDark) : (defaultSurfaces?.light ?? defaultSurface));
  // return surface ? processSurface(surface) : surface;
}
