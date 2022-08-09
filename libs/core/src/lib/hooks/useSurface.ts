import { IS_DEV, useDarkMode } from "@soperio/react";
import { useThemeExtra } from "@soperio/theming";
import { KatiaConfigSurfaces } from "../KatiaConfig";
import { buildSurfaceFromColor } from "../surface/buildSurface";
import { SurfaceSchemeSet } from "../surface/SurfaceScheme";
import { ThemeSurfaceScheme } from "../surface/types";

const defaultSurface = buildSurfaceFromColor(0xFF0EA5E9)
const defaultSurfaceDark = buildSurfaceFromColor(0xFF0EA5E9, { darkMode: true })
// const defaultSurface = buildSurfaceFromColor(0xff0ea5e9)
// const defaultSurface = buildSurfaceFromColor(0xFF0369a1)

export function useSurface(surface?: ThemeSurfaceScheme | SurfaceSchemeSet): SurfaceSchemeSet
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
        console.warn(`[Katia UI]: You're trying to use useSurface() with the param "${surface}" but this surface does not exist in your theme.Add it in the theme configuration under extras -> katia.surfaces`);

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

// const CACHE_TYPE = "surfaceSheme"

// function processSurface(surface: SurfaceSchemeSet)
// {
//   const processedSurface = { ...surface } as any

//   Object.keys(surface).forEach(key =>
//   {
//     const cacheKey = `${key}${(surface as any)[key]}`

//     const cached = ThemeCache.get().get(CACHE_TYPE, cacheKey)

//     if (cached)
//     {
//       processedSurface[key] = cached
//     }
//     else
//     {
//       // TODO There are one or two levels: color or SurfaceColorSet
//       const color = processColor((surface as any)[key])
//       ThemeCache.get().put(CACHE_TYPE, cacheKey, color)
//       processedSurface[key] = color
//     }
//   })

//   return processedSurface
// }

// Should I process colors from Surfaces or not
// function processColor(color: string)
// {
//   const parsedColor = getColor(color)

//   if (parsedColor)
//     return parsedColor

//   color = color.trim();

//   if (color === 'transparent')
//     return color;

//   if (color.startsWith("root."))
//   {
//     return `var(--so-${color.substring(5)})` // Remove "root." prefix, and convert to CSS var
//   }

//   return color
// }
