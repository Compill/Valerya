import { ComponentTypings, ExtendSurfaceComponentConfig, SurfaceComponentConfig } from "@katia/core";
import { SurfaceBasedComponent } from "../surface";


type TraitProps = ComponentTypings<"Katia.Badge">;

export type ComponentProps = SurfaceBasedComponent<TraitProps>

export type Config = SurfaceComponentConfig<TraitProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
