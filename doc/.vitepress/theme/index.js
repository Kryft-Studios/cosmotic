import AkariTheme from "../akari/theme/index.ts";
import Lenis from "lenis";
import {
  NolebaseEnhancedReadabilitiesPlugin,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";
import {
  NolebaseInlineLinkPreviewPlugin,
} from "@nolebase/vitepress-plugin-inline-link-preview/client";
import "./style.css";
import "lenis/dist/lenis.css";

let lenis = null;

export const Theme = {
  ...AkariTheme,

  async enhanceApp(context) {
    await AkariTheme.enhanceApp(context);

    if (typeof window !== "undefined" && !lenis) {
      lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        wheelMultiplier: 1.08,
        lerp: 0.075,
        anchors: true,
        stopInertiaOnNavigate: true,
        allowNestedScroll: true,
      });
    }

    context.app.use(NolebaseEnhancedReadabilitiesPlugin);
    context.app.use(NolebaseInlineLinkPreviewPlugin);
  },
};

export default Theme;
