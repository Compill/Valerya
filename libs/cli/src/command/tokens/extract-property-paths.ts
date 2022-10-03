import { isObject } from "../../utils/is-object"

const AutoCompleteStringType = "(string & {})"

function wrapWithQuotes(value: unknown)
{
    return `"${value}"`
}

function printUnionType(values: string[], strict = false)
{
    if (!values.length)
    {
        return strict ? "never" : AutoCompleteStringType
    }

    return values
        .map(wrapWithQuotes)
        .concat(strict ? [] : [AutoCompleteStringType])
        .join(" | ")
}

export function printUnions(unions: any, initial = true): string
{
    let res = initial ? "" : "{ "
    const keys = Object.keys(unions)
    const length = keys.length

    keys.forEach((key, index) =>
    {
        if (typeof unions[key] === "string")
            res += `${key}: ${unions[key]}`
        else
            res += `${key}: ${printUnions(unions[key], false)}`

        if (index < length - 1)
            res += ","
    })

    if (!initial)
        res += " }"

    return res
}

/**
 * @example
 * { colors: ['red.500', 'green.500'] } => `colors: "red.500" | "green.500"`
 */
export function printUnionMap(
    unions: Record<string, string[]>,
    strict = false,
)
{
    return Object.entries(unions)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(
            ([targetKey, union]) => `${targetKey}: ${printUnionType(union, strict)};`,
        )
        .join("\n")
}

/**
 * Extract recursively all property paths with a max depth
 */
export function extractPropertyPaths(target: unknown, maxDepth = 3)
{
    if ((!isObject(target) && !Array.isArray(target)) || !maxDepth)
    {
        return []
    }

    return Object.entries(target).reduce((allPropertyPaths, [key, value]) =>
    {
        if (isObject(value))
        {
            extractPropertyPaths(value, maxDepth - 1).forEach((childKey) =>
                // e.g. gray.500
                allPropertyPaths.push(`${key}.${childKey}`),
            )
        } else
        {
            // e.g. transparent
            allPropertyPaths.push(key)
        }

        return allPropertyPaths
    }, [] as string[])
}
