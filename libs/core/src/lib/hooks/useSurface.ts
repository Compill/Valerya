import { buildSurface, SurfaceScheme } from "@katia/surface";
import { IS_DEV, useDarkMode, useThemeExtra } from "@soperio/react";
import { KatiaConfigSurfaces } from "../KatiaConfig";
import { ThemeSurfaceScheme } from "../surface/types";

const defaultSurface = buildSurface(0xFF0EA5E9)
const defaultSurfaceDark = buildSurface(0xFF0EA5E9, { darkMode: true })
// const defaultSurface = buildSurfaceFromColor(0xff0ea5e9)
// const defaultSurface = buildSurfaceFromColor(0xFF0369a1)

export function useSurface(surface?: ThemeSurfaceScheme | SurfaceScheme): SurfaceScheme
{
  const surfaces = useThemeExtra("katia.surfaces")
  const darkSurfaces = useThemeExtra("katia.surfaces.dark")
  const defaultSurfaces = useThemeExtra("katia.surfaces.default")

  const darkMode = useDarkMode();

  if (typeof surface === "string")
  {
    if (!surfaces)
      throw new Error("You're trying to useSurface but the theme doesn't contains any surface. Add some in the theme configuration under extras -> katia.surfaces")

    const s = surfaces as KatiaConfigSurfaces

    // If dark mode and dark mode surface exists, return it
    if (darkMode)
    {
      const ds = darkSurfaces as KatiaConfigSurfaces
      const darkSurface = ds?.[surface];

      if (darkSurface)
        return darkSurface;
      // return processSurface(darkSurface);
    }

    // Else, find light surface

    const indexedSurface = s?.[surface]

    if (!indexedSurface)
    {
      if (IS_DEV)
        console.warn(`[Katia UI]: You're trying to use useSurface() with the param "${surface}" but this surface does not exist in your theme. Add it in the theme configuration under extras -> katia.surfaces`);

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
