import { normal } from "color-blend";

export function alpha(color: RGBA, alpha: number): RGBA
{
    if (alpha < 0 || alpha > 255)
        throw new Error("Alpha must be between 0 and 1")

    return { ...color, a: Math.round(255 * alpha) }
}

export function ARGBToHex(color: number): string
{
    return '#' + ('000000' + (color & 0xFFFFFF).toString(16)).slice(-6);
}

export function RGBAToHex(color: RGBA)
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

export function hexToRGBA(color:string): RGBA
{
    return {
        r: parseInt(color.substring(1, 3), 16),
        g: parseInt(color.substring(3, 5), 16),
        b: parseInt(color.substring(5, 7), 16),
        a: color.length > 7 ? parseInt(color.substring(7, 9), 16) : 255
    }
}

export interface RGBA
{
    r: number,
    g: number,
    b: number,
    a: number,
}

export function intToRGBA(color: number): RGBA
{
    return {
        r: color >> 16 & 255,
        g: color >> 8 & 255,
        b: color & 255,
        a: color >> 24 & 255,
    }
}

export function colorBlend(color: RGBA, ...blendColors: RGBA[]): RGBA
{
    if (!blendColors || blendColors.length === 0)
        throw new Error("colorBlend must have at least two parameters")

    let blended = normal(normalizeColorBlendAlpha(color), normalizeColorBlendAlpha(blendColors[0]))

    for (let i = 1; i < blendColors.length; i++)
        blended = normal(blended, normalizeColorBlendAlpha(blendColors[i]))

    // Blending lib returns alpha between 0 and 1 instead or 0..255
    blended.a = Math.round(blended.a * 255)

    return blended
}

function normalizeColorBlendAlpha(color: RGBA): RGBA
{
    return {...color, a: color.a / 255 }
}

export function alphaOnBackground(colorHex: string, opacity: number):string
{
    const rgba = hexToRGBA(colorHex)

    return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${opacity})`
}