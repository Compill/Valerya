import { ComponentConfig, ComponentTypings, ExtendComponentConfig, ExtendSurfaceComponentConfig, SurfaceComponentConfig } from "@katia/core";
import { Color, SoperioComponent, SpacingPositive } from "@soperio/react";
import { SurfaceBasedComponent } from "../surface";

type TraitProps = ComponentTypings<"Katia.Spinner">

interface CustomProps
{
  trackColor?: Color,
  thickness?: SpacingPositive,
  progress?: 0 | 25 | 50 | 75 | 100
}

export type ComponentProps = SurfaceBasedComponent<TraitProps & CustomProps>

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
