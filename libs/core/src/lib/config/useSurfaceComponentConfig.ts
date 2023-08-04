import { IS_DEV, SoperioComponent, useDarkMode } from "@soperio/react";
import { SurfaceScheme } from "@valerya/surface";
import deepmerge from "deepmerge";
import { useSurface } from "../hooks/useSurface";
import { ThemeSurfaceScheme } from "../surface/types";
import { ExtendSurfaceComponentConfig, SurfaceComponentConfig } from "./SurfaceComponentConfig";
import { mergeStateProps } from "./mergeStateProps";
import { useMergedComponentConfig } from "./useMergeComponentConfig";


type KeysOf<T> =
  {
    [Property in keyof T]: string
  }

// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction<T extends Function = Function>(
  value: any,
): value is T
{
  return typeof value === "function";
}

function runIfFn<T>(
  // Won't work because of fucking generic with type Config
  // valueOrFn: T | ((...fnArgs: any[]) => T),
  valueOrFn: any | ((...fnArgs: any[]) => any),
  ...args: any[]
): T
{
  return isFunction(valueOrFn) ? valueOrFn(...args) as T : valueOrFn as T;
}

export function useSurfaceComponentConfig<T extends SoperioComponent, P extends SurfaceComponentConfig>(
  component = "",
  surface: ThemeSurfaceScheme | SurfaceScheme | undefined,
  customConfig: ExtendSurfaceComponentConfig<P> | undefined,
  traitsConfig: Partial<KeysOf<P["traits"]>> = {} as KeysOf<P["traits"]>,
  props?: T): { scheme: SurfaceScheme, styles: Partial<T> }
{
  const darkMode = useDarkMode();

  const defaultConfig = useMergedComponentConfig(component) as P

  if (!defaultConfig && IS_DEV)
    console.warn(`[Soperio] ${component} default config does not exist. Make sure to register it by calling Soperio.registerComponent().`);

  let config: SurfaceComponentConfig | null = null

  // If we have a custom config set as a prop on this component
  // Merge it with the config merged earlier
  if (customConfig)
  {
    const c = customConfig.config as P

    // User wants to extend the current config
    // So merge objects
    if (customConfig.mode === "extends")
      config = deepmerge(defaultConfig ?? {}, c) as P;
    // User wants a brand new config, use custom config
    else
      config = c;
  }
  // Else use the merged config from earlier
  else if (defaultConfig)
  {
    config = defaultConfig
  }

  const _surface = useSurface(surface ?? config?.defaultScheme);

  if (config)
    return mergeProps(config, traitsConfig, props, _surface, darkMode);

  return {
    scheme: _surface,
    styles: {}
  }// as T;
}

// Get the right set of soperio props from the config traits (variant, size, corners, ...)
function mergeProps<T extends SoperioComponent, P extends SurfaceComponentConfig>(
  config: SurfaceComponentConfig,
  traitsConfig: Partial<KeysOf<P["traits"]>>,
  props: any,
  surface: SurfaceScheme,
  darkMode: boolean
): any
{
  // Here we must merge:
  // - the default props from the config
  // - the selected traits props
  // - the state props
  // - the user defined props on the component


  // Let's start with the component default values
  let finalProps = { ...(runIfFn(config.defaultProps, surface, darkMode) as T) };

  const defaultTraits = config.defaultTraits

  const c = config as any

  const traits = c.traits

  for (const key in traitsConfig)
  {
    const trait = traits[key]
    const traitName = traitsConfig[key] ?? defaultTraits?.[key]

    if (trait && traitName)
    {
      const configProps = runIfFn(trait[traitName], surface, darkMode) as T;

      if (configProps)
        finalProps = deepmerge(finalProps, configProps) as T
    }
  }

  return {
    styles: mergeStateProps(finalProps, props),
    scheme: surface
  }
}
