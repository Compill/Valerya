import { ComponentTypings, ExtendSurfaceComponentConfig, SurfaceComponentConfig } from "@katia/core";
import { HTMLDivProps } from "@soperio/react";
import { SurfaceBasedComponent } from "../surface";

type TraitProps = ComponentTypings<"Katia.Sidebar">

export type ComponentProps = SurfaceBasedComponent<HTMLDivProps & TraitProps>

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;