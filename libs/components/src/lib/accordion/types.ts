import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig, MultiPartComponentConfig, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { ButtonProps } from "../button";

type TraitProps = ComponentTypings<"Soperio.Accordion">;

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState;

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type AccordionComponentProps = {
  accordion: SoperioComponent,
  item: SoperioComponent, // AccordionHeaderThemeProps
  itemHeader: SoperioComponent, // AccordionHeaderThemeProps
  itemHeaderLabel: SoperioComponent, // AccordionHeaderThemeProps
  itemHeaderCollapseButton: SoperioComponent & ButtonProps,
  itemContent: SoperioComponent, // AccordionContentThemeProps
}

export type Config = MultiPartComponentConfig<TraitProps, AccordionComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendMultiPartComponentConfig<Config>;
