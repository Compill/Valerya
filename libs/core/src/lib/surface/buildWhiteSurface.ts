import { darken, lighten } from "@soperio/react";
import { RGBA } from "color-blend/dist/types";
import { buildSurfaceFromColors, BuildSurfaceOptions } from "./buildSurfaceFromColors";
import { alpha, colorBlend, hexToRGBA, intToRGBA, RGBAToHex } from "./colorUtils";
import { SurfaceScheme, SurfaceSchemeSet } from "./SurfaceScheme";

const whiteRGBA: RGBA = { r: 255, g: 255, b: 255, a: 255 }

export function buildWhiteSurface(whiteColor: number, darkColor: number, options?: Omit<BuildSurfaceOptions, "darkMode">): SurfaceSchemeSet
{
    const coef = 1 + Math.min(Math.max(options?.coef ?? 0, -0.5), 0.5)
    const primaryHex = RGBAToHex(intToRGBA(whiteColor))
    const onPrimaryHex = RGBAToHex(intToRGBA(darkColor))

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

    const mainLayer: SurfaceScheme = {
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

    return {
        ...surface,
        mainLayer
    }
}

function getBrightness(color: RGBA)
{
    return ((color.r * 299 + color.g * 587 + color.b * 114) / 1000) / 255;
}