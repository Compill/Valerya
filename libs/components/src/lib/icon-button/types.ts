import { ComponentConfig, ComponentTypings, DisabledState, DisabledThemeProps, ExtendComponentConfig, ExtendSurfaceComponentConfig, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, SurfaceComponentConfig } from "@valerya/core";
import { ButtonProps } from "../button";
import { HoverableSurfaceBasedComponent, LayerProps } from "../surface";
import { HTMLButtonProps, HTMLDivProps, RightJoinProps } from "@soperio/react";


type TraitProps = ComponentTypings<"Valerya.IconButton">;

export type ComponentProps = HoverableSurfaceBasedComponent<TraitProps & SelectedState & DisabledState & RightJoinProps<HTMLButtonProps, HTMLDivProps>>

interface ConfigStateProps extends SelectedThemeProps<LayerProps>, DisabledThemeProps<LayerProps>, SelectedDisabledThemeProps<LayerProps> { }

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
