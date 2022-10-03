import { extendTheme } from "@soperio/react";
import { theming } from "@valerya/components";

const theme = extendTheme({
    "extras":
    {
        ...theming
    }
})

export default theme