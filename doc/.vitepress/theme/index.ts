// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import {NolebaseBreadcrumbs} from "@nolebase/vitepress-plugin-breadcrumbs/client"
export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
     "doc-before": () => h(NolebaseBreadcrumbs),
   }),
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
