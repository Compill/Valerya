import checkNode from "cli-check-node"
import welcome from "cli-welcome"
import updateNotifier from "update-notifier"
import unhandledError from "cli-handle-unhandled"
import pkgJSON from "../../package.json"

export async function initCLI()
{
    checkNode(`12`)
    await unhandledError()
    welcome({
        title: "Valerya UI CLI",
        tagLine: `by Compill\nA CLI to generate typings for components and surfaces`,
        // tagLine: `by Compill\n${pkgJSON.description}`,
        bgColor: `#319795`,
        color: `#FFFFFF`,
        bold: true,
        clear: false,
        version: pkgJSON.version,
    })

    updateNotifier({
        pkg: pkgJSON,
        shouldNotifyInNpmScript: true,
        updateCheckInterval: 1000 * 60 * 60 * 24 * 3, // 3 days
    }).notify({ isGlobal: true })
}
