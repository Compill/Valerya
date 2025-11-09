#!/usr/bin/env node
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const entry = resolve(__dirname, "../dist/index.js");

// Run Node with the flag so directory imports work properly
const child = spawn(
  process.execPath,
  [ "--experimental-specifier-resolution=node", entry, ...process.argv.slice(2) ],
  { stdio: "inherit" }
);

child.on("exit", (code) => process.exit(code));
