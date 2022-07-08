import { CorePalette, Scheme } from "@material/material-color-utilities"
import { normal } from "color-blend"
import { SurfaceScheme, SurfaceSchemeSet } from "../SurfaceScheme"

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
      color: colorBlend(color, alpha(onColor, states.active)),
      onColor: onPrimaryHex,
    },
    selected: {
      color: colorBlend(color, alpha(onColor, states.selected)),
      onColor: onPrimaryHex,
    },
    pressed: {
      color: colorBlend(color, alpha(onColor, states.pressed)),
      onColor: onPrimaryHex,
    },
    disabled: {
      color: RGBAToHex(alpha(color, states.disabledLayer)),
      onColor: RGBAToHex(alpha(onColor, states.disabledContent)),
    },
    hover: {
      color: colorBlend(color, alpha(onColor, states.hover)),
      onColor: onPrimaryHex,
      active: {
        color: colorBlend(color, alpha(onColor, states.hover), alpha(onColor, states.active)),
        onColor: onPrimaryHex,
      },
      selected: {
        color: colorBlend(color, alpha(onColor, states.hover), alpha(onColor, states.selected)),
        onColor: onPrimaryHex,
      }
    },
  }
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

function alpha(color: RGBA, alpha: number): RGBA
{
  if (alpha < 0 || alpha > 1)
    throw new Error("Alpha must be between 0 and 1")

  return { ...color, a: alpha }
}

function ARGBToHex(color: number): string
{
  return '#' + ('000000' + (color & 0xFFFFFF).toString(16)).slice(-6);
}

function RGBAToHex(color: RGBA)
{
  let r = color.r.toString(16)
  let g = color.g.toString(16)
  let b = color.b.toString(16)
  let a = color.a.toString(16)

  if (r.length === 1) r = `0${r}`
  if (g.length === 1) g = `0${g}`
  if (b.length === 1) b = `0${b}`
  if (a.length === 1) a = `0${a}`

  return `#${r}${g}${b}${a}`
}

interface RGBA
{
  r: number,
  g: number,
  b: number,
  a: number,
}

function intToRGBA(color: number): RGBA
{
  return {
    r: color >> 16 & 255,
    g: color >> 8 & 255,
    b: color & 255,
    a: color >> 24 & 255,
  }
}

function colorBlend(color: RGBA, ...blendColors: RGBA[]): string
{
  if (!blendColors || blendColors.length === 0)
    throw new Error("colorBlend must have at least two parameters")

  let blended = normal(color, blendColors[0])

  for (let i = 1; i < blendColors.length; i++)
    blended = normal(blended, blendColors[i])

  // Blending lib returns alpha between 0 and 1 instead or 0..255
  blended.a = Math.round(blended.a * 255)

  return RGBAToHex(blended)
}
