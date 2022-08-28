import { darken, lighten } from "@soperio/react";
import chroma from "chroma-js";
import { Layer } from "../Layer";
import { SurfaceScheme } from "../SurfaceScheme";
import { alpha, colorBlend, hexToRGBA, intToRGBA, RGBA, RGBAToHex } from "../utils/colorUtils";
import { buildSurfaceFromColors, BuildSurfaceOptions } from "./buildSurfaceFromColors";

const whiteRGBA: RGBA = { r: 255, g: 255, b: 255, a: 255 }

export function buildWhiteSurface(whiteColor: number, darkColor: number, options?: Omit<BuildSurfaceOptions, "darkMode">): SurfaceScheme
{
    const coef = 1 + Math.min(Math.max(options?.coef ?? 0, -0.5), 0.5)
    const primaryHex = RGBAToHex(intToRGBA(whiteColor)).substring(0, 7)
    const onPrimaryHex = RGBAToHex(intToRGBA(darkColor)).substring(0, 7)

    const primaryBrightness = getBrightness(hexToRGBA(primaryHex))

    const primaryContainerHex = darken(primaryHex, primaryBrightness * 10 * coef)
    const onPrimaryContainerHex = lighten(onPrimaryHex, primaryBrightness * 10 * coef)

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
            // onColor: RGBAToHex(alpha(primaryRGBA, 0.3)),
            // TODO Make a function for this repetitive ugly code
            onColor: RGBAToHex(colorBlend(whiteRGBA, alpha(hexToRGBA(onPrimaryHex), 0.3))),
        },
        hover: {
            // color: RGBAToHex(alpha(hexToRGBA(primaryHex), (2.55 * states.hover) / 100)),
            color: RGBAToHex(colorBlend(whiteRGBA, alpha(hexToRGBA(onPrimaryHex), (states.hover * 3) / 100))),
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

    return {
        color: primaryHex,
        altColor: primaryContainerHex,
        layers,
        palette
    }
}

function getBrightness(color: RGBA)
{
    return ((color.r * 299 + color.g * 587 + color.b * 114) / 1000) / 255;
}