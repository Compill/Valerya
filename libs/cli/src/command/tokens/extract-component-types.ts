
import { isObject } from "lodash"
import { extractPropertyPaths, printUnions } from "./extract-property-paths"



export function extractComponentTypes(theme: Record<string, any>)
{
    const components = theme["extras"]?.["valerya.components"]

    if (!isObject(components))
    {
        return {}
    }

    // console.log("components", components)

    return Object.entries(components).reduce(
        (allDefs, [componentName, definition]) =>
        {
            // console.log("componentName", componentName, definition)
            if (definition) 
            {
                // Config can be a function with params ColorTheme, darkMode
                const target = typeof definition === "function" ? definition({}, false) : definition
                allDefs[componentName] = extractPropertyPaths(target.traits, 2)
            }

            return allDefs
        },
        {} as Record<string, any>,
    )
}

function escapeComponentName(componentName: string)
{

    return componentName.match(/^[a-zA-Z0-9\-_]+$/)
        ? componentName
        : `"${componentName}"`
}

export function printComponentTypes(
    componentTypes: Record<string, any>,

)
{
    const types = Object.entries(componentTypes)
        .map(
            ([componentName, unions]) =>
                `${escapeComponentName(componentName)}: {
  ${printUnions(unions)}}
`,
        )
        .join(`\n`)

    return `
  ${types}  
`
}