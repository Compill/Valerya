import { HTMLButtonProps, HTMLDivProps, RightJoinProps, SoperioComponent } from "@soperio/react";
import { ComponentConfig, ComponentTypings, ExtendComponentConfig } from "@valerya/core";


type TraitProps = ComponentTypings<"Valerya.IconButton">;

export type ComponentProps = SoperioComponent & RightJoinProps<HTMLButtonProps, HTMLDivProps>

export type Config = ComponentConfig<TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
