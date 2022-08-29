import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartSurfaceComponentConfig, MultiPartSurfaceComponentConfig } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { SurfaceBasedComponent } from "../surface";

type TraitProps = ComponentTypings<"Katia.Switch">;

export type ComponentProps = SurfaceBasedComponent<TraitProps  & DisabledState & CheckedState>

interface ConfigStateProps extends DisabledThemeProps, CheckedThemeProps, CheckedDisabledThemeProps { }

type SwitchComponentProps = {
  switch: SoperioComponent,
  track: SoperioComponent, // SwitchHeaderThemeProps
  thumb: SoperioComponent, // SwitchContentThemeProps
  label: SoperioComponent, // SwitchFooterThemeProps
}

export type Config = MultiPartSurfaceComponentConfig<TraitProps, SwitchComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendMultiPartSurfaceComponentConfig<Config>;
