import { ComponentTypings, ExtendSurfaceComponentConfig, SurfaceComponentConfig } from "@katia/core";
import { HoverableSurfaceBasedComponent } from "../surface";
import { HTMLDivProps } from "@soperio/react";

type TraitProps = ComponentTypings<"Katia.Tile">

export type ComponentProps = HoverableSurfaceBasedComponent<HTMLDivProps & TraitProps>

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
