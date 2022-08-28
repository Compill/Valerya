import { ComponentTypings, ExtendSurfaceComponentConfig, HTMLDivProps, SurfaceComponentConfig } from "@katia/core";
import { HoverableSurfaceBasedComponent } from "../surface";

type TraitProps = ComponentTypings<"Katia.Tile">

export type ComponentProps = HoverableSurfaceBasedComponent<HTMLDivProps & TraitProps>

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
