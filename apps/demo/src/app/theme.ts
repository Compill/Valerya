// import { withDefaultSurface, withSurface } from "@katia/core"
// import { buildDarkSurface, buildSurface, buildWhiteSurface } from "@katia/surface"
import { withSurface } from "@katia/core"
import { buildSurface } from "@katia/surface"
import { extendTheme } from "@soperio/react"

const theme = extendTheme(
    {
        colors:
        {
            primary: "#0099ff"
        },
        rootColors:
        {
            "bg-color-3": "#f1f5f9"
        },
        darkModeOverride: {
            rootColors:
            {
                "bg-color-3": "#1e293b"
            }
        }
    },
    {"extras": {
        "qmzegah": {
            "mqsudfg": false,
            "qglsfughq": buildSurface(0xff12A2DF)
        }
    }},
    // withSurface("default", buildSurface(0xff12A2DF)),
    // withSurface("light", buildWhiteSurface(0xffffffff, 0xff181818)),
    // withSurface("dark", buildDarkSurface(0xff181818, 0xffffffff)),
    // withSurface("neutral", buildSurface(0xff94a3b8)),
    // withSurface("primary", buildWhiteSurface(0xffffffff, 0xff181818)),
    // withSurface("secondary", buildSurface(0xff475569)),
    // withSurface("tertiary", buildSurface(0xff39B8FC)),
    // withSurface("accent", buildSurface(0xffb3261e)),

    // withDefaultSurface("light", buildSurface(0xff0ea5e9)),
    // withDefaultSurface("dark", buildSurface(0xff06b6d4, { darkMode: true }),),
    // withDefaultSurface("neutral", buildSurface(0xff94a3b8)),

    // {
    //     darkModeOverride:
    //     {
    //         ...withSurface("default", buildSurface(0x12A2DF, { darkMode: true })),
    //         ...withSurface("neutral", buildSurface(0xff94a3b8, { darkMode: true }),),
    //         ...withSurface("light", buildDarkSurface(0xff181818, 0xffffffff),),
    //         ...withSurface("dark", buildWhiteSurface(0xffffffff, 0xff181818),),
    //         ...withSurface("primary", buildDarkSurface(0xff181818, 0xffffffff),),
    //         ...withSurface("secondary", buildSurface(0xff475569, { darkMode: true }),),
    //         ...withSurface("tertiary", buildSurface(0xff39B8FC, { darkMode: true }),),
    //         ...withSurface("accent", buildSurface(0xffb3261e, { darkMode: true })),
    //     }
    // }
)

export default theme
export { theme }