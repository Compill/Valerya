// import { withDefaultSurface, withSurface } from "@valerya/core"
// import { buildDarkSurface, buildSurface, buildWhiteSurface } from "@valerya/surface"
import { withDarkModeSurface, withDefaultSurface, withSurface } from "@valerya/core"
import { buildDarkSurface, buildSurface, buildWhiteSurface } from "@valerya/surface"
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
    withSurface("default", buildSurface("#12A2DF")),
    withSurface("light", buildWhiteSurface("#ffffff", "#181818")),
    withSurface("dark", buildSurface("#181818")),
    withSurface("neutral", buildSurface("#94a3b8")),
    withSurface("primary", buildWhiteSurface("#ffffff", "#181818")),
    withSurface("secondary", buildSurface("#475569")),
    withSurface("tertiary", buildSurface("#39B8FC")),
    withSurface("accent", buildSurface("#b3261e")),

    withDefaultSurface("light", buildSurface("#0ea5e9")),
    withDefaultSurface("dark", buildSurface("#06b6d4", { darkMode: true })),
    withDefaultSurface("neutral", buildSurface("#94a3b8")),

    withDarkModeSurface("default", buildSurface("#12A2DF", { darkMode: true })),
    withDarkModeSurface("neutral", buildSurface("#94a3b8", { darkMode: true })),
    withDarkModeSurface("light", buildDarkSurface("#181818", "#ffffff")),
    withDarkModeSurface("dark", buildWhiteSurface("#ffffff", "#181818")),
    withDarkModeSurface("primary", buildDarkSurface("#181818", "#ffffff")),
    withDarkModeSurface("secondary", buildSurface("#475569", { darkMode: true })),
    withDarkModeSurface("tertiary", buildSurface("#39B8FC", { darkMode: true })),
    withDarkModeSurface("accent", buildSurface("#b3261e", { darkMode: true })),
)

export default theme
export { theme }