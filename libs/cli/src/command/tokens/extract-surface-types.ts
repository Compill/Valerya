
import { isObject } from "../../utils/is-object"

// ValeryaThemeTypings

export function extractSurfaceTypes(theme: Record<string, any>)
{
    const surfaces = theme["extras"]?.["valerya.surfaces"]

    if (!isObject(surfaces))
    {
        return ["default", "light", "dark", "neutral"]
    }
    
    let keys = Object.keys(surfaces)

    if (!keys.includes("default"))
        keys = keys.concat("default")
        
    if (!keys.includes("light"))
        keys = keys.concat("light")

    if (!keys.includes("dark"))
        keys = keys.concat("dark")

    if (!keys.includes("neutral"))
        keys = keys.concat("neutral")

    return keys
}