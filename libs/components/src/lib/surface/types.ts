import { ParentComponent, SoperioComponent } from "@soperio/react";
import { ComponentConfig2, ExtendComponentConfig2 } from "@katia/core";
import { ActiveState, ActiveThemeProps, DisabledState, DisabledThemeProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@katia/core";
import { ComponentTypings } from "@katia/core";

type TraitProps = ComponentTypings<"Soperio.Surface">

export type ComponentProps = SoperioComponent & ParentComponent & TraitProps & ActiveState & SelectedState & DisabledState;

interface ConfigStateProps extends ActiveThemeProps, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

export type Config = ComponentConfig2<TraitProps, ConfigStateProps>;
export type ExtendConfig = ExtendComponentConfig2<Config>;
