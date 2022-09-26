import { ComponentTypings, ExtendSurfaceComponentConfig, SurfaceComponentConfig } from "@valerya/core";
import { SurfaceBasedComponent } from "../surface";


type TraitProps = ComponentTypings<"Valerya.Badge">;

export type ComponentProps = SurfaceBasedComponent<TraitProps>

export type Config = SurfaceComponentConfig<TraitProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
