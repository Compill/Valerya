import { IS_DEV, SoperioComponent, useDarkMode } from "@soperio/react";
import deepmerge from "deepmerge";
import { ComponentConfig, ExtendComponentConfig } from "../config/ComponentConfig";
import { useMergedComponentConfig } from "./useMergeComponentConfig";
import { OmitStates, mergeStateProps } from "./mergeStateProps";


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

export function useComponentConfig<T extends SoperioComponent, P extends ComponentConfig>(
  component = "",
  customConfig: ExtendComponentConfig<P> | undefined,
  traitsConfig: Partial<KeysOf<P["traits"]>> = {} as KeysOf<P["traits"]>,
  props?: T): T
{
  const darkMode = useDarkMode();

  const defaultConfig = useMergedComponentConfig(component) as P

  if (!defaultConfig && IS_DEV)
    console.warn(`[Soperio] ${component} default config does not exist. Make sure to register it by calling Soperio.registerComponent().`);


  let config

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

  if (config)
    return mergeProps(config, traitsConfig, props, darkMode) as T;

  return {} as T;
}

// Get the right set of soperio props from the config traits (variant, size, corners, ...)
function mergeProps<T extends SoperioComponent, P extends ComponentConfig>(
  config: ComponentConfig,
  traitsConfig: Partial<KeysOf<P["traits"]>>,
  props: any,
  darkMode: boolean
): OmitStates<T>
{
  // Here we must merge:
  // - the default props from the config
  // - the selected traits props
  // - the state props
  // - the user defined props on the component


  // Let's start with the component default values
  let finalProps = { ...(config.defaultProps as T) };

  const defaultTraits = config.defaultTraits

  const c = config as any

  const traits = c.traits

  for (const key in traitsConfig)
  {
    const trait = traits[key]
    const traitName = traitsConfig[key] ?? defaultTraits?.[key]

    if (trait && traitName)
    {
      const configProps = runIfFn(trait[traitName], darkMode) as T;

      if (configProps)
        finalProps = deepmerge(finalProps, configProps) as T
    }
  }

  return mergeStateProps(finalProps, props)
}
