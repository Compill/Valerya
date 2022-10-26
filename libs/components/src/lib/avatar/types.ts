import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartSurfaceComponentConfig, MultiPartSurfaceComponentConfig } from "@valerya/core";
import { SoperioComponent } from "@soperio/react";
import { HoverableSurfaceBasedComponent } from "../surface";

type TraitProps = ComponentTypings<"Valerya.Avatar">;

export type ComponentProps = HoverableSurfaceBasedComponent<TraitProps & DisabledState & CheckedState>

interface ConfigStateProps extends DisabledThemeProps, CheckedThemeProps, CheckedDisabledThemeProps { }

type AvatarComponentProps = {
  avatar: SoperioComponent,
  image: SoperioComponent,
  initials: SoperioComponent,
  badge: SoperioComponent,
}

export type Config = MultiPartSurfaceComponentConfig<TraitProps, AvatarComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendMultiPartSurfaceComponentConfig<Config>;
