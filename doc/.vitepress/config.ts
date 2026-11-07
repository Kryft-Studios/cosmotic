import { defineConfig } from 'vitepress'
import {Dirent, existsSync, readdirSync} from "fs"
import { join } from 'path';

const apiDir = "./doc/api";

function titleCase(string: string) {
  return string
    .split(/[\s\-]/)
    .map(a => a[0]?.toUpperCase() + a.slice(1).toLowerCase())
    .join(" ");
}

function joinUrl(base: string, segment: string) {
  return `${base.replace(/\/+$/, "")}/${segment.replace(/^\/+/, "")}`;
}

const a = new Set([
  "type-aliases",
  "classes",
  "namespaces",
  "types",
  "variables",
  "functions",
  "constants"
]);

function generateSidebar(dir: string, base = "", topLevel = true) {
  const entries = readdirSync(dir, { withFileTypes: true });

  const directoryReadme = entries.some(
    entry => entry.isFile() && entry.name.toLowerCase() === "readme.md"
  );

  return entries
    .map(entry => {
      const fullPath = joinUrl(dir, entry.name);
      const name = entry.name.replace(/\.md$/, "");

      if (entry.isDirectory()) {
        const text = a.has(name) || topLevel
          ? titleCase(name)
          : name;
      
        const childReadme = existsSync(join(fullPath, "README.md")) ||
                            existsSync(join(fullPath, "readme.md"));
      
        return {
          text,
          collapsed: true,
          ...(childReadme
            ? { link: joinUrl("/api", joinUrl(base, entry.name)) + "/README" }
            : {}),
          items: generateSidebar(
            fullPath,
            joinUrl(base, entry.name),
            false
          )
        };
      }

      if (entry.name.toLowerCase() === "readme.md") {
        if (topLevel) {
          return {
            text: "Main",
            link: "/api/README"
          };
        }

        return null;
      }

      if (entry.name.endsWith(".md")) {
        return {
          text: a.has(name) || topLevel ? titleCase(name) : name,
          link: joinUrl("/api", joinUrl(base, name))
        };
      }

      return null;
    })
    .filter(Boolean);
}
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cosmotic API",
  Base: "/cosmotic/",
  description: "Cosmotic is a easy to use and easy to adapt webgpu abstraction. It aims full control over your webgpu device while confirming high level abstractions",
"outDir": "../docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: "API Reference", link: "/api/README.md" }
    ],
    

    sidebar: [
        {text: "API Reference", items: generateSidebar(apiDir)}
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kryft-Studios/cosmotic' }, 
      { icon: "youtube", link: "https://youtube.com/@ObiloxYT"},
      
    ]
  }
})
