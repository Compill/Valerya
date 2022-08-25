import { SurfaceScheme } from "@katia/surface"
import { ComponentConfig, ExtendComponentConfig } from "./ComponentConfig"

export type KatiaConfigSurfaces = Record<string, SurfaceScheme>
export type KatiaConfigComponents = Record<string, ComponentConfig>
export type KatiaConfigExtendComponents = Record<string, ExtendComponentConfig<ComponentConfig>>
export type KatiaConfigDefaultSurfaces = {
  light: SurfaceScheme,
  dark: SurfaceScheme
}

export interface KatiaConfig
{
  "katia.surfaces"?: KatiaConfigSurfaces,
  "katia.surfaces.dark"?: KatiaConfigSurfaces,
  "katia.surfaces.defaults"?: KatiaConfigDefaultSurfaces,
  "katia.components"?: KatiaConfigComponents
  "katia.components.extend"?: KatiaConfigExtendComponents
}
