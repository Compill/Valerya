import { ComponentConfig, ComponentTypings, ExtendComponentConfig } from "@katia/core";
import { Color, SoperioComponent, SpacingPositive } from "@soperio/react";

type TraitProps = ComponentTypings<"Soperio.Spinner">

interface CustomProps extends SoperioComponent
{
  trackColor?: Color,
  thickness?: SpacingPositive,
  progress?: 0 | 25 | 50 | 75 | 100
}

export type ComponentProps = TraitProps & CustomProps

export type Config = ComponentConfig<TraitProps, CustomProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
