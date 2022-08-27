import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartSurfaceComponentConfig, HTMLDivProps, HTMLInputProps, MultiPartSurfaceComponentConfig, RightJoinProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { SurfaceProps, SurfaceSchemeProps } from "../surface";


type TraitProps = ComponentTypings<"Soperio.Slider">

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState & Omit<SurfaceSchemeProps, "schemeVariant" | "hoverable"> & RightJoinProps<Omit<HTMLInputProps, "size">, HTMLDivProps>; 

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps, Omit<SurfaceSchemeProps, "scheme"> { }

type SliderComponentProps = {
    slider: SoperioComponent,
    rail: SoperioComponent & SurfaceProps,
    track: SoperioComponent & SurfaceProps, 
    thumb: SoperioComponent & SurfaceProps,
    thumbDragging: SoperioComponent & SurfaceProps 
}

export type Config = MultiPartSurfaceComponentConfig<TraitProps, SliderComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendMultiPartSurfaceComponentConfig<Config>;
