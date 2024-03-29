import { SurfaceScheme } from "@valerya/surface";
import { SoperioComponent } from "@soperio/react";
import { ThemeSurfaceScheme } from "../surface/types";
import { ComponentStateProps, NoStateProps } from "./ComponentStates";
import { ComponentTypings } from "../ComponentTypings";

type Trait<T> = SoperioComponent & T & LayerProps
type TraitFn<T> = (surface: SurfaceScheme, darkMode: boolean) => Trait<T>
type TraitConfig<T> = Trait<T> | TraitFn<T>

declare type StateAndExtraProps = ComponentStateProps & Record<string, any>;

// This type is defined in Surface component but we want to avoid 
// a circular dependency, so we redefine it here
type LayerProps = ComponentTypings<"Valerya.Surface">

// Simple component

// Basic component config
// We got two reserved keys, defaultProps and defaultTraits
// for applying the logic for setting the defaults automatically
// and then any other key to define a kind of "trait" like variant,
// size, shape, corners, etc...

export declare type SurfaceComponentConfig<
  T extends Record<string, string> = Record<string, string>, // Traits
  P extends SoperioComponent = SoperioComponent, // Component Props
  S extends StateAndExtraProps = NoStateProps
  > =
  {
    defaultScheme?: ThemeSurfaceScheme,
    defaultProps?: TraitConfig<P & S & LayerProps & { hoverable?: boolean }>;
    defaultTraits?: { [Property in keyof T]: T[Property] }
    traits?: {
      // keys = traits like variant, corners, size, ...
      [key in keyof T]?:
      {
        // For each trait, only allow trait possible values (like "default" for example)
        [Property in NonNullable<T[key]>]?: TraitConfig<P & S & LayerProps & { hoverable?: boolean }>
      };
    }
  };

// Custom component config to extends or override the theme's
// component config
export interface ExtendSurfaceComponentConfig<P extends SurfaceComponentConfig<StateAndExtraProps>>
{
  mode: "extends" | "replace";
  config: P;
}




// Multi part component
export declare type MultiPartSurfaceComponentConfig<
  T extends Record<string, string>,             // Traits
  P extends Record<string, SoperioComponent> = Record<string, SoperioComponent>,   // Component props
  S extends StateAndExtraProps = NoStateProps   // States
  > = {
    defaultScheme?: ThemeSurfaceScheme,
    subComponents: (string & keyof P)[];
    defaultProps?: { [Property in keyof P]?: TraitConfig<S & P[Property]> }
    defaultTraits?: { [Property in keyof T]: T[Property] }
    traits?: {
      // keys = traits like variant, corners, size, ...
      [key in keyof T]?:
      {
        // For each trait, only allow trait possible values (like "default" for example)
        [Property in NonNullable<T[key]>]?:
        {
          // Now, map subcomponent names to their respective types
          [Prop in keyof P]?: TraitConfig<P[Prop]>
        }
      };
    }
  };

export interface ExtendMultiPartSurfaceComponentConfig<P extends MultiPartSurfaceComponentConfig<Record<string, string>>>
{
  mode: "extends" | "replace";
  config: Omit<P, "subComponents">;
}
