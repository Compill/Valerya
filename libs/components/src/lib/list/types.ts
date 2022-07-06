import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig, MultiPartComponentConfig, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@katia/core";
import { SoperioComponent } from "@soperio/react";

type TraitProps = ComponentTypings<"Soperio.List">;

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState;

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type ListComponentProps = {
    list: SoperioComponent,
    listItem: SoperioComponent,
    listItemIcon: SoperioComponent,
}

export type Config = MultiPartComponentConfig<TraitProps, ListComponentProps, ConfigStateProps>
export type ExtendConfig = ExtendMultiPartComponentConfig<Config>
