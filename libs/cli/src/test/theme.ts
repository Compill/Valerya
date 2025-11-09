import { extendTheme } from "@soperio/react";
import { theming } from "@valerya/components";
import { withSurface } from "@valerya/core";
import { buildSurface } from "@valerya/surface";

const theme = extendTheme({
    "extras":
    {
        ...theming
    }
},
    withSurface("primary", buildSurface("#ff123456")),
    withSurface("secondary", buildSurface("#ff654321")),
)

export default theme
