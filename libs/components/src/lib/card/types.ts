import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartSurfaceComponentConfig, MultiPartSurfaceComponentConfig, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { HoverableSurfaceBasedComponent, LayerProps } from "../surface";
import { CardBodyProps, CardFooterProps, CardHeaderProps } from "./Card";

type TraitProps = ComponentTypings<"Katia.Card">;

export type ComponentProps = HoverableSurfaceBasedComponent<TraitProps & SelectedState & DisabledState>

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type CardComponentProps = {
  card: ComponentProps & LayerProps,
  header: CardHeaderProps,
  body: CardBodyProps,
  footer: CardFooterProps,
  divider: SoperioComponent
}

export type Config = MultiPartSurfaceComponentConfig<TraitProps, CardComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendMultiPartSurfaceComponentConfig<Config>;
