import { Color, SpacingPositive } from "@soperio/react";
import { ComponentTypings, DisabledThemeProps, ExtendSurfaceComponentConfig, SurfaceComponentConfig } from "@valerya/core";
import { SurfaceBasedComponent } from "../surface";

type TraitProps = ComponentTypings<"Valerya.Spinner">

interface CustomProps
{
  trackColor?: Color,
  thickness?: SpacingPositive,
  progress?: 0 | 25 | 50 | 75 | 100
}

export type ComponentProps = SurfaceBasedComponent<TraitProps & CustomProps>

interface ConfigStateProps extends DisabledThemeProps { }

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
