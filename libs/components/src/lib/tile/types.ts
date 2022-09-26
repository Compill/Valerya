import { ComponentTypings, ExtendSurfaceComponentConfig, SurfaceComponentConfig } from "@valerya/core";
import { HoverableSurfaceBasedComponent } from "../surface";
import { HTMLDivProps } from "@soperio/react";

type TraitProps = ComponentTypings<"Valerya.Tile">

export type ComponentProps = HoverableSurfaceBasedComponent<HTMLDivProps & TraitProps>

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
