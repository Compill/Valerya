import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendSurfaceComponentConfig, HTMLButtonProps, HTMLDivProps, RightJoinProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, SurfaceComponentConfig } from "@katia/core";
import { HoverableSurfaceBasedComponent, LayerProps } from "../surface";


type TraitProps = ComponentTypings<"Katia.Button">

export type ComponentProps = HoverableSurfaceBasedComponent<TraitProps & SelectedState & DisabledState & RightJoinProps<HTMLButtonProps, HTMLDivProps>>; // TODO the as property should correctly handle the right join
// There is a problem either in the AS type or the forwardRef function

interface ConfigStateProps extends SelectedThemeProps<LayerProps>, DisabledThemeProps<LayerProps>, SelectedDisabledThemeProps<LayerProps> { }

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;


/*
    ComponentConfig => (theme, darkMode)
    SurfaceComponentConfig => (theme, surface, darkMode)

*/