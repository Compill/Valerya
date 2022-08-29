import { ComponentTypings, ExtendSurfaceComponentConfig, HTMLDivProps, SurfaceComponentConfig } from "@katia/core";
import { SurfaceBasedComponent } from "../surface";

type TraitProps = ComponentTypings<"Katia.Sidebar">

export type ComponentProps = SurfaceBasedComponent<HTMLDivProps & TraitProps>

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;