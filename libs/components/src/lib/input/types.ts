import { ComponentConfig, ComponentTypings, DisabledState, DisabledThemeProps, ExtendComponentConfig, InvalidState, InvalidThemeProps, ValidState, ValidThemeProps } from "@katia/core";
import { SoperioComponent } from "@soperio/react";

type TraitProps = ComponentTypings<"Soperio.Input">;

export type ComponentProps = SoperioComponent & TraitProps & ValidState & InvalidState & DisabledState;

interface ConfigStateProps extends ValidThemeProps, InvalidThemeProps, DisabledThemeProps { }

export type Config = ComponentConfig<TraitProps, ConfigStateProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
