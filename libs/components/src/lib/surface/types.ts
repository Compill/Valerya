import { ParentComponent, SoperioComponent } from "@soperio/react";
import { ComponentConfig2, ExtendComponentConfig2 } from "@katia/core";
import { ActiveState, ActiveThemeProps, DisabledState, DisabledThemeProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@katia/core";
import { ComponentTypings } from "@katia/core";

export type TraitProps = ComponentTypings<"Soperio.Surface">

export type ComponentProps = SoperioComponent & ParentComponent & TraitProps & ActiveState & SelectedState & DisabledState;

interface ConfigStateProps extends ActiveThemeProps, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

export type Config = ComponentConfig2<TraitProps, ComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendComponentConfig2<Config>;

export type SurfaceVariantProp = Pick<TraitProps, "schemeVariant">
