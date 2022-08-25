import { darken, lighten } from "@soperio/react"
import { PaletteScheme } from "../PaletteScheme"

export function generatePalette(color: string, coef: number = 0): PaletteScheme
{
    const transformDarkCoef = (coef + 0.5) * 8
    const transformLightCoef = (coef + 0.5) * 6
    const leveledDarkCoef = 4 + transformDarkCoef
    const leveledLightCoef = 4 + transformLightCoef
    const colors = [color]

    for (let i = 0; i < 5; i++)
        colors.push(lighten(color, leveledLightCoef + leveledLightCoef * i))

    for (let i = 0; i < 4; i++)
        colors.unshift(darken(color, leveledDarkCoef + leveledDarkCoef * i))

    return {
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
}