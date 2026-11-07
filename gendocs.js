import { execSync } from "child_process";
import { globSync, readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path/posix";
const collectedPoints = [];
const tsconfigJSON = JSON.parse(readFileSync("typedoc.json"));
/* 
for (const a of readdirSync("packages")) {
  process.chdir(path.join("packages", a));
  collectedPoints.push(
    ...globSync("src/**index.ts").map((d) => ({ a: d, b: a })),
    { a: "src/index.ts", b: a },
  );
  process.chdir("../..");
}
tsconfigJSON.entryPoints = collectedPoints
  .map((a) => path.join("packages", a.b, a.a))
  .map((a) => a.replaceAll("\\", "/"));
writeFileSync("typedoc.json", JSON.stringify(tsconfigJSON, undefined, 1));
*/
execSync("pnpm exec typedoc");
execSync('pnpm exec vitepress build docs')
