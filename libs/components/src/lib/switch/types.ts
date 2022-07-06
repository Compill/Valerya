import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig, MultiPartComponentConfig } from "@katia/core";
import { SoperioComponent } from "@soperio/react";

type TraitProps = ComponentTypings<"Soperio.Switch">;

export type ComponentProps = SoperioComponent & TraitProps  & DisabledState & CheckedState

interface ConfigStateProps extends DisabledThemeProps, CheckedThemeProps, CheckedDisabledThemeProps { }

type SwitchComponentProps = {
  switch: SoperioComponent,
  track: SoperioComponent, // SwitchHeaderThemeProps
  thumb: SoperioComponent, // SwitchContentThemeProps
  label: SoperioComponent, // SwitchFooterThemeProps
}

export type Config = MultiPartComponentConfig<TraitProps, SwitchComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendMultiPartComponentConfig<Config>;
