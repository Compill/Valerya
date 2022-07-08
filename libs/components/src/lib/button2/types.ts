import { ComponentConfig2, ComponentTypings, DisabledState, DisabledThemeProps, ExtendComponentConfig2, HTMLButtonProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { SurfaceSchemeProps } from "../surface";
import { SurfaceVariantProp } from "../surface/types";


type TraitProps = ComponentTypings<"Soperio.Button">

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState & SurfaceSchemeProps & HTMLButtonProps;

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

export type Config = ComponentConfig2<TraitProps, ComponentProps & SurfaceVariantProp, ConfigStateProps>;
export type ExtendConfig = ExtendComponentConfig2<Config>;
