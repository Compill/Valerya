import { darken, isDark, lighten } from "@soperio/react"
import { SurfaceScheme } from "../SurfaceScheme"
import { hexToRGBA, intToRGBA, RGBA, RGBAToHex } from "../utils/colorUtils"
import { generatePalette } from "./buildPalette"
import { buildSurfaceFromColors, BuildSurfaceOptions } from "./buildSurfaceFromColors"
import { formatSurface, nonAlphaRGB } from "./formatSurface"


export function buildSurface(color: string, options?: BuildSurfaceOptions): SurfaceScheme
{
    // This code is a mess...

    // Coef is between -0.5 and +0.5
    // Default is 0
    // Add 1 to make it a multiplier (0.5 > 1.5)
    const coef = 1 + Math.min(Math.max(options?.coef ?? 0, -0.5), 0.5)
    const primaryRGBA = hexToRGBA(color)

    const primaryHex = nonAlphaRGB(options?.darkMode ? lighten(RGBAToHex(primaryRGBA), (1 - getBrightness(primaryRGBA)) * 50 * coef) : RGBAToHex(primaryRGBA))
    const primaryBrightness = getBrightness(hexToRGBA(primaryHex))

    const primaryContainerHex = nonAlphaRGB(options?.darkMode ? darken(primaryHex, primaryBrightness * 70 * coef) : lighten(primaryHex, (1 - primaryBrightness) * 57 * coef))
    const primaryContainerBrightness = getBrightness(hexToRGBA(primaryContainerHex))

    const onPrimaryHex = nonAlphaRGB(options?.darkMode ? darken(primaryHex, primaryBrightness * 70 * coef) : "#ffffff") //(isDarkPrimaryColor ? "#ffffff" : darken(primaryHex, primaryBrightness * 75))
    const onPrimaryContainerHex = nonAlphaRGB(options?.darkMode ? lighten(primaryContainerHex, (1 - primaryContainerBrightness) * 67 * coef) : darken(primaryContainerHex, primaryContainerBrightness * 75 * coef))

    const layers = buildSurfaceFromColors(color, "#ffffff", primaryHex, onPrimaryHex, primaryContainerHex, onPrimaryContainerHex, options)
    const palette = generatePalette(RGBAToHex(primaryRGBA), options?.coef)

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