import { darken, isDark, lighten } from "@soperio/react"
import { alpha, colorBlend, hexToRGBA, RGBA, RGBAToHex } from "../utils/colorUtils"
import { Layer, LayerScheme } from "../Layer"

interface States
{
    hover: number,
    pressed: number,
    selected: number,
    active: number,
    disabledLayer: number,
    disabledContent: number,
}

export interface BuildSurfaceOptions
{
    darkMode?: boolean,
    coef?: number,
    hoverStatePercent?: number
    activeStatePercent?: number
    pressedStatePercent?: number
    selectedStatePercent?: number
    disabledStatePercent?: number
    disabledContentStatePercent?: number
}

const whiteRGBA: RGBA = { r: 255, g: 255, b: 255, a: 255 }

// TODO Make sure all of resulting hex colors are in #ffffff form and not #ffffffff

export function buildSurfaceFromColors(
    primaryHex: string,
    onPrimaryHex: string,
    primaryContainerHex: string,
    onPrimaryContainerHex: string,
    options?: BuildSurfaceOptions) : LayerScheme
{
    const colorBlendContainerFn = /*isDarkContainerColor ? whiten : */darken

    const states = {
        hover: options?.hoverStatePercent ?? 3,
        pressed: options?.hoverStatePercent ?? 5,
        selected: options?.hoverStatePercent ?? 5,
        active: options?.hoverStatePercent ?? 7,
        disabledLayer: options?.hoverStatePercent ?? 12,
        disabledContent: options?.hoverStatePercent ?? 38
    }

    let hoverPercent = Math.round(2 * (states.hover / 100) * 255).toString(16)
    if (hoverPercent.length == 1)
        hoverPercent = "0" + hoverPercent

    return {
        main: buildSurfaceScheme(primaryHex, onPrimaryHex, states, options?.darkMode ?? false),
        alt:
        {
            color: primaryContainerHex,
            onColor: onPrimaryContainerHex,
            active:
            {
                color: colorBlendContainerFn(primaryContainerHex, states.active),
                onColor: onPrimaryContainerHex,
            },
            selected: {
                color: colorBlendContainerFn(primaryContainerHex, states.selected),
                onColor: onPrimaryHex
            },
            pressed:
            {
                color: colorBlendContainerFn(primaryContainerHex, states.pressed),
                onColor: onPrimaryContainerHex,
            },
            disabled:
            {
                // TODO Check disabled colors because they suck right now
                color: colorBlendContainerFn(primaryContainerHex, 10),
                onColor: onPrimaryContainerHex,
            },
            hover: {
                color: colorBlendContainerFn(primaryContainerHex, states.hover),
                onColor: onPrimaryContainerHex,
                active: {
                    color: colorBlendContainerFn(primaryContainerHex, states.hover + states.active),
                    onColor: onPrimaryContainerHex,
                },
                selected:
                {
                    color: colorBlendContainerFn(primaryHex, states.hover + states.selected),
                    onColor: onPrimaryHex,
                }
            }
        },
        mainInv: {
            color: onPrimaryHex,
            onColor: primaryHex,
            active:
            {
                color: lighten(onPrimaryHex, states.active),
                onColor: primaryHex,
            },
            selected: {
                color: lighten(onPrimaryHex, states.selected),
                onColor: primaryHex
            },
            pressed:
            {
                color: lighten(onPrimaryHex, states.pressed),
                onColor: primaryHex,
            },
            disabled:
            {
                // TODO
                color: "transparent",
                // onColor: RGBAToHex(alpha(primaryRGBA, 0.3)),
                onColor: RGBAToHex(colorBlend(whiteRGBA, alpha(hexToRGBA(primaryHex), 0.3))),
            },
            hover: {
                color: options?.darkMode ? darken(onPrimaryHex, states.hover) : RGBAToHex(colorBlend(whiteRGBA, alpha(hexToRGBA(darken(primaryHex, states.hover)), (states.hover * 5) / 100))),
                // color: RGBAToHex(alpha(hexToRGBA(primaryHex), (states.hover * 2.55) / 100)),
                onColor: primaryHex,
                active: {
                    color: lighten(onPrimaryHex, states.hover + states.active),
                    onColor: primaryHex,
                },
                selected:
                {
                    color: lighten(onPrimaryHex, states.hover + states.selected),
                    onColor: primaryHex,
                }
            }
        },
        altInv: buildSurfaceScheme(onPrimaryContainerHex, primaryContainerHex, states, options?.darkMode ?? false),
        mainLayer: {
            color: "transparent",
            onColor: primaryHex,
            active:
            {
                color: lighten(primaryHex, states.active),
                onColor: primaryHex,
            },
            selected: {
                color: lighten(primaryHex, states.selected),
                onColor: primaryHex
            },
            pressed:
            {
                color: lighten(primaryHex, states.pressed),
                onColor: primaryHex,
            },
            disabled:
            {
                color: "transparent",
                // onColor: RGBAToHex(alpha(primaryRGBA, 0.3)),
                onColor: RGBAToHex(colorBlend(whiteRGBA, alpha(hexToRGBA(primaryHex), 0.3))),
            },
            hover: {
                // color: RGBAToHex(alpha(hexToRGBA(primaryHex), (2.55 * states.hover) / 100)),
                color: options?.darkMode ? darken(onPrimaryHex, states.hover) : RGBAToHex(colorBlend(whiteRGBA, alpha(hexToRGBA(darken(primaryHex, states.hover)), (states.hover * 5) / 100))),
                onColor: primaryHex,
                active: {
                    color: lighten(primaryHex, states.hover + states.active),
                    onColor: primaryHex,
                },
                selected:
                {
                    color: lighten(primaryHex, states.hover + states.selected),
                    onColor: primaryHex,
                }
            }
        },
    }
}

function buildSurfaceScheme(color: string, onColor: string, states: States, darkMode: boolean): Layer
{
    const isDarkColor = isDark(color)
    const colorBlendFn = /*isDarkColor ? whiten : */darken
    // const colorBlendFn = darkMode ? lighten : darken

    return {
        color: color,
        onColor: onColor,
        active:
        {
            color: colorBlendFn(color, states.active),
            onColor: onColor,
        },
        selected: {
            color: colorBlendFn(color, states.selected),
            onColor: onColor
        },
        pressed:
        {
            color: colorBlendFn(color, states.pressed),
            onColor: onColor,
        },
        disabled:
        {
            color: colorBlendFn(color, 10),
            onColor: onColor,
        },
        hover: {
            color: colorBlendFn(color, states.hover),
            onColor: onColor,
            active: {
                color: colorBlendFn(color, states.hover + states.active),
                onColor: onColor,
            },
            selected:
            {
                color: colorBlendFn(color, states.hover + states.selected),
                onColor: onColor,
            }
        }
    }
}