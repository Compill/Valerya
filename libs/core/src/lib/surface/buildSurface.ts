import { CorePalette, Scheme } from "@material/material-color-utilities"
import { alpha, ARGBToHex, colorBlend, intToRGBA, RGBA, RGBAToHex } from "./colorUtils"
import { SurfaceScheme, SurfaceSchemeSet } from "./SurfaceScheme"


// TODO Build Chakra-UI / Soperio UI style components
// E.g use alpha to set colors and states
// so, instead of buildSurfaceFromColor, I would rename it
// buildMaterialStyleSurface and create
// buildAlphaBasedStyleSurface
// buildBootstrapStyleSurface
// ...



type BuildSurfaceOptions =
  {
    autoGenerateColors?: "material" | "alpha",
    darkMode?: boolean,
    hoverStatePercent?: number
    activeStatePercent?: number
    pressedStatePercent?: number
    selectedStatePercent?: number
    disabledStatePercent?: number
    disabledContentStatePercent?: number
  }

interface PaletteOptions
{
  darkMode?: boolean,
}

function buildSurfaceScheme(color: RGBA, onColor: RGBA, states: States): SurfaceScheme
{
  const primaryHex = RGBAToHex(color)
  const onPrimaryHex = RGBAToHex(onColor)

  return {
    color: primaryHex,
    onColor: onPrimaryHex,
    active: {
      color: blend(color, alpha(onColor, states.active)),
      onColor: onPrimaryHex,
    },
    selected: {
      color: blend(color, alpha(onColor, states.selected)),
      onColor: onPrimaryHex,
    },
    pressed: {
      color: blend(color, alpha(onColor, states.pressed)),
      onColor: onPrimaryHex,
    },
    disabled: {
      color: RGBAToHex(alpha(color, states.disabledLayer)),
      onColor: RGBAToHex(alpha(onColor, states.disabledContent)),
    },
    hover: {
      color: blend(color, alpha(onColor, states.hover)),
      onColor: onPrimaryHex,
      active: {
        color: blend(color, alpha(onColor, states.hover), alpha(onColor, states.active)),
        onColor: onPrimaryHex,
      },
      selected: {
        color: blend(color, alpha(onColor, states.hover), alpha(onColor, states.selected)),
        onColor: onPrimaryHex,
      }
    },
  }
}

function blend(color: RGBA, ...otherColors: RGBA[]): string
{
  return RGBAToHex(colorBlend.call(null, color, ...otherColors))
}

interface ColorPalette
{
  "0": string,
  "10": string,
  "20": string,
  "30": string,
  "40": string,
  "50": string,
  "60": string,
  "70": string,
  "80": string,
  "90": string,
  "95": string,
  "99": string,
  "100": string,
}

interface States
{
  hover: number,
  pressed: number,
  selected: number,
  active: number,
  disabledLayer: number,
  disabledContent: number,
}

/*
  Selected components often use the surface variant role as a container color while keeping the content color unchanged.
  Activated components use the secondary container color for the component container and change the content color to on-secondary container.

  A disabled state communicates when a component or element isn’t interactive and should be deemphasized in a UI.
  Disabled states use on-surface for both its content and container at 38% (content) and 12% (container) opacities.
*/

function generatePalette(color: number, options: PaletteOptions): ColorPalette
{
  const corePalette = CorePalette.of(color).a1

  const palette: ColorPalette = {
    "0": ARGBToHex(corePalette.tone(0)),
    "10": ARGBToHex(corePalette.tone(10)),
    "20": ARGBToHex(corePalette.tone(20)),
    "30": ARGBToHex(corePalette.tone(30)),
    "40": ARGBToHex(corePalette.tone(40)),
    "50": ARGBToHex(corePalette.tone(50)),
    "60": ARGBToHex(corePalette.tone(60)),
    "70": ARGBToHex(corePalette.tone(70)),
    "80": ARGBToHex(corePalette.tone(80)),
    "90": ARGBToHex(corePalette.tone(90)),
    "95": ARGBToHex(corePalette.tone(95)),
    "99": ARGBToHex(corePalette.tone(99)),
    "100": ARGBToHex(corePalette.tone(100)),
  }

  return palette
}

// TODO Build color palette from color
// Then build surface from options
// Either a material style surface
// Or a Chakra-UI style surface (like the one I did with colorThemes)
export function buildSurfaceFromColor(color: number, options?: BuildSurfaceOptions): SurfaceSchemeSet
{
  const scheme = options?.darkMode ? Scheme.dark(color) : Scheme.light(color)

  const primaryRGBA = intToRGBA(scheme.primary)
  const primaryContainerRGBA = intToRGBA(scheme.primaryContainer)
  const onPrimaryRGBA = intToRGBA(scheme.onPrimary)
  const onPrimaryContainerRGBA = intToRGBA(scheme.onPrimaryContainer)

  const states = {
    hover: options?.hoverStatePercent ?? 0.08,
    pressed: options?.hoverStatePercent ?? 0.12,
    selected: options?.hoverStatePercent ?? 0.16,
    active: options?.hoverStatePercent ?? 0.20,
    disabledLayer: options?.hoverStatePercent ?? 0.12,
    disabledContent: options?.hoverStatePercent ?? 0.38
  }

  return {
    main: buildSurfaceScheme(primaryRGBA, onPrimaryRGBA, states),
    alt: buildSurfaceScheme(primaryContainerRGBA, onPrimaryContainerRGBA, states),
    mainInverse: buildSurfaceScheme(onPrimaryRGBA, primaryRGBA, states),
    altInverse: buildSurfaceScheme(onPrimaryContainerRGBA, primaryContainerRGBA, states),
    mainLayer: buildSurfaceScheme({ r: 0, g: 0, b: 0, a: 0 }, primaryRGBA, states),
  }
}
