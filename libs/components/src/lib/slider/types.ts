import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartSurfaceComponentConfig,  MultiPartSurfaceComponentConfig, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@katia/core";
import { SoperioComponent, HTMLDivProps, HTMLInputProps, RightJoinProps } from "@soperio/react";
import { LayerProps, SurfaceBasedComponent, SurfaceProps } from "../surface";


type TraitProps = ComponentTypings<"Katia.Slider">

export type ComponentProps = SurfaceBasedComponent<SoperioComponent & TraitProps & SelectedState & DisabledState & RightJoinProps<Omit<HTMLInputProps, "size">, HTMLDivProps>>; 

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type SliderComponentProps = {
    slider: SoperioComponent,
    rail: SoperioComponent & SurfaceProps & LayerProps,
    track: SoperioComponent & SurfaceProps & LayerProps, 
    thumb: SoperioComponent & SurfaceProps & LayerProps,
    thumbDragging: SoperioComponent & LayerProps 
}

export type Config = MultiPartSurfaceComponentConfig<TraitProps, SliderComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendMultiPartSurfaceComponentConfig<Config>;
