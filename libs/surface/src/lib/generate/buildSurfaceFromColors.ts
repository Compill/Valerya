import { darken, lighten } from "@soperio/react"
import { Layer, LayerScheme } from "../Layer"
import { alphaOnBackground, alphaOnWhiteBackground } from "../utils/colorUtils"

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
        pressed: options?.pressedStatePercent ?? 5,
        selected: options?.selectedStatePercent ?? 5,
        active: options?.activeStatePercent ?? 7,
        disabledLayer: options?.disabledStatePercent ?? 30,
        disabledContent: options?.disabledContentStatePercent ?? 70
    }

    let hoverPercent = Math.round(2 * (states.hover / 100) * 255).toString(16)
    if (hoverPercent.length == 1)
        hoverPercent = "0" + hoverPercent

    // Rule of thumb:
    // use alphaOnWhiteBackground for all colors
    // only use alphaOnBackground for disabled colors
    // 
    // alphaOnWhiteBackground generates hex RGB colors
    // alphaOnBackground generates rgba() RGBA colors
    
    return {
        main: buildSurfaceScheme(primaryHex, onPrimaryHex, states),
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
                onColor: onPrimaryContainerHex
            },
            pressed:
            {
                color: colorBlendContainerFn(primaryContainerHex, states.pressed),
                onColor: onPrimaryContainerHex,
            },
            disabled:
            {
                color: alphaOnBackground(primaryContainerHex, states.disabledLayer / 100),
                onColor: alphaOnBackground(onPrimaryContainerHex, states.disabledContent / 100),
                active:
                {
                    color: alphaOnBackground(colorBlendContainerFn(primaryContainerHex, states.active), states.disabledLayer / 100),
                    onColor: alphaOnBackground(onPrimaryContainerHex, states.disabledContent / 100),
                },
                selected:
                {
                    color: alphaOnBackground(colorBlendContainerFn(primaryContainerHex, states.selected), states.disabledLayer / 100),
                    onColor: alphaOnBackground(onPrimaryContainerHex, states.disabledContent / 100),
                }
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
                    color: colorBlendContainerFn(primaryContainerHex, states.hover + states.selected),
                    onColor: onPrimaryHex,
                }
            }
        },
        mainInv: {
            color: onPrimaryHex,
            onColor: primaryHex,
            active:
            {
                color: options?.darkMode ? darken(onPrimaryHex, states.active) : alphaOnWhiteBackground(darken(primaryHex, states.active), (states.active * 5) / 100),
                onColor: primaryHex,
            },
            selected: {
                color: options?.darkMode ? darken(onPrimaryHex, states.selected) : alphaOnWhiteBackground(darken(primaryHex, states.selected), (states.selected * 5) / 100),
                onColor: primaryHex
            },
            pressed:
            {
                color: lighten(onPrimaryHex, states.pressed),
                onColor: primaryHex,
            },
            disabled:
            {
                color: alphaOnBackground(onPrimaryHex, states.disabledLayer / 100),
                onColor: alphaOnBackground(primaryHex, states.disabledContent / 100),
                active:
                {
                    color: alphaOnBackground(lighten(onPrimaryHex, states.active), states.disabledLayer / 100),
                    onColor: alphaOnBackground(primaryHex, states.disabledContent / 100),
                },
                selected:
                {
                    color: alphaOnBackground(lighten(onPrimaryHex, states.selected), states.disabledLayer / 100),
                    onColor: alphaOnBackground(primaryHex, states.disabledContent / 100),
                }
            },
            hover: {
                color: options?.darkMode ? darken(onPrimaryHex, states.hover) : alphaOnWhiteBackground(darken(primaryHex, states.hover), (states.hover * 5) / 100),
                onColor: primaryHex,
                active: {
                    color: options?.darkMode ? darken(onPrimaryHex, states.hover + states.active) : alphaOnWhiteBackground(darken(primaryHex, states.hover + states.active), (states.hover + states.active * 5) / 100),
                    onColor: primaryHex,
                },
                selected:
                {
                    color: options?.darkMode ? darken(onPrimaryHex, states.hover + states.selected) : alphaOnWhiteBackground(darken(primaryHex, states.hover + states.selected), (states.hover + states.selected * 5) / 100),
                    onColor: primaryHex,
                }
            }
        },
        altInv: 
        {
            ...buildSurfaceScheme(onPrimaryContainerHex, primaryContainerHex, states),
            active:
            {
                color: options?.darkMode ? darken(onPrimaryHex, states.active) : alphaOnWhiteBackground(darken(primaryHex, states.active), (states.active * 5) / 100),
                onColor: primaryHex,
            },
            selected: {
                color: options?.darkMode ? darken(onPrimaryHex, states.selected) : alphaOnWhiteBackground(darken(primaryHex, states.selected), (states.selected * 5) / 100),
                onColor: primaryHex
            },
            disabled:
            {
                color: alphaOnBackground(onPrimaryContainerHex, (states.disabledLayer * 1.66) / 100),
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
            },
        },
        mainLayer: {
            color: "transparent",
            onColor: primaryHex,
            active:
            {
                color: options?.darkMode ? darken(onPrimaryHex, states.active) : alphaOnWhiteBackground(darken(primaryHex, states.active), (states.active * 5) / 100),
                onColor: primaryHex,
            },
            selected: {
                color: options?.darkMode ? darken(onPrimaryHex, states.selected) : alphaOnWhiteBackground(darken(primaryHex, states.selected), (states.selected * 5) / 100),
                onColor: primaryHex
            },
            pressed:
            {
                color: lighten(primaryHex, states.pressed),
                onColor: onPrimaryHex,
            },
            disabled:
            {
                color: "transparent",
                onColor: alphaOnBackground(primaryHex, states.disabledContent / 100),
                active:
                {
                    color: options?.darkMode ? alphaOnBackground(darken(onPrimaryHex, states.active), states.disabledLayer / 100) : alphaOnBackground(darken(primaryHex, states.active), ((states.active * 5) / 100) * (states.disabledLayer / 100)),
                    onColor: alphaOnBackground(primaryHex, states.disabledContent / 100), 
                },
                selected:
                {
                    color: options?.darkMode ? alphaOnBackground(darken(onPrimaryHex, states.selected), states.disabledLayer / 100) : alphaOnBackground(darken(primaryHex, states.selected), ((states.selected * 5) / 100) * (states.disabledLayer / 100)),
                    onColor: alphaOnBackground(primaryHex, states.disabledContent / 100), 
                }
            },
            hover: {
                // color: RGBAToHex(alpha(hexToRGBA(primaryHex), (2.55 * states.hover) / 100)),
                color: options?.darkMode ? darken(onPrimaryHex, states.hover) : alphaOnWhiteBackground(darken(primaryHex, states.hover), (states.hover * 5) / 100),
                onColor: primaryHex,
                active: {
                    color: lighten(primaryHex, states.hover + states.active),
                    onColor: primaryHex,
                },
                selected:
                {
                    color: options?.darkMode ? darken(onPrimaryHex, states.hover) : alphaOnWhiteBackground(darken(primaryHex, states.selected), (states.selected * 6) / 100),
                    onColor: primaryHex
                }
            }
        },
    }
}

function buildSurfaceScheme(color: string, onColor: string, states: States): Layer
{
    // const isDarkColor = isDark(color)
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
            color: alphaOnBackground(color, states.disabledLayer / 100),
            onColor: alphaOnBackground(onColor, states.disabledContent / 100),
            active: {
                color: alphaOnBackground(colorBlendFn(color, states.active), states.disabledLayer / 100),
                onColor: alphaOnBackground(onColor, states.disabledContent / 100),
            },
            selected:
            {
                color: alphaOnBackground(colorBlendFn(color, states.selected), states.disabledLayer / 100),
                onColor: alphaOnBackground(onColor, states.disabledContent / 100),
            }
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