
import { ComponentManager, SurfaceSchemeSet, useComponentConfig2 } from "@katia/core";
import { HTMLDivProps, SoperioComponent } from "@soperio/react";
import React from "react";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig, TraitProps } from "./types";

const COMPONENT_ID = "Soperio.Surface"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

// TODO Rename folders, all in lowercase

// TODO Since I now have a Surface component, I could also create a Layer component
// That will use layer color schemes (e.g just a bg color and content color)
// Something like <Layer depth="0"></Layer>
// depth being the stack index/z-index of the layer

// TODO Make all component extends SurfaceSchemeProps instead of redefining the
// scheme property

export interface SurfaceSchemeProps extends TraitProps
{
  scheme?: /*Extract<keyof ThemingToken<"surfaces">, string> | */SurfaceSchemeSet,
}

export interface SurfaceProps extends ComponentProps, HTMLDivProps
{
  scheme?: /*Extract<keyof ThemingToken<"surfaces">, string> | */SurfaceSchemeSet,
  // variant is already in ComponentProps
  config?: ExtendConfig;
  hoverable?: boolean
}

// scheme
// schemePair
// schemeMix
// scheme
// schemeVariant
// "none" | "main" | "mainInverse" | "mainInverseHoverMain" | "mainLayer" | "mainLayerHoverMain" | "alt" | "altInverse" | "altHoverMain"

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>((
  {
    scheme,// = "primary",
    hoverable,
    schemeVariant,
    config,
    ...props
  }: SurfaceProps, ref) =>
{
  const styles = useComponentConfig2(COMPONENT_ID, scheme, config, { schemeVariant }, props)

  const filteredStyles:SoperioComponent = { ...styles }

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
