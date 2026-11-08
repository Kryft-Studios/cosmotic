import type { AkariThemeConfig } from "./theme/types";

const themeConfig: AkariThemeConfig = {
  debugInfo: false,
  homePostsPerPage: 12,
  nav: [
    { text: "Home", link: "cosmotic/index.html" },
    { text: "API Reference", link: "cosmotic/api/index.html" },
  ],
  hideFromHomeLayouts: ["home"],
  defaultColorsSet: ["#ff7a00"],
  baseThemeColor: "#ff7a00",
  siteNotice: [],
  trackers: {
    google: { use: false, id: "" },
    matomo: { use: false, siteID: 0, trackerUrl: "" },
  },
  docSearch: {
    appId: "",
    indexName: "",
    apiKey: "",
    insights: true,
    placeholder: "Search",
  },
  footer: {
    aboutMe: "Documentation for the Cosmotic WebGPU abstraction library.",
    socials: [
      {
        text: "GitHub",
        link: "https://github.com/Kryft-Studios/cosmotic",
      },
    ],
    links: [{ text: "API Reference", link: "/api/index.html" }],
    copyRight: "Copyright 2026 Kryft Studios",
  },
  use_blur_background: false,
  bounceAnimation: false,
};

export default {
  title: "Cosmotic API",
  themeConfig,
};
