import { HTMLSVGProps, SoperioComponent } from "@soperio/react";
import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartSurfaceComponentConfig, MultiPartSurfaceComponentConfig } from "@valerya/core";
import { HoverableSurfaceBasedComponent, LayerProps, SurfaceComponentProps } from "../surface";

type TraitProps = ComponentTypings<"Valerya.Checkbox">

export type ComponentProps = HoverableSurfaceBasedComponent<TraitProps & CheckedState & DisabledState>;

interface ConfigStateProps extends CheckedThemeProps<LayerProps>, DisabledThemeProps<LayerProps>, CheckedDisabledThemeProps<LayerProps> { }

type CheckboxComponentProps = {
    root: SoperioComponent,
    checkboxSurface: SurfaceComponentProps,
    checkboxIcon: HTMLSVGProps & SoperioComponent
    label: SoperioComponent
}

export type Config = MultiPartSurfaceComponentConfig<TraitProps, CheckboxComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendMultiPartSurfaceComponentConfig<Config>;