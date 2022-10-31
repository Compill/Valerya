import { darken, lighten } from "@soperio/react";
import chroma from "chroma-js";
import { Layer } from "../Layer";
import { SurfaceScheme } from "../SurfaceScheme";
import { alphaOnBackground, alphaOnWhiteBackground, hexToRGBA, RGBA } from "../utils/colorUtils";
import { buildSurfaceFromColors, BuildSurfaceOptions } from "./buildSurfaceFromColors";
import { formatSurface, nonAlphaRGB } from "./formatSurface";

const whiteRGBA: RGBA = { r: 255, g: 255, b: 255, a: 255 }

export function buildWhiteSurface(whiteColor: string, darkColor: string, options?: Omit<BuildSurfaceOptions, "darkMode">): SurfaceScheme
{
    const coef = 1 + Math.min(Math.max(options?.coef ?? 0, -0.5), 0.5)
    const primaryHex = nonAlphaRGB(whiteColor)
    const onPrimaryHex = nonAlphaRGB(darkColor)

    const primaryBrightness = getBrightness(hexToRGBA(primaryHex))

    const primaryContainerHex = nonAlphaRGB(darken(primaryHex, primaryBrightness * 10 * coef))
    const onPrimaryContainerHex = nonAlphaRGB(lighten(onPrimaryHex, primaryBrightness * 10 * coef))

    const states = {
        hover: options?.hoverStatePercent ?? 3,
        pressed: options?.hoverStatePercent ?? 5,
        selected: options?.hoverStatePercent ?? 5,
        active: options?.hoverStatePercent ?? 7,
        disabledLayer: options?.hoverStatePercent ?? 12,
        disabledContent: options?.hoverStatePercent ?? 38
    }

    const mainLayer: Layer = {
        color: "transparent",
        onColor: onPrimaryHex,
        active:
        {
            color: darken(primaryHex, states.active),
            onColor: primaryHex,
        },
        selected: {
            color: darken(primaryHex, states.selected),
            onColor: primaryHex
        },
        pressed:
        {
            color: darken(primaryHex, states.pressed),
            onColor: primaryHex,
        },
        disabled:
        {
            color: "transparent",
            onColor: alphaOnBackground(onPrimaryHex, states.disabledContent / 100),
            selected:
            {
                color: alphaOnBackground(darken(primaryHex, states.selected), states.disabledLayer / 100),
                onColor: alphaOnBackground(primaryHex, states.disabledContent / 100),
            },
            active:
            {
                color: alphaOnBackground(darken(primaryHex, states.active), states.disabledLayer / 100),
                onColor: alphaOnBackground(primaryHex, states.disabledContent / 100),
            }
        },
        hover: {
            color: alphaOnWhiteBackground(onPrimaryHex, (states.hover * 3) / 100),
            onColor: onPrimaryHex,
            active: {
                color: darken(primaryHex, states.hover + states.active),
                onColor: primaryHex,
            },
            selected:
            {
                color: darken(primaryHex, states.hover + states.selected),
                onColor: primaryHex,
            }
        }
    }

    const surface = buildSurfaceFromColors(primaryHex, onPrimaryHex, primaryContainerHex, onPrimaryContainerHex, options)

    surface.mainInv.hover.color = lighten(onPrimaryHex, states.hover)

    const layers = {
        ...surface,
        mainLayer
    }

    const colors = chroma.scale([primaryHex, onPrimaryHex]).colors(10)

    const palette = {
        "50": colors[0],
        "100": colors[1],
        "200": colors[2],
        "300": colors[3],
        "400": colors[4],
        "500": colors[5],
        "600": colors[6],
        "700": colors[7],
        "800": colors[8],
        "900": colors[9],
    }

    return formatSurface({
        color: primaryHex,
        altColor: primaryContainerHex,
        layers,
        palette
    })
}

function getBrightness(color: RGBA)
{
    return ((color.r * 299 + color.g * 587 + color.b * 114) / 1000) / 255;
}