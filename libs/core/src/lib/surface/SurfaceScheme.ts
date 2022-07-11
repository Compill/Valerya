import { Color } from "@soperio/react"

export interface SurfaceSchemeSet
{
  main: SurfaceScheme,
  mainInverse: SurfaceScheme,
  mainLayer: SurfaceScheme,
  alt: SurfaceScheme
  altInverse: SurfaceScheme
}

export interface SurfaceColorSet
{
  color: Color,
  onColor: Color
}

export interface SurfaceScheme extends SurfaceColorSet
{
  selected: SurfaceColorSet
  active: SurfaceColorSet,
  pressed: SurfaceColorSet,
  disabled: SurfaceColorSet,
  hover: SurfaceColorSet &
  {
    selected: SurfaceColorSet,
    active: SurfaceColorSet,
  }
}
