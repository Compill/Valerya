import { SoperioComponent } from "@soperio/react";
import { ComponentConfig, ComponentTypings, DisabledState, DisabledThemeProps, ExtendComponentConfig, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@katia/core";


type TraitProps = ComponentTypings<"Soperio.Button">

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState; // & SurfaceSchemeProps

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }// , SurfaceVariantProps

export type Config = ComponentConfig<TraitProps, ConfigStateProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
