import { MultiPartComponentConfig2, ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig2, HTMLButtonProps, HTMLDivProps, RightJoinProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, ThemeSurfaceScheme } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { SurfaceProps, SurfaceSchemeProps } from "../surface";


type TraitProps = ComponentTypings<"Soperio.Slider">

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState & Omit<SurfaceSchemeProps, "schemeVariant" | "hoverable"> & RightJoinProps<HTMLButtonProps, HTMLDivProps>; 

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps, Omit<SurfaceSchemeProps, "scheme"> { }

type SliderComponentProps = {
    slider: SoperioComponent,
    rail: SoperioComponent & SurfaceProps,
    track: SoperioComponent & SurfaceProps, 
    thumb: SoperioComponent & SurfaceProps 
}

export type Config = MultiPartComponentConfig2<TraitProps, SliderComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendMultiPartComponentConfig2<Config>;
