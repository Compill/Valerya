import { ComponentTypings, ExtendSurfaceComponentConfig, SurfaceComponentConfig } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { SurfaceBasedComponent } from "../surface";


type TraitProps = ComponentTypings<"Soperio.Badge">;

export type ComponentProps = SurfaceBasedComponent<SoperioComponent & TraitProps>

export type Config = SurfaceComponentConfig<TraitProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
