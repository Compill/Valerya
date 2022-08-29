import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendSurfaceComponentConfig, InvalidState, InvalidThemeProps, SurfaceComponentConfig, ValidState, ValidThemeProps } from "@katia/core";
import { SurfaceBasedComponent } from "../surface";

type TraitProps = ComponentTypings<"Katia.Select">;

export type ComponentProps = SurfaceBasedComponent<TraitProps & ValidState & InvalidState & DisabledState>;

interface ConfigStateProps extends ValidThemeProps, InvalidThemeProps, DisabledThemeProps { }

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;
