
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import Lenis from "lenis";

import "./style.css";
import "lenis/dist/lenis.css";

import {
  NolebaseBreadcrumbs,
} from "@nolebase/vitepress-plugin-breadcrumbs/client";

import {
  NolebaseEnhancedReadabilitiesPlugin,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";

import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";

import {
  NolebaseInlineLinkPreviewPlugin,
} from "@nolebase/vitepress-plugin-inline-link-preview/client";

import {
  NolebaseGitChangelogPlugin,
} from "@nolebase/vitepress-plugin-git-changelog/client";

import "@nolebase/vitepress-plugin-git-changelog/client/style.css";

let lenis = null;

export const Theme = {
  extends: DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "doc-before": () => h(NolebaseBreadcrumbs),
    });
  },

  enhanceApp({ app }) {
    // Initialize Lenis once, in the browser.
    if (typeof window !== "undefined" && !lenis) {
      lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
      
        // Slightly amplify wheel movement
        wheelMultiplier: 1.08,
      
        // Gentle inertia
        lerp: 0.075,
      
        anchors: true,
        stopInertiaOnNavigate: true,
        allowNestedScroll: true,
      });
    }

    app.use(NolebaseEnhancedReadabilitiesPlugin);
    app.use(NolebaseInlineLinkPreviewPlugin);
    app.use(NolebaseGitChangelogPlugin);
  },
};

export default Theme;
