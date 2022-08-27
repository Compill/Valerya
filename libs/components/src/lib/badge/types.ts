import { SurfaceComponentConfig, ComponentTypings, ExtendSurfaceComponentConfig } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { LayerProps, SurfaceProps } from "../surface";


type TraitProps = ComponentTypings<"Soperio.Badge">;

export type ComponentProps = SoperioComponent & TraitProps & SurfaceProps

export type Config = SurfaceComponentConfig<TraitProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
