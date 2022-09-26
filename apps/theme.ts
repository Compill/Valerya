// import { buildDarkSurface, buildSurface, buildWhiteSurface } from "@valerya/surface"
import { extendTheme } from "@soperio/react"

const theme = extendTheme({
    colors:
    {
        primary: "#0099ff"
    },
    // extras:
    // {
    //     // TODO Transform into 
    //     // withLightSurface
    //     // withDarkSurface
    //     // withDefaultSurface
    //     "valerya.surfaces":
    //     {
    //         // "primary": buildSurface(0xff16a34a),
    //         "default": buildSurface(0xff12A2DF),
    //         "light": buildWhiteSurface(0xffffffff, 0xff181818),
    //         "dark": buildDarkSurface(0xff181818, 0xffffffff),
    //         "neutral": buildSurface(0xff94a3b8),
    //         "primary": buildWhiteSurface(0xffffffff, 0xff181818),
    //         // "secondary": buildSurfaceFromColor(0xffff00ff),
    //         "secondary": buildSurface(0xff475569),
    //         "tertiary": buildSurface(0xff39B8FC),
    //         // "tertiary": buildSurfaceFromColor(0xff3a691e),
    //         "accent": buildSurface(0xffb3261e)
    //     },
    //     "valerya.surfaces.dark":
    //     {
    //         "default": buildSurface(0x12A2DF, { darkMode: true }),
    //         "neutral": buildSurface(0xff94a3b8, { darkMode: true }),
    //         "light": buildDarkSurface(0xff181818, 0xffffffff),
    //         "dark": buildWhiteSurface(0xffffffff, 0xff181818),

    //         // "primary": buildSurface(0xff16a34a, { darkMode: true }),
    //         "primary": buildDarkSurface(0xff181818, 0xffffffff),
    //         // "secondary": buildSurfaceFromColor(0xffff00ff, { darkMode: true }),
    //         "secondary": buildSurface(0xff475569, { darkMode: true }),
    //         "tertiary": buildSurface(0xff39B8FC, { darkMode: true }),
    //         // "tertiary": buildSurfaceFromColor(0xff3a691e, { darkMode: true }),
    //         "accent": buildSurface(0xffb3261e, { darkMode: true })
    //     },
    //     "valerya.surfaces.default":
    //     {
    //         "light": buildSurface(0xff0ea5e9),//buildSurface(0xff06b6d4),
    //         "dark": buildSurface(0xff06b6d4, { darkMode: true }),
    //         "neutral": buildSurface(0xff94a3b8)
    //     }
    // }
})

export default theme
export { theme }