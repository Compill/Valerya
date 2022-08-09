import { Color } from "@soperio/react"

export interface SurfaceSchemeSet
{
  main: SurfaceScheme,
  mainInv: SurfaceScheme,
  mainLayer: SurfaceScheme,
  alt: SurfaceScheme
  altInv: SurfaceScheme
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
