import { execSync } from "node:child_process";
import { globSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname } from "node:path";
execSync("pnpm exec tsc")
const pjson = JSON.parse(readFileSync("package.json", "utf8"));

const exports = Object.fromEntries([
  [".", "./index.js"],
  ...globSync("dist/*/index.js").map(file => [
    `./${basename(dirname(file))}`,
    `./${file.replaceAll("\\", "/")}`
  ])
]);

pjson.exports = exports;

writeFileSync("package.json", JSON.stringify(pjson, null, 2) + "\n");