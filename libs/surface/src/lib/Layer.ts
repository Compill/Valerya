import { Color } from "@soperio/react"

// A surface is a set of layer variations
// A layer is an association of background and foreground colors
// Along with states possibilities

export interface LayerState
{
  color: Color,
  onColor: Color
}

export interface Layer extends LayerState
{
  selected: LayerState
  active: LayerState,
  pressed: LayerState,
  disabled: LayerState &
  {
    selected: LayerState,
    active: LayerState,
  },
  hover: LayerState &
  {
    selected: LayerState,
    active: LayerState,
  }
}

export interface LayerScheme
{
  main: Layer,
  mainInv: Layer,
  mainLayer: Layer,
  alt: Layer
  altInv: Layer
}


/*

interface SurfaceScheme
{
  palette: PaletteScheme,
  layers: LayerScheme
}

Surface Component
{
  theme
  layer
}

Button
{
  theme
}

+ layer in config

*/