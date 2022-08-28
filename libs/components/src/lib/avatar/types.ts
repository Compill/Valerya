import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartSurfaceComponentConfig, MultiPartSurfaceComponentConfig } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { HoverableSurfaceBasedComponent } from "../surface";

type TraitProps = ComponentTypings<"Katia.Avatar">;

export type ComponentProps = HoverableSurfaceBasedComponent<TraitProps & DisabledState & CheckedState>

interface ConfigStateProps extends DisabledThemeProps, CheckedThemeProps, CheckedDisabledThemeProps { }

type AvatarComponentProps = {
  avatar: SoperioComponent,
  image: SoperioComponent, // SwitchHeaderThemeProps
  initials: SoperioComponent,
  badge: SoperioComponent,  // SwitchContentThemeProps
}

export type Config = MultiPartSurfaceComponentConfig<TraitProps, AvatarComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendMultiPartSurfaceComponentConfig<Config>;
