import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartSurfaceComponentConfig, HTMLDivProps, HTMLInputProps, MultiPartSurfaceComponentConfig, RightJoinProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { LayerProps, SurfaceBasedComponent, SurfaceProps } from "../surface";


type TraitProps = ComponentTypings<"Soperio.Slider">

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
