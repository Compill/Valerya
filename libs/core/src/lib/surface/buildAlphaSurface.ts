import { blacken, darken, isDark, lighten, whiten } from "@soperio/react"
import { colorBlend, intToRGBA, RGBA, RGBAToHex, alpha, hexToRGBA } from "./colorUtils"
import { SurfaceScheme, SurfaceSchemeSet } from "./SurfaceScheme"

interface BuildSurfaceOptions
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

interface States
{
    hover: number,
    pressed: number,
    selected: number,
    active: number,
    disabledLayer: number,
    disabledContent: number,
}

export function buildAlphaSurface(color: number, options?: BuildSurfaceOptions): SurfaceSchemeSet
{
    // Coef is between -0.5 and +0.5
    // Default is 0
    // Add 1 to make it a multiplier (0.5 > 1.5)
    const coef = 1 + Math.min(Math.max(options?.coef ?? 0, -0.5), 0.5)
    const primaryRGBA = intToRGBA(color)

    const primaryContainerRGBA = options?.darkMode ? colorBlend(primaryRGBA, { r: 0, g: 0, b: 0, a: 0.7 }) : colorBlend(primaryRGBA, { r: 255, g: 255, b: 255, a: 0.8 })


    const primaryHex = options?.darkMode ? lighten(RGBAToHex(primaryRGBA), (1 - getBrightness(primaryRGBA)) * 50 * coef) : RGBAToHex(primaryRGBA)
    const primaryBrightness = getBrightness(hexToRGBA(primaryHex))

    const primaryContainerHex = options?.darkMode ? darken(primaryHex, primaryBrightness * 70 * coef) : lighten(primaryHex, (1 - primaryBrightness) * 57 * coef)
    const primaryContainerBrightness = getBrightness(hexToRGBA(primaryContainerHex))

    const isDarkPrimaryColor = isDark(primaryHex)

    const onPrimaryHex = options?.darkMode ? darken(primaryHex, primaryBrightness * 70 * coef) : "#ffffff" //(isDarkPrimaryColor ? "#ffffff" : darken(primaryHex, primaryBrightness * 75))
    const onPrimaryContainerHex = options?.darkMode ? lighten(primaryContainerHex, (1 - primaryContainerBrightness) * 67 * coef) : darken(primaryContainerHex, primaryContainerBrightness * 75 * coef)

    const isDarkContainerColor = isDark(primaryContainerHex)
    const colorBlendPrimaryFn = isDarkPrimaryColor ? whiten : darken
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
                color: "transparent",
                onColor: RGBAToHex(alpha(primaryRGBA, 0.3)),
            },
            hover: {
                color: options?.darkMode ? darken(onPrimaryHex, states.hover) : RGBAToHex(colorBlend({ r: 255, g: 255, b: 255, a: 255 }, alpha(hexToRGBA(darken(primaryHex, states.hover)), (states.hover * 5) / 100))),
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
                onColor: RGBAToHex(alpha(primaryRGBA, 0.3)),
            },
            hover: {
                // color: RGBAToHex(alpha(hexToRGBA(primaryHex), (2.55 * states.hover) / 100)),
                color: options?.darkMode ? darken(onPrimaryHex, states.hover) : RGBAToHex(colorBlend({ r: 255, g: 255, b: 255, a: 255 }, alpha(hexToRGBA(darken(primaryHex, states.hover)), (states.hover * 5) / 100))),
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

function blend(color: RGBA, ...otherColors: RGBA[]): string
{
    return RGBAToHex(colorBlend.call(null, color, ...otherColors))
}

function buildSurfaceScheme(color: string, onColor: string, states: States, darkMode: boolean): SurfaceScheme
{
    const isDarkColor = isDark(color)
    // TODO This generates alpha colors instead of opaque colors
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

function getLuminance(color: RGBA)
{
    var R;
    var G;
    var B;
    var RsRGB = color.r / 255;
    var GsRGB = color.g / 255;
    var BsRGB = color.b / 255;
    if (RsRGB <= 0.03928)
    {
        R = RsRGB / 12.92;
    }
    else
    {
        // eslint-disable-next-line prefer-exponentiation-operator
        R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928)
    {
        G = GsRGB / 12.92;
    }
    else
    {
        // eslint-disable-next-line prefer-exponentiation-operator
        G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928)
    {
        B = BsRGB / 12.92;
    }
    else
    {
        // eslint-disable-next-line prefer-exponentiation-operator
        B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function getBrightness(color: RGBA)
{
    return ((color.r * 299 + color.g * 587 + color.b * 114) / 1000) / 255;
}