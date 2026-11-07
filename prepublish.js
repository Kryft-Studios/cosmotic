import { execSync } from "node:child_process";
import { globSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname } from "node:path";
let pkgs = process.argv[2] === "e" ? ["."] : readdirSync("packages")
if(pkgs[0] !== "."){process.chdir("packages");console.log("exception")}

for(const a of pkgs){
  execSync("pnpm exec tsc")

  process.chdir(a)
const pjson = JSON.parse(readFileSync("package.json", "utf8"));

const exports = Object.fromEntries([
  [".", "./index.js"],
  ...globSync("dist/*/index.js").map(file => [
    `./${basename(dirname(file))}`,
    `./${file.replaceAll("\\", "/")}`
  ])
]);

pjson.exports = exports
writeFileSync("package.json", JSON.stringify(pjson, null, 2) + "\n");
process.cwd("..")
}