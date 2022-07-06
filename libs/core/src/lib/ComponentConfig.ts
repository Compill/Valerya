import { SoperioComponent, ColorTheme } from "@soperio/react";
import { ComponentStateProps, NoStateProps } from "./ComponentStates";

type Trait<T> = SoperioComponent & T
type TraitFn<T> = (theme: ColorTheme, darkMode: boolean) => Trait<T>
type TraitConfig<T> = Trait<T> | TraitFn<T>

declare type StateAndExtraProps = ComponentStateProps & Record<string, any>;


// Simple component

// Basic component config
// We got two reserved keys, defaultProps and defaultTraits
// for applying the logic for setting the defaults automatically
// and then any other key to define a kind of "trait" like variant,
// size, shape, corners, etc...

export declare type ComponentConfig<
  T extends Record<string, string> = Record<string, string>, // Traits
  S extends StateAndExtraProps = NoStateProps
> =
  {
    defaultProps?: TraitConfig<S>;
    defaultTraits?: { [Property in keyof T]: T[Property] }
    traits?: {
      // keys = traits like variant, corners, size, ...
      [key in keyof T]?:
      {
        // For each trait, only allow trait possible values (like "default" for example)
        [Property in NonNullable<T[key]>]?: TraitConfig<S>
      };
    }
  };


// Custom component config to extends or override the theme's
// component config
export interface ExtendComponentConfig<P extends ComponentConfig<StateAndExtraProps>>
{
  mode: "extends" | "replace";
  config: P;
}




// Multi part component

export declare type MultiPartComponentConfig<
  T extends Record<string, string>,             // Traits
  P extends Record<string, SoperioComponent> = Record<string, SoperioComponent>,   // Component props
  S extends StateAndExtraProps = NoStateProps   // States
  > = {
    subComponents: (keyof P)[];
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

/*
  {
    traits:
    {
      variant:
      {
        default:
        {
          header:
          {
            ...SoperioComponent props
          },
          footer:
          {
            ...SoperioComponent props
          }
        }
      }
    }
  }

*/

export interface ExtendMultiPartComponentConfig<P extends MultiPartComponentConfig<Record<string, string>>>
{
  mode: "extends" | "replace";
  config: Omit<P, "subComponents">;
}
