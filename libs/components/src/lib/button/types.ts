import { SurfaceComponentConfig, ComponentTypings, DisabledState, DisabledThemeProps, ExtendSurfaceComponentConfig, HTMLButtonProps, HTMLDivProps, RightJoinProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, ThemeSurfaceScheme } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { SurfaceSchemeProps } from "../surface";


type TraitProps = ComponentTypings<"Katia.Button">

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState & Omit<SurfaceSchemeProps, "schemeVariant" | "hoverable"> & RightJoinProps<HTMLButtonProps, HTMLDivProps>; // TODO the as property should correctly handle the right join
// There is a problem either in the AS type or the forwardRef function

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps, Omit<SurfaceSchemeProps, "scheme"> { }

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;


/*
    ComponentConfig => (theme, darkMode)
    SurfaceComponentConfig => (theme, surface, darkMode)

*/