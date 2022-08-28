import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendSurfaceComponentConfig, HTMLButtonProps, HTMLDivProps, RightJoinProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, SurfaceComponentConfig } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { HoverableSurfaceBasedComponent, SurfaceProps } from "../surface";


type TraitProps = ComponentTypings<"Katia.Button">

export type ComponentProps = HoverableSurfaceBasedComponent<SoperioComponent & TraitProps & SelectedState & DisabledState & RightJoinProps<HTMLButtonProps, HTMLDivProps>>; // TODO the as property should correctly handle the right join
// There is a problem either in the AS type or the forwardRef function

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;


/*
    ComponentConfig => (theme, darkMode)
    SurfaceComponentConfig => (theme, surface, darkMode)

*/