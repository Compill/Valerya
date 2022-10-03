
import { extractComponentTypes, printComponentTypes } from "./extract-component-types"
import { formatWithPrettierIfAvailable } from "../../utils/format-with-prettier"


export async function createComponentsTypingsInterface(
    theme: Record<string, unknown>,
)
{

    const componentTypes = extractComponentTypes(theme)

    const template =
        // language=ts
        `// regenerate by running
// npx @valerya/cli components path/to/your/theme.(js|ts)

export interface Components {
${printComponentTypes(componentTypes)}

}

`



    return formatWithPrettierIfAvailable(template)
}