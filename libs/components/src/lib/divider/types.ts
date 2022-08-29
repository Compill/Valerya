import { ComponentTypings, ExtendSurfaceComponentConfig, SurfaceComponentConfig } from "@katia/core";
import { SurfaceBasedComponent } from "../surface";


type TraitProps = ComponentTypings<"Katia.Divider">;

export type ComponentProps = SurfaceBasedComponent<TraitProps>

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
