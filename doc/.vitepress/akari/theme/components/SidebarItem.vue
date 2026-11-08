<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vitepress';
import type { DefaultTheme } from 'vitepress/theme';

const props = defineProps<{
    item: DefaultTheme.SidebarItem;
    level: number;
}>();

const router = useRouter();

function resolveUrl(url: string) {
    if (url === '/') {
        return '/index.html';
    }
    return url.endsWith('.html') ? url : `${url}.html`;
}

const isActive = computed(() =>
    props.item.link !== undefined &&
    resolveUrl(router.route.path) === resolveUrl(props.item.link)
);

function hasActiveChild(item: DefaultTheme.SidebarItem): boolean {
    return Boolean(
        (item.link && resolveUrl(router.route.path) === resolveUrl(item.link)) ||
        item.items?.some(hasActiveChild)
    );
}

const containsActiveItem = computed(() => hasActiveChild(props.item));
const expanded = ref(props.item.collapsed !== true || containsActiveItem.value);

watch(containsActiveItem, (active) => {
    if (active) {
        expanded.value = true;
    }
});

function navigate() {
    if (props.item.link) {
        router.go(resolveUrl(props.item.link));
    }
}
</script>

<template>
    <li class="sidebar-node">
        <details v-if="item.items?.length" :open="expanded">
            <summary class="sidebar-group" :style="{ '--sidebar-level': level }" :aria-expanded="expanded">
                {{ item.text }}
            </summary>
            <ul class="sidebar-children">
                <SidebarItem
                    v-if="item.link"
                    :item="{ text: 'Overview', link: item.link }"
                    :level="level + 1"
                />
                <SidebarItem
                    v-for="(child, index) in item.items"
                    :key="`${child.text}-${index}`"
                    :item="child"
                    :level="level + 1"
                />
            </ul>
        </details>
        <mdui-list-item
            v-else
            class="sidebar-link"
            :class="{ 'is-active': isActive }"
            :style="{ '--sidebar-level': level }"
            rounded
            :active="isActive"
            @click="navigate"
        >
            {{ item.text }}
        </mdui-list-item>
    </li>
</template>

<style scoped>
.sidebar-node {
    list-style: none;
}

.sidebar-children {
    margin: 0;
    padding: 0;
}

.sidebar-group {
    cursor: pointer;
    border-radius: var(--mdui-shape-corner-medium);
    color: rgb(var(--mdui-color-on-surface-variant));
    padding: 10px 12px 10px calc(12px + var(--sidebar-level) * 16px);
    font-weight: 500;
    list-style: none;
    transition: background-color 160ms ease;
}

.sidebar-group::-webkit-details-marker {
    display: none;
}

.sidebar-group::after {
    content: '›';
    float: right;
    transform: rotate(90deg);
    transition: transform 160ms ease;
}

details[open] > .sidebar-group::after {
    transform: rotate(-90deg);
}

.sidebar-group:hover,
.sidebar-link:hover {
    background: rgba(var(--mdui-color-on-surface), 0.08);
}

.sidebar-link {
    padding-inline-start: calc(12px + var(--sidebar-level) * 16px);
}

.sidebar-link.is-active {
    background-color: rgba(var(--mdui-color-secondary-container), 0.7);
    box-shadow: var(--mdui-elevation-level1);
}
</style>
