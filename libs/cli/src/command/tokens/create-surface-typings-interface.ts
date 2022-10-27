
import { extractSurfaceTypes } from "./extract-surface-types"
import { formatWithPrettierIfAvailable } from "../../utils/format-with-prettier"
import { printUnionType } from "./extract-property-paths"

export interface ThemeKeyOptions
{
    /**
     * Property key in the theme object
     * @example colors
     */
    key: string
    /**
     * Maximum extraction level
     * @example
     * union: gray.500
     * level: 1---|2--|
     * @default 3
     */
    maxScanDepth?: number
    /**
     * Pass a function to filter extracted values
     * @example
     * Exclude numeric index values from `breakpoints`
     * @default () => true
     */
    filter?: (value: string) => boolean

    /**
     * Pass a function to flatMap extracted values
     * @default value => value
     */
    flatMap?: (value: string) => string | string[]
}

export async function createSurfaceTypingsInterface(
    theme: Record<string, unknown>,
)
{

    const surfaceTypes = extractSurfaceTypes(theme)

    const template =
        // language=ts
        `// regenerate by running
// npx @valerya/cli typings path/to/your/theme.(js|ts)

export interface ValeryaThemeTypings {
    surfaces: ${printUnionType(surfaceTypes)}

}
`

    // Only override file if definition is not empty
    if (surfaceTypes.length > 0)
        return formatWithPrettierIfAvailable(template)

    return undefined
}