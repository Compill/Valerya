import { promisify } from "util"
import { writeFile } from "fs"
import { fork, Serializable } from "child_process"
import path from "path"
import ora from "ora"
import
    {
        resolveOutputPath,
        themeInterfaceDestination,
    } from "./resolve-output-path"

type ErrorRecord = Record<"err", string>

const writeFileAsync = promisify(writeFile)

async function runTemplateWorker({
    themeFile,
    strictComponentTypes,
    format,
}: {
    themeFile: string
    strictComponentTypes?: boolean
    format?: boolean
}): Promise<string>
{
    const worker = fork(
        path.join(__dirname, "..", "..", "scripts", "read-theme-file.worker.js"),
        [themeFile]
            .concat(strictComponentTypes ? "--strict-component-types" : [])
            .concat(format ? "--format" : []),
        {
            stdio: ["pipe", "pipe", "pipe", "ipc"],
            cwd: process.cwd(),
        },
    )

    return new Promise((resolve, reject) =>
    {
        worker.on("message", (message: ErrorRecord | Serializable) =>
        {
            const errMessage = (message as ErrorRecord)?.err
            console.log(errMessage) 

            if (errMessage)
            {
                reject(new Error(errMessage))
            }

            return resolve(String(message))
        })

        worker.on('error', (error) =>
        {
            console.log("error", error);
            reject(error);
        });

        worker.stdout?.on('data', (data) =>
        {
            console.log(`child stdout:\n${data}`);
        });

        worker.stderr?.on('data', (data) =>
        {
            console.error(`child stderr:\n${data}`);
        });
    })
}

export async function generateThemeTypings({
    themeFile,
    out,
    strictComponentTypes,
    format,
    onError,
}: {
    themeFile: string
    out?: string
    strictComponentTypes?: boolean
    format?: boolean
    onError?: () => void
})
{
    const spinner = ora("Generating valerya components typings").start()
    try
    {
        const [componentTypings, surfaceTypings] = await runTemplateWorker({
            themeFile,
            strictComponentTypes,
            format,
        })
        
        spinner.info()
        
        if (componentTypings)
        {
            const outPath = await resolveOutputPath("Components.d.ts", out)
            spinner.text = `Write file "${outPath}"...`
            await writeFileAsync(outPath, componentTypings, "utf8")
        }
        else
        {
            spinner.text = "No components in theme, skipping."
        }

        if (surfaceTypings)
        {
            const outPath = await resolveOutputPath("ValeryaThemeTypings.d.ts", out)
            spinner.text = `Write file "${outPath}"...`
            await writeFileAsync(outPath, surfaceTypings, "utf8")
        }
        else
        {
            spinner.text = "No surfaces in theme, skipping."
        }

        spinner.succeed("Done")
    } 
    catch (e)
    {
        spinner.fail("An error occurred")
        if (e instanceof Error)
        {
            console.error(e.message)
        }
        spinner.stop()
        onError?.()
    } 
    finally
    {
        spinner.stop()
    }
}

export { themeInterfaceDestination }
