#!/usr/bin/env node
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../../../../../../../opt/homebrew/lib/node_modules/tsup/assets/esm_shims.js
import path from "path";
import { fileURLToPath } from "url";
var import_meta = {};
var getFilename = /* @__PURE__ */ __name(() => fileURLToPath(import_meta.url), "getFilename");
var getDirname = /* @__PURE__ */ __name(() => path.dirname(getFilename()), "getDirname");
var __dirname = /* @__PURE__ */ getDirname();

// src/index.ts
import "regenerator-runtime/runtime";
import * as path4 from "path";
import { program } from "commander";
import chokidar from "chokidar";
import throttle from "lodash.throttle";

// src/utils/init-cli.ts
import checkNode from "cli-check-node";
import welcome from "cli-welcome";
import updateNotifier from "update-notifier";
import unhandledError from "cli-handle-unhandled";

// package.json
var package_default = {
  name: "@valerya/cli",
  version: "1.0.15",
  description: "A CLI to create component typings for Valerya UI",
  bin: {
    "soperio-cli": "bin/index.mjs"
  },
  publishConfig: {
    access: "public"
  },
  sideEffects: false,
  main: "dist/index.js",
  files: [
    "dist",
    "bin"
  ],
  scripts: {
    build: "unbuild",
    devValeryia: "clear & node bin/index.js typings ./src/test/theme.ts",
    devValeryaOut: "clear & node bin/index.js typings ./src/test/theme.ts  --out ./src/test"
  },
  dependencies: {
    "@swc/core": "^1.2.177",
    chokidar: "^3.5.3",
    "cli-check-node": "^1.3.4",
    "cli-handle-unhandled": "^1.1.1",
    "cli-welcome": "^2.2.2",
    commander: "^9.3.0",
    "lodash.throttle": "^4.1.1",
    "module-alias": "^2.2.2",
    ora: "^5.3.0",
    prettier: "^2.7.1",
    "regenerator-runtime": "^0.13.7",
    "ts-node": "^10.7.0",
    "tsconfig-paths": "^4.0.0",
    "update-notifier": "^5.0.1"
  },
  devDependencies: {
    "@types/lodash.throttle": "^4.1.7",
    "@types/module-alias": "^2.0.1",
    "@types/ora": "^3.2.0",
    "@types/update-notifier": "5.0.0",
    tsup: "^8.5.0"
  }
};

// src/utils/init-cli.ts
function initCLI() {
  return __async(this, null, function* () {
    checkNode(`12`);
    yield unhandledError();
    welcome({
      title: "Valerya UI CLI",
      tagLine: `by Compill
A CLI to generate typings for components and surfaces`,
      // tagLine: `by Compill\n${pkgJSON.description}`,
      bgColor: `#319795`,
      color: `#FFFFFF`,
      bold: true,
      clear: false,
      version: package_default.version
    });
    updateNotifier({
      pkg: package_default,
      shouldNotifyInNpmScript: true,
      updateCheckInterval: 1e3 * 60 * 60 * 24 * 3
    }).notify({
      isGlobal: true
    });
  });
}
__name(initCLI, "initCLI");

// src/command/tokens/index.ts
import { promisify as promisify2 } from "util";
import { writeFile } from "fs";
import { fork } from "child_process";
import path3 from "path";
import ora from "ora";

// src/command/tokens/resolve-output-path.ts
import fs from "fs";
import path2 from "path";
import { promisify } from "util";
var exists = promisify(fs.exists);
var themeInterfaceDestination = [
  "node_modules",
  "@valerya",
  "core",
  "lib"
];
function resolveThemingDefinitionPath(file) {
  return __async(this, null, function* () {
    const dest = themeInterfaceDestination.concat(file);
    const baseDir = path2.join("..", "..", "..");
    const cwd = process.cwd();
    const pathsToTry = [
      path2.resolve(baseDir, "..", ...dest),
      path2.resolve(baseDir, "..", "..", ...dest),
      path2.resolve(cwd, ...dest),
      path2.resolve(cwd, "..", ...dest),
      path2.resolve(cwd, "..", "..", ...dest)
    ];
    const triedPaths = yield Promise.all(pathsToTry.map((possiblePath) => __async(null, null, function* () {
      if (yield exists(possiblePath)) {
        return possiblePath;
      }
      return "";
    })));
    return triedPaths.find(Boolean);
  });
}
__name(resolveThemingDefinitionPath, "resolveThemingDefinitionPath");
function resolveOutputPath(defaultFile, overridePath) {
  return __async(this, null, function* () {
    if (overridePath) {
      return path2.resolve(process.cwd(), overridePath, defaultFile);
    }
    const themingDefinitionFilePath = yield resolveThemingDefinitionPath(defaultFile);
    if (!themingDefinitionFilePath) {
      throw new Error("Could not find @valerya/core in node_modules. Please provide `--out` parameter.");
    }
    return themingDefinitionFilePath;
  });
}
__name(resolveOutputPath, "resolveOutputPath");

// src/command/tokens/index.ts
var writeFileAsync = promisify2(writeFile);
function runTemplateWorker(_0) {
  return __async(this, arguments, function* ({ themeFile, strictComponentTypes, format }) {
    const worker = fork(path3.join(__dirname, "..", "..", "scripts", "read-theme-file.worker.js"), [
      themeFile
    ].concat(strictComponentTypes ? "--strict-component-types" : []).concat(format ? "--format" : []), {
      stdio: [
        "pipe",
        "pipe",
        "pipe",
        "ipc"
      ],
      cwd: process.cwd()
    });
    return new Promise((resolve, reject) => {
      var _a, _b;
      worker.on("message", (message) => {
        const errMessage = message == null ? void 0 : message.err;
        console.log(errMessage);
        if (errMessage) {
          reject(new Error(errMessage));
        }
        return resolve(message);
      });
      worker.on("error", (error) => {
        console.log("error", error);
        reject(error);
      });
      (_a = worker.stdout) == null ? void 0 : _a.on("data", (data) => {
        console.log(`child stdout:
${data}`);
      });
      (_b = worker.stderr) == null ? void 0 : _b.on("data", (data) => {
        console.error(`child stderr:
${data}`);
      });
    });
  });
}
__name(runTemplateWorker, "runTemplateWorker");
function generateThemeTypings(_0) {
  return __async(this, arguments, function* ({ themeFile, out, strictComponentTypes, format, onError }) {
    const spinner = ora("Generating valerya typings").start();
    try {
      const { components: componentTypings, surfaces: surfaceTypings } = yield runTemplateWorker({
        themeFile,
        strictComponentTypes,
        format
      });
      spinner.info();
      if (componentTypings) {
        const outPath = yield resolveOutputPath("Components.d.ts", out);
        spinner.text = `Write file "${outPath}"...`;
        yield writeFileAsync(outPath, componentTypings, "utf8");
      } else {
        spinner.text = "No components in theme, skipping.";
      }
      if (surfaceTypings) {
        const outPath = yield resolveOutputPath("ValeryaThemeTypings.d.ts", out);
        spinner.text = `Write file "${outPath}"...`;
        yield writeFileAsync(outPath, surfaceTypings, "utf8");
      } else {
        spinner.text = "No surfaces in theme, skipping.";
      }
      spinner.succeed("Done");
    } catch (e) {
      spinner.fail("An error occurred");
      if (e instanceof Error) {
        console.error(e.message);
      }
      spinner.stop();
      onError == null ? void 0 : onError();
    } finally {
      spinner.stop();
    }
  });
}
__name(generateThemeTypings, "generateThemeTypings");

// src/index.ts
function run() {
  return __async(this, null, function* () {
    yield initCLI();
    program.command("typings <source>").option("--out <path>", `output dir e.g. ${path4.join(...themeInterfaceDestination)}`).option("--no-format", "Disable auto formatting").option("--watch [path]", "Watch directory for changes and rebuild").action((themeFile, options) => __async(null, null, function* () {
      const { out, format, watch } = options;
      if (watch) {
        const watchPath = typeof watch === "string" ? watch : path4.dirname(themeFile);
        const throttledGenerateThemeTypings = throttle(() => __async(null, null, function* () {
          console.time("Duration");
          yield generateThemeTypings({
            themeFile,
            out,
            format
          });
          console.timeEnd("Duration");
          console.info((/* @__PURE__ */ new Date()).toLocaleString());
        }), 1e3);
        throttledGenerateThemeTypings();
        chokidar.watch(watchPath).on("change", throttledGenerateThemeTypings);
        return;
      }
      yield generateThemeTypings({
        themeFile,
        out,
        format,
        onError: /* @__PURE__ */ __name(() => process.exit(1), "onError")
      });
    }));
    program.on("--help", () => {
      console.info(`Example call:
  $ valerya-cli components theme.ts
`);
    });
    program.parse();
  });
}
__name(run, "run");
export {
  run
};
