import { SurfaceScheme } from "@katia/surface";
import { IS_DEV, SoperioComponent, useDarkMode, useTheme } from "@soperio/react";
import deepmerge from "deepmerge";
import { ComponentManager } from "../config/ComponentManager";
import { useSurface } from "../hooks/useSurface";
import { ThemeSurfaceScheme } from "../surface/types";
import { ComponentState, ComponentThemeState } from "./ComponentStates";
import { ExtendMultiPartSurfaceComponentConfig, MultiPartSurfaceComponentConfig, SurfaceComponentConfig } from "./SurfaceComponentConfig";

type KeysOf<T> =
  {
    [Property in keyof T]: string
  }

type OmitStates<T> = Omit<T, "active" | "checked" | "disabled" | "invalid" | "selected" | "valid" | "activeDisabled" | "checkedDisabled" | "selectedDisabled">

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

function useMergedComponentConfig(component: string)
{
  const sTheme = useTheme()

  const themeConfig = sTheme.components?.[component]
  const defaultConfig = ComponentManager.getComponentConfig(component) as MultiPartSurfaceComponentConfig<Record<string, string>>

  return themeConfig ? deepmerge(defaultConfig, themeConfig as any) : defaultConfig
}

type PartProps<P extends Record<string, SoperioComponent>> = {
  scheme: SurfaceScheme,
  styles: {
    [Property in keyof P]?: SoperioComponent;
  }
};

export function useMultiPartSurfaceComponentConfig<T, C extends Record<string, SoperioComponent>, P extends MultiPartSurfaceComponentConfig<Record<string, string>, C>>(
  component = "",
  surface: ThemeSurfaceScheme | SurfaceScheme | undefined,
  customConfig: ExtendMultiPartSurfaceComponentConfig<P> | undefined,
  traitsConfig: Partial<KeysOf<P["traits"]>> = {} as KeysOf<P["traits"]>,
  props?: T): { scheme: SurfaceScheme } & PartProps<C>
{
  const darkMode = useDarkMode();
  const defaultConfig = useMergedComponentConfig(component) as P

  if (!defaultConfig && IS_DEV)
    console.warn(`[Soperio] ${component} default config does not exist. Make sure to register it by calling Soperio.registerComponent().`);

  let config: P | null = null

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
    return mergeProps(config, traitsConfig, props, _surface, darkMode)

  return {
    scheme: _surface,
    styles: {}
  }
}

// Get the right set of soperio props from the config traits (variant, size, corners, ...)
function mergeProps<T extends SoperioComponent, P extends SurfaceComponentConfig>(
  config: MultiPartSurfaceComponentConfig<Record<string, string>>,
  traitsConfig: Partial<KeysOf<P["traits"]>>,
  props: any,
  surface: SurfaceScheme,
  darkMode: boolean
): any
{
  const subComponents = config.subComponents

  const parsedConfig: any = {}

  for (const subComponent of subComponents)
  {
    // Let's start with the component default values
    let finalProps = { ...(config.defaultProps?.[subComponent] as any) };

    const defaultTraits = config.defaultTraits;

    const c = config as any;

    const traits = c.traits;

    for (const key in traitsConfig)
    {
      const variant = traits[key];
      const variantName = traitsConfig[key] ?? defaultTraits?.[key]

      if (variant && variantName)
      {
        const selectedVariant = variant ? variant[variantName] : null

        const configProps = selectedVariant?.[subComponent];

        if (configProps)
          finalProps = deepmerge(finalProps, runIfFn(configProps, surface, darkMode)) as T;
      }
    }

    finalProps = mergeStateProps(finalProps, props)

    parsedConfig[subComponent] = finalProps;
  }

  return {
    styles: parsedConfig,
    scheme: surface
  }
}

// Final step : merge the props with the state props
// checked, selected, disabled, ...
function mergeStateProps<T extends SoperioComponent>(configProps: any, props: any): T
{
  let finalProps = { ...configProps };

  // Remove theme states from final props
  // Soperio props don't have stateActive, stateDisabled, etc
  // only their html counterparts like disabled, selected, checked, ...
  //
  // Theme props :
  // stateDisabled: {
  //  // bunch of soperio props
  // }
  //
  // Soperio props
  // disabled: true
  delete finalProps[ComponentThemeState.VALID]
  delete finalProps[ComponentThemeState.INVALID]
  delete finalProps[ComponentThemeState.ACTIVE]
  delete finalProps[ComponentThemeState.ACTIVE_DISABLED]
  delete finalProps[ComponentThemeState.CHECKED]
  delete finalProps[ComponentThemeState.CHECKED_DISABLED]
  delete finalProps[ComponentThemeState.SELECTED]
  delete finalProps[ComponentThemeState.SELECTED_DISABLED]
  delete finalProps[ComponentThemeState.DISABLED]

  if (props[ComponentState.VALID])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.VALID] };

  if (props[ComponentState.INVALID])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.INVALID] };

  if (props[ComponentState.ACTIVE])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.ACTIVE] };

  if (props[ComponentState.CHECKED])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.CHECKED] };

  if (props[ComponentState.SELECTED])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.SELECTED] };

  if (props[ComponentState.DISABLED])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.DISABLED] };

  if (props[ComponentState.DISABLED] && props[ComponentState.ACTIVE])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.ACTIVE_DISABLED] };

  if (props[ComponentState.DISABLED] && props[ComponentState.CHECKED])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.CHECKED_DISABLED] };

  if (props[ComponentState.DISABLED] && props[ComponentState.SELECTED])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.SELECTED_DISABLED] };

  return finalProps;
}
