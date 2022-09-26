import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartSurfaceComponentConfig, MultiPartSurfaceComponentConfig, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@valerya/core";
import { SoperioComponent } from "@soperio/react";
import { ButtonProps } from "../button";
import { DividerProps } from "../divider";
import { SurfaceBasedComponent, SurfaceProps } from "../surface";

type TraitProps = ComponentTypings<"Valerya.Accordion">;

export type ComponentProps = SurfaceBasedComponent<TraitProps & SelectedState & DisabledState>;

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type AccordionComponentProps = {
  accordion: SoperioComponent,
  item: SurfaceProps, // AccordionHeaderThemeProps
  itemHeader: SoperioComponent, // AccordionHeaderThemeProps
  itemHeaderLabel: SoperioComponent, // AccordionHeaderThemeProps
  itemHeaderCollapseButton: SoperioComponent & ButtonProps,
  itemContent: SoperioComponent, // AccordionContentThemeProps
  divider: DividerProps,
}

export type Config = MultiPartSurfaceComponentConfig<TraitProps, AccordionComponentProps, ConfigStateProps>;
export type ExtendConfig = ExtendMultiPartSurfaceComponentConfig<Config>;
