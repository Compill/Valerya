import { SoperioComponent } from "@soperio/react";
import { ComponentConfig, ComponentTypings, ExtendComponentConfig } from "@valerya/core";


type TraitProps = ComponentTypings<"Valerya.IconButton">;

export type ComponentProps = SoperioComponent & TraitProps

export type Config = ComponentConfig<TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
