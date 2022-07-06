import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, ComponentConfig, ComponentTypings, DisabledState, DisabledThemeProps, ExtendComponentConfig } from "@katia/core";
import { SoperioComponent } from "@soperio/react";

type TraitProps = ComponentTypings<"Soperio.Checkbox">

export type ComponentProps = SoperioComponent & TraitProps & CheckedState & DisabledState;

interface ConfigStateProps extends CheckedThemeProps, DisabledThemeProps, CheckedDisabledThemeProps { }

export type Config = ComponentConfig<TraitProps, ConfigStateProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
