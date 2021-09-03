#!/usr/bin/env node

let opts = {
  bundle: true,
  format: "esm",
  target: "es2015",
  sourcemap: true,
  minify: process.env.NODE_ENV === "production",
  outdir: "./dist",
  outExtension: { ".js": ".mjs" },
  entryPoints: ["src/index.ts"],
  logLevel: "debug",
};

let esbuild = require("esbuild");
esbuild.build(opts);
