//there are some dum ahhh errors my dum ah cant fix
import { defineConfig } from "vitepress";
import { Dirent, existsSync, readdirSync } from "fs";
import { join } from "path";
import llms from "vitepress-plugin-llms";
const apiDir = "./doc/api";
import {withPwa} from "@vite-pwa/vitepress"
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";
import {generateBreadcrumbsData} from "@nolebase/vitepress-plugin-breadcrumbs/vitepress"
function titleCase(string: string) {
  return string
    .split(/[\s\-]/)
    .map((a) => a[0]?.toUpperCase() + a.slice(1).toLowerCase())
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
  "constants",
  "interfaces", "enumerations"
]);

function generateSidebar(dir: string, base = "", topLevel = true) {
  const entries = readdirSync(dir, { withFileTypes: true });

  const directoryReadme = entries.some(
    (entry) => entry.isFile() && entry.name.toLowerCase() === "readme.md",
  );

  return entries
    .map((entry) => {
      const fullPath = joinUrl(dir, entry.name);
      const name = entry.name.replace(/\.md$/, "");

      if (entry.isDirectory()) {
        const text = a.has(name) || topLevel ? titleCase(name) : name;

        const childReadme =
          existsSync(join(fullPath, "README.md")) ||
          existsSync(join(fullPath, "readme.md"));

        return {
          text,
          collapsed: true,
          ...(childReadme
            ? { link: joinUrl("/api", joinUrl(base, entry.name)) + "/README" }
            : {}),
          items: generateSidebar(fullPath, joinUrl(base, entry.name), false),
        };
      }

      if (entry.name.toLowerCase() === "readme.md") {
        if (topLevel) {
          return {
            text: "Main",
            link: "/api/README",
          };
        }

        return null;
      }

      if (entry.name.endsWith(".md")) {
        return {
          text: a.has(name) || topLevel ? titleCase(name) : name,
          link: joinUrl("/api", joinUrl(base, name)),
        };
      }

      return null;
    })
    .filter(Boolean);
}
// https://vitepress.dev/reference/site-config

export default /*withPwa*/(defineConfig({
  title: "Cosmotic API",
  base: "/cosmotic/",

  vite: {
    plugins: [
      llms({
        generateLLMsTxt: true,
        generateLLMsFullTxt: true,
        generateLLMFriendlyDocsForEachPage: true,
        description:
          "A High & Low Level Graphics API: Experience Modularity in 3D Graphics programming. Newbies, Pros, Hackers and Gods: All welcomed!",
        domain: "https://kryft-studios.github.io/cosmotic",
        title: "Cosmotic API",
        injectLLMHint: true,
      }),

      GitChangelog({
        repoURL: () => "https://github.com/Kryft-Studios/cosmotic",
      }),

      GitChangelogMarkdownSection(),

    ],
    optimizeDeps: {
        exclude: [
          "@nolebase/vitepress-plugin-breadcrumbs/client",
          "@nolebase/vitepress-plugin-enhanced-readabilities/client",
          "@nolebase/vitepress-plugin-inline-link-preview/client",
          "vitepress",
          "@nolebase/ui",
        ],
      },

      ssr: {
        noExternal: [
          "@nolebase/vitepress-plugin-breadcrumbs",
          "@nolebase/vitepress-plugin-enhanced-readabilities",
          "@nolebase/vitepress-plugin-inline-link-preview",
          "@nolebase/ui",
        ],
      },
  },
  transformPageData(pageData, ctx) {
      generateBreadcrumbsData(pageData, ctx)
  },
  // @ts-ignore PWA is added by @vite-pwa/vitepress
  pwa: {
    registerType: "prompt",

    manifest: {
      name: "Cosmotic API",
      short_name: "Cosmotic",
      description: "Documentation for the Cosmotic WebGPU abstraction library.",
      start_url: "/cosmotic/",
      scope: "/cosmotic/",
      display: "standalone",
      theme_color: "#ff7a00",
      background_color: "#111111",

    },
  },

  sitemap: {
    hostname: "https://kryft-studios.github.io/cosmotic",
  },

  description:
    "Cosmotic is an easy-to-use and easy-to-adapt WebGPU abstraction. It aims to give you full control over your WebGPU device while providing high-level abstractions.",

  outDir: "../docs",
head: [
  [ "link", {rel: "icon", "type": "image/png","href": "/cosmotic-logo.png"}],
  ['meta', {
      property: 'og:type',
      content: 'website',
    }],
    ['meta', {
      property: 'og:site_name',
      content: 'Cosmotic',
    }],
    ['meta', {
      property: 'og:title',
      content: 'Cosmotic | Modularity is Priority',
    }],
    ['meta', {
      property: 'og:description',
      content: 'A high and low level graphics API. Experience modularity in 3D graphics programming.',
    }],
    ['meta', {
      property: 'og:url',
      content: 'https://kryft-studios.github.io/cosmotic/',
    }],
    ['meta', {
      property: 'og:image',
      content: 'https://kryft-studios.github.io/cosmotic/cosmotic-banner.png',
    }],
    ['meta', {
      property: 'og:image:width',
      content: '1200',
    }],
    ['meta', {
      property: 'og:image:height',
      content: '630',
    }],

    // Twitter / X
    ['meta', {
      name: 'twitter:card',
      content: 'summary_large_image',
    }],
    ['meta', {
      name: 'twitter:title',
      content: 'Cosmotic | Modularity is Priority',
    }],
    ['meta', {
      name: 'twitter:description',
      content: 'A high and low level graphics API. Experience modularity in 3D graphics programming.',
    }],
    ['meta', {
      name: 'twitter:image',
      content: 'https://kryft-studios.github.io/cosmotic/cosmotic-banner.png',
    }],],  themeConfig: {
    siteTitle: "Cosmotic",
    logo: "/cosmotic-logo.png",
    lastUpdated: {
      text: "Last modified",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },

    returnToTopLabel: "Return to top",

    docFooter: {
      next: "Next",
      prev: "Previous",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "API Reference", link: "/api/README.md" },
    ],

    sidebar: [
      { text: "API Reference", items: generateSidebar(apiDir) },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Kryft-Studios/cosmotic",
      },
      {
        icon: "youtube",
        link: "https://youtube.com/@ObiloxYT",
      },
    ],
  },
}));
