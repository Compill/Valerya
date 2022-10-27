import "regenerator-runtime/runtime"
import * as path from "path"
import { program } from "commander"
import chokidar from "chokidar"
import throttle from "lodash.throttle"
import { initCLI } from "./utils/init-cli"
import { generateThemeTypings, themeInterfaceDestination } from "./command/tokens"

type OptionsType = {
    out?: string
    strictComponentTypes?: boolean
    format: boolean
    watch?: string
}

export async function run()
{
    await initCLI()

    program
        .command("typings <source>")
        .option(
            "--out <path>",
            `output dir e.g. ${path.join(...themeInterfaceDestination)}`,
        )
        .option("--no-format", "Disable auto formatting")
        .option("--watch [path]", "Watch directory for changes and rebuild")
        .action(async (themeFile: string, options: OptionsType) =>
        {
            const { out, format, watch } = options

            if (watch)
            {
                const watchPath =
                    typeof watch === "string" ? watch : path.dirname(themeFile)
                const throttledGenerateThemeTypings = throttle(async () =>
                {
                    console.time("Duration")
                    await generateThemeTypings({
                        themeFile,
                        out,
                        format,
                    })
                    console.timeEnd("Duration")
                    console.info(new Date().toLocaleString())
                }, 1_000)

                // run once to initialize
                throttledGenerateThemeTypings()

                chokidar.watch(watchPath).on("change", throttledGenerateThemeTypings)
                return
            }

            await generateThemeTypings({
                themeFile,
                out,
                format,
                onError: () => process.exit(1),
            })
        })

    program.on("--help", () =>
    {
        console.info(`Example call:
  $ valerya-cli components theme.ts
`)
    })

    program.parse()
}
