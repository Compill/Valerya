import { ComponentConfig, ComponentTypings, DisabledState, ExtendComponentConfig, SelectedState } from "@valerya/core";
import { ButtonProps } from "../button";
import { HoverableSurfaceBasedComponent } from "../surface";
import { HTMLButtonProps, HTMLDivProps, RightJoinProps } from "@soperio/react";


type TraitProps = ComponentTypings<"Valerya.IconButton">;

export type ComponentProps = HoverableSurfaceBasedComponent<TraitProps & SelectedState & DisabledState & RightJoinProps<HTMLButtonProps, HTMLDivProps>>

export type Config = ComponentConfig<TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
