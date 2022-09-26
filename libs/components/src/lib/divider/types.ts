import { ComponentTypings, ExtendSurfaceComponentConfig, SurfaceComponentConfig } from "@valerya/core";
import { SurfaceBasedComponent } from "../surface";


type TraitProps = ComponentTypings<"Valerya.Divider">;

export type ComponentProps = SurfaceBasedComponent<TraitProps>

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
