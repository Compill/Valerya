import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartSurfaceComponentConfig, MultiPartSurfaceComponentConfig, SelectedDisabledThemeProps, SelectedThemeProps } from "@valerya/core";
import { SoperioComponent } from "@soperio/react";
import { DividerProps } from "../divider";
import { LayerProps, SurfaceBasedComponent, SurfaceProps } from "../surface";

type TraitProps = ComponentTypings<"Valerya.List">;

export type ComponentProps = SurfaceBasedComponent<TraitProps & DisabledState>;

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type ListComponentProps = {
    list: SoperioComponent,
    listItem: SurfaceProps,
    listItemIcon: SoperioComponent,
    divider: DividerProps,
}

export type Config = MultiPartSurfaceComponentConfig<TraitProps, ListComponentProps, ConfigStateProps>
export type ExtendConfig = ExtendMultiPartSurfaceComponentConfig<Config>
