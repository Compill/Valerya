import { ComponentConfig, ExtendComponentConfig, SurfaceSchemeSet } from "./src";


export type KatiaConfigSurfaces = Record<string, SurfaceSchemeSet>
export type KatiaConfigComponents = Record<string, ComponentConfig>
export type KatiaConfigExtendComponents = Record<string, ExtendComponentConfig<ComponentConfig>>

export interface KatiaConfig
{
  "katia.surfaces": KatiaConfigSurfaces,
  "katia.components": KatiaConfigComponents
  "katia.components.extend": KatiaConfigExtendComponents
}

function useThemeExtra(key: string)
{
  const theme = useTheme()

  return theme[key]
}

function useSurface(surface: string)
{
  const surfaces = useThemeExtra("katia.surfaces")

  if (!surfaces)
    throw new Error("You're trying to useSurface but the theme doesn't contains any surface. Add some in the theme configuration under extras -> katia.surfaces")

  const s = surfaces as KatiaConfigSurfaces

  return s[surface]
}
