import { ActiveDisabledThemeProps, ActiveState, ActiveThemeProps, ComponentTypings, DisabledState, DisabledThemeProps, ExtendSurfaceComponentConfig, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, SurfaceComponentConfig } from "@valerya/core";
import { HoverableSurfaceBasedComponent, LayerProps } from "../surface";
import { HTMLDivProps } from "@soperio/react";

type TraitProps = ComponentTypings<"Valerya.Tile">

export type ComponentProps = HoverableSurfaceBasedComponent<HTMLDivProps & TraitProps & SelectedState & ActiveState & DisabledState>

interface ConfigStateProps extends SelectedThemeProps<LayerProps>, ActiveThemeProps<LayerProps>, DisabledThemeProps<LayerProps>, SelectedDisabledThemeProps<LayerProps>, ActiveDisabledThemeProps<LayerProps> { }


export type Config = SurfaceComponentConfig<TraitProps, ComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
