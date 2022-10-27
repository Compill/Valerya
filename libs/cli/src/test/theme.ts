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
    withSurface("primary", buildSurface(0xff123456)),
    withSurface("secondary", buildSurface(0xff654321)),
)

export default theme