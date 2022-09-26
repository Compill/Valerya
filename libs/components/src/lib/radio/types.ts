import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, ComponentTypings, DisabledState, DisabledThemeProps, ExtendSurfaceComponentConfig, SurfaceComponentConfig } from "@valerya/core";
import { HoverableSurfaceBasedComponent, LayerProps } from "../surface";

type TraitProps = ComponentTypings<"Valerya.Radio">;

export type ComponentProps = HoverableSurfaceBasedComponent<TraitProps & CheckedState & DisabledState>;

interface ConfigStateProps extends CheckedThemeProps<LayerProps>, DisabledThemeProps<LayerProps>, CheckedDisabledThemeProps<LayerProps> { }

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;

//TODO Transform into multipart