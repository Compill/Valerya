import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig, MultiPartComponentConfig } from "@katia/core";
import { SoperioComponent } from "@soperio/react";

type TraitProps = ComponentTypings<"Soperio.Avatar">;

export type ComponentProps = SoperioComponent & TraitProps & DisabledState & CheckedState

interface ConfigStateProps extends DisabledThemeProps, CheckedThemeProps, CheckedDisabledThemeProps { }

type AvatarComponentProps = {
  avatar: SoperioComponent,
  image: SoperioComponent, // SwitchHeaderThemeProps
  initials: SoperioComponent,
  badge: SoperioComponent,  // SwitchContentThemeProps
}

export type Config = MultiPartComponentConfig<TraitProps, AvatarComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendMultiPartComponentConfig<Config>;
