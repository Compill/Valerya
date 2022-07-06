import { ComponentConfig, ComponentTypings, ExtendComponentConfig } from "@katia/core";
import { SoperioComponent } from "@soperio/react";


type TraitProps = ComponentTypings<"Soperio.Badge">;

export type ComponentProps = SoperioComponent & TraitProps

export type Config = ComponentConfig<TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
