import { ComponentTypings, ExtendSurfaceComponentConfig, HTMLDivProps, SurfaceComponentConfig } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { HoverableSurfaceBasedComponent } from "../surface";

type TraitProps = ComponentTypings<"Katia.Tile">

export type ComponentProps = HoverableSurfaceBasedComponent<SoperioComponent & HTMLDivProps & TraitProps>

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
