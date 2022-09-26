import { SurfaceScheme } from "@valerya/surface"
import { ComponentConfig, ExtendComponentConfig } from "./config/ComponentConfig"

export type ValeryaConfigSurfaces = Record<string, SurfaceScheme>
export type ValeryaConfigComponents = Record<string, ComponentConfig>
export type ValeryaConfigExtendComponents = Record<string, ExtendComponentConfig<ComponentConfig>>
export type ValeryaConfigDefaultSurfaces = {
  light: SurfaceScheme,
  dark: SurfaceScheme
}

export interface ValeryaConfig
{
  "valerya.surfaces"?: ValeryaConfigSurfaces,
  "valerya.surfaces.dark"?: ValeryaConfigSurfaces,
  "valerya.surfaces.defaults"?: ValeryaConfigDefaultSurfaces,
  "valerya.components"?: ValeryaConfigComponents
  "valerya.components.extend"?: ValeryaConfigExtendComponents
}
