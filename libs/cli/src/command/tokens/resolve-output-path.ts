import fs from "fs"
import path from "path"
import { promisify } from "util"

const exists = promisify(fs.exists)

export const themeInterfaceDestination = [
    "node_modules",
    "@valerya", 
    "core", 
    "lib"
]

/**
 * Finds the target file to override
 * In our case it is located in the @chakra-ui/styled-system package
 */
async function resolveThemingDefinitionPath(file: string): Promise<string | undefined>
{
    const dest = themeInterfaceDestination.concat(file)
    const baseDir = path.join("..", "..", "..")
    const cwd = process.cwd()

    const pathsToTry = [
        path.resolve(baseDir, "..", ...dest),
        path.resolve(baseDir, "..", "..", ...dest),
        path.resolve(cwd, ...dest),
        path.resolve(cwd, "..", ...dest),
        path.resolve(cwd, "..", "..", ...dest),
    ]

    const triedPaths = await Promise.all(
        pathsToTry.map(async (possiblePath) =>
        {
            if (await exists(possiblePath))
            {
                return possiblePath
            }
            return ""
        }),
    )

    return triedPaths.find(Boolean)
}

/**
 * Find the location of the default target file or resolve the given path
 */
export async function resolveOutputPath(
    defaultFile: string,
    overridePath?: string
): Promise<string>
{
    if (overridePath)
    {
        return path.resolve(process.cwd(), overridePath, defaultFile)
    }

    const themingDefinitionFilePath = await resolveThemingDefinitionPath(defaultFile)
    if (!themingDefinitionFilePath)
    {
        throw new Error(
            "Could not find @valerya/core in node_modules. Please provide `--out` parameter.",
        )
    }

    return themingDefinitionFilePath
}
