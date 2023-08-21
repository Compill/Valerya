import { ComponentManager, ThemeSurfaceScheme, useHover, useSurfaceComponentConfig } from "@valerya/core";
import { SurfaceScheme } from "@valerya/surface"
import { forwardRefWithAs, SoperioComponent, HTMLDivProps, ResponsiveProps, useResponsiveProp } from "@soperio/react";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig, TraitProps } from "./types";
import { mergeRefs } from "@valerya/react-utils";
import React from "react";

const COMPONENT_ID = "Valerya.Surface"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

// TODO Since I now have a Surface component, I could also create a Layer component
// That will use layer color schemes (e.g just a bg color and content color)
// Something like <Layer depth="0"></Layer>
// depth being the stack index/z-index of the layer


type SurfaceSchemeProps = TraitProps &
{
  scheme?: ThemeSurfaceScheme | SurfaceScheme,
  hover_scheme?: ThemeSurfaceScheme | SurfaceScheme,
  hoverable?: boolean
}

export type LayerProps = TraitProps // Alias
export type SurfaceProps = Omit<ComponentProps, "layer"> & ResponsiveProps<Omit<SurfaceSchemeProps, "layer">>

export type SurfaceBasedComponent<T = any> = T & Omit<SurfaceProps, "hoverable">
export type HoverableSurfaceBasedComponent<T = any> = T & SurfaceProps & { hoverable?: boolean }

export interface SurfaceComponentProps extends ComponentProps, HTMLDivProps, SurfaceSchemeProps
{
  config?: ExtendConfig;
  hoverable?: boolean
}

export const Surface = forwardRefWithAs<"div", SurfaceComponentProps>((
  {
    hoverable,
    layer,
    config,
    ...props
  }: SurfaceComponentProps, ref) =>
{
  const hoverRef = React.useRef(null)
  const isHover = useHover(hoverRef)
  const scheme = useResponsiveProp("scheme", props)
  const hoverScheme = useResponsiveProp("hover_scheme", props)
  const { styles } = useSurfaceComponentConfig(COMPONENT_ID, isHover && !props.disabled ? hoverScheme ?? scheme : scheme, config, { layer }, props)

  const filteredStyles: SoperioComponent = { ...styles }

  if (props.disabled || !hoverable)
  {
    Object.keys(filteredStyles).forEach((key) =>
    {
      if (key.includes("hover_"))
        delete (filteredStyles as any)[key]
    })
  }

  const Component = props.as ?? "div"

  return (
    <Component
      {...(!props.disabled && (hoverable || props.onClick) ? { cursor: "pointer" } : null)}
      {...filteredStyles}
      {...props}
      ref={mergeRefs(ref, hoverRef)}
    >
      {props.children}
    </Component>
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
