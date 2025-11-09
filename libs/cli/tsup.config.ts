import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: false,  // CLI doesn't need types
  clean: true,
  shims: true,  // Important for CLI tools
  banner: {
    js: '#!/usr/bin/env node',  // Force shebang in output
  },
});
