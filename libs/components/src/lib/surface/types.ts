import { ParentComponent, SoperioComponent } from "@soperio/react";
import { SurfaceComponentConfig, ExtendSurfaceComponentConfig, ActiveDisabledThemeProps } from "@valerya/core";
import { ActiveState, ActiveThemeProps, DisabledState, DisabledThemeProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@valerya/core";
import { ComponentTypings } from "@valerya/core";

export type TraitProps = ComponentTypings<"Valerya.Surface">

export type ComponentProps = SoperioComponent & ParentComponent & TraitProps & ActiveState & SelectedState & DisabledState;

interface ConfigStateProps extends ActiveThemeProps, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps, ActiveDisabledThemeProps { }

export type Config = SurfaceComponentConfig<TraitProps, ComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendSurfaceComponentConfig<Config>;