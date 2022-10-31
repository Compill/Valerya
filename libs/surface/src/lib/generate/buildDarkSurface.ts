import { darken, lighten } from "@soperio/react";
import chroma from "chroma-js";
import { RGBA } from "color-blend/dist/types";
import { Layer } from "../Layer";
import { SurfaceScheme } from "../SurfaceScheme";
import { alphaOnBackground, hexToRGBA } from "../utils/colorUtils";
import { buildSurfaceFromColors, BuildSurfaceOptions } from "./buildSurfaceFromColors";
import { formatSurface, nonAlphaRGB } from "./formatSurface";

const whiteRGBA: RGBA = { r: 255, g: 255, b: 255, a: 255 }

export function buildDarkSurface(darkColor: string, whiteColor: string, options?: Omit<BuildSurfaceOptions, "darkMode">): SurfaceScheme
{
    const coef = 1 + Math.min(Math.max(options?.coef ?? 0, -0.5), 0.5)
    const primaryHex = nonAlphaRGB(darkColor)
    const onPrimaryHex = nonAlphaRGB(whiteColor)

    const primaryBrightness = getBrightness(hexToRGBA(primaryHex))


    const primaryContainerHex = nonAlphaRGB(lighten(primaryHex, (1 - primaryBrightness) * 57 * coef))
    const primaryContainerBrightness = getBrightness(hexToRGBA(primaryContainerHex))
    const onPrimaryContainerHex = nonAlphaRGB(darken(primaryContainerHex, primaryContainerBrightness * 75 * coef))

    const states = {
        hover: options?.hoverStatePercent ?? 3,
        pressed: options?.hoverStatePercent ?? 5,
        selected: options?.hoverStatePercent ?? 5,
        active: options?.hoverStatePercent ?? 7,
        disabledLayer: options?.hoverStatePercent ?? 30,
        disabledContent: options?.hoverStatePercent ?? 70
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
                onColor: alphaOnBackground(onPrimaryHex, states.disabledContent / 100),
            },
            active:
            {
                color: alphaOnBackground(darken(primaryHex, states.active), states.disabledLayer / 100),
                onColor: alphaOnBackground(primaryHex, states.disabledContent / 100),
            },
        },
        hover: {
            color: lighten(primaryHex, states.hover + states.active),
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

    const newOptions: BuildSurfaceOptions = options ?? {}
    // newOptions.darkMode = true

    const surface = buildSurfaceFromColors(primaryHex, onPrimaryHex, primaryContainerHex, onPrimaryContainerHex, newOptions)

    surface.altInv.disabled =
    {
        color: alphaOnBackground(onPrimaryContainerHex, states.disabledLayer / 100),
        onColor: alphaOnBackground(primaryContainerHex, states.disabledContent / 100),
        active: {
            color: alphaOnBackground(darken(onPrimaryContainerHex, states.active), (states.disabledLayer * 1.66) / 100),
            onColor: alphaOnBackground(primaryContainerHex, states.disabledContent / 100),
        },
        selected:
        {
            color: alphaOnBackground(darken(onPrimaryContainerHex, states.selected), (states.disabledLayer * 1.66) / 100),
            onColor: alphaOnBackground(primaryContainerHex, states.disabledContent / 100),
        }
    }

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