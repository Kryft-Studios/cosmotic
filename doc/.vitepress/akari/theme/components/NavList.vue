<script setup lang="ts">
import themeConfig from '@vitepress-theme-akari/config';
import { useData, useRouter } from 'vitepress';
import { computed, ref, watch, onMounted } from 'vue';
import { useThemeGlobalStore } from '@vitepress-theme-akari/theme/global';
import { storeToRefs } from 'pinia';
import SidebarItem from './SidebarItem.vue';
import type { DefaultTheme } from 'vitepress/theme';

const store = useThemeGlobalStore()
const { backgroundImage } = storeToRefs(store)

const router = useRouter()
const { site } = useData()
const url = ref()

const sidebarItems = computed<DefaultTheme.SidebarItem[]>(() => {
    const sidebar = site.value.themeConfig.sidebar
    if (Array.isArray(sidebar)) {
        return sidebar
    }

    if (!sidebar) {
        return []
    }

    const route = router.route.path
    const match = Object.keys(sidebar)
        .filter((path) => route.startsWith(path))
        .sort((a, b) => b.length - a.length)[0]
    const entry = match ? sidebar[match] : undefined
    return Array.isArray(entry) ? entry : entry?.items ?? []
})


// Normalize paths to VitePress HTML routes.
function resolveUrl(u: string) {
    if (u === '') {
        u = '/'
    }

    if (u === '/'){
        u = '/index.html'
    }
    if (!u.endsWith('.html')) {
        u = u + '.html'
    }
    return u
}


// Update the active URL state.
function changeUrl(u: string) {
    url.value = resolveUrl(u)
}


// Sync active state on route changes.
watch(() => router.route.path, (u: any) => {
    changeUrl(u)
})


// Navigate to the selected nav item and store transition data.
function clickTo(u: string) {
    u = resolveUrl(u)
    if (resolveUrl(router.route.path) == u) {
        return
    }
    url.value = u

    router.go(url.value)
}

onMounted(() => {
    changeUrl(router.route.path)
})

</script>


<template>
    <div class="navigation-content">
        <mdui-list>
            <mdui-list-item class="nav-item" :class="{'blur': backgroundImage}" rounded v-for="nav in themeConfig.themeConfig.nav" :active="url == nav.link" @click="clickTo(nav.link)">{{ nav.text }}</mdui-list-item>
        </mdui-list>

        <mdui-divider v-if="sidebarItems.length" class="navigation-divider"></mdui-divider>

        <mdui-list v-if="sidebarItems.length" class="sidebar-list">
            <SidebarItem v-for="(item, index) in sidebarItems" :key="`${item.text}-${index}`" :item="item" :level="0" />
        </mdui-list>
    </div>
</template>

<style>
.navigation-content {
    padding-bottom: 12px;
}

.navigation-divider {
    margin: 8px 16px;
    width: auto;
}

.nav-item{
    transition: background-color var(--mdui-motion-easing-standard),
     box-shadow var(--mdui-motion-easing-standard);
}

.nav-item.blur[active]:not([active=false i]) {
    background-color: rgba(var(--mdui-color-secondary-container), 0.7);
    /* backdrop-filter: blur(10px); */
    box-shadow: var(--mdui-elevation-level1);
}
</style>