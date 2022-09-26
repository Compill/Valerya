import { ComponentManager, ThemeSurfaceScheme, useSurfaceComponentConfig } from "@valerya/core";
import { SurfaceScheme } from "@valerya/surface"
import { forwardRef, SoperioComponent, HTMLDivProps } from "@soperio/react";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig, TraitProps } from "./types";

const COMPONENT_ID = "Valerya.Surface"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

// TODO Since I now have a Surface component, I could also create a Layer component
// That will use layer color schemes (e.g just a bg color and content color)
// Something like <Layer depth="0"></Layer>
// depth being the stack index/z-index of the layer

interface SurfaceSchemeProps extends TraitProps
{
  scheme?: ThemeSurfaceScheme | SurfaceScheme,
  hoverable?: boolean
}

export type LayerProps = TraitProps // Alias
export type SurfaceProps = Omit<ComponentProps, "layer"> & Omit<SurfaceSchemeProps, "layer">

export type SurfaceBasedComponent<T = {}> = T & Omit<SurfaceProps, "hoverable">
export type HoverableSurfaceBasedComponent<T = {}> = T & SurfaceProps & { hoverable?: boolean }

export interface SurfaceComponentProps extends ComponentProps, HTMLDivProps, SurfaceSchemeProps
{
  config?: ExtendConfig;
  hoverable?: boolean
}

export const Surface = forwardRef<"div", SurfaceComponentProps>((
  {
    scheme,
    hoverable,
    layer,
    config,
    ...props
  }: SurfaceComponentProps, ref) =>
{
  const { styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { layer }, props)

  const filteredStyles: SoperioComponent = { ...styles }

  if (!hoverable)
  {
    Object.keys(filteredStyles).forEach((key) =>
    {
      if (key.includes("hover_"))
        delete (filteredStyles as any)[key]
    })
  }

  return (
    <div
      {...(hoverable || props.onClick ? { cursor: "pointer" } : null)}
      {...filteredStyles}
      {...props}
      ref={ref}
    >
      {props.children}
    </div>
  )
})

/*
  <Surface scheme="primary" variant="alt">
    {children}
  </Surface>
*/

/*
  <Surface scheme="primary" variant="alt">
    (colorScheme) => (
      <span color="colorScheme.onColor">Hello</span>
      <Icon svg="" color="colorScheme.onColor" />
    ))
  </Surface>
*/

/*
  const children = (colorScheme) => (
      <span color="colorScheme.onColor">Hello</span>
      <Icon svg="" color="colorScheme.onColor" />
    ))

  <Surface scheme="primary" variant="alt">
    {children}
  </Surface>
*/
