import { ParentComponent, SoperioComponent } from "@soperio/react";
import { SurfaceComponentConfig, ExtendSurfaceComponentConfig } from "@katia/core";
import { ActiveState, ActiveThemeProps, DisabledState, DisabledThemeProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@katia/core";
import { ComponentTypings } from "@katia/core";

export type TraitProps = ComponentTypings<"Soperio.Surface">

export type ComponentProps = SoperioComponent & ParentComponent & TraitProps & ActiveState & SelectedState & DisabledState;

interface ConfigStateProps extends ActiveThemeProps, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;

export type SurfaceSchemeVariant = Pick<TraitProps, "schemeVariant">
