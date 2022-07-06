import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig, MultiPartComponentConfig, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { CardFooterProps } from "./Card";

type TraitProps = ComponentTypings<"Soperio.Card">;

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState;

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type CardComponentProps = {
  card: SoperioComponent,
  header: SoperioComponent, // CardHeaderThemeProps
  content: SoperioComponent, // CardContentThemeProps
  footer: CardFooterProps
}

export type Config = MultiPartComponentConfig<TraitProps, CardComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendMultiPartComponentConfig<Config>;
