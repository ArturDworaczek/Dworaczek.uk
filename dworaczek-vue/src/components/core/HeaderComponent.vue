<script setup>
import { computed } from 'vue';
import TwoToggleButtonComponent from '@/components/ui/buttons/TwoToggleButtonComponent.vue';

const prefersLightMode = computed(() => window.matchMedia('(prefers-color-scheme: light)').matches);

function toggleViewModes() {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.setAttribute('data-theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
}
</script>

<template>
    <header class="header">
        <!-- TODO: Add this back when scope increases -->
        <!-- <div class="header-navigation">
            <router-link class="header-navigation-entry" to="/">Home</router-link>
            <router-link class="header-navigation-entry" to="/articles">Articles</router-link>
            <router-link class="header-navigation-entry" to="/contact">Contact</router-link>
        </div> -->

        <two-toggle-button-component 
            class="header-switch-theme" aria-label="Switch theme button" :checked="!prefersLightMode" transparent :default-value="prefersLightMode"
            off-text="" off-icon="bi-moon-stars" on-text="" on-icon="bi-sun" @click="toggleViewModes"
        />
    </header>
</template>
  
<style lang="less" scoped>
.header {
    display: flex;
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
    min-height: 49px;
}
.header-navigation {
    display: flex;
    padding: 10px;
    border-radius: 30px;
    width: max-content;
    background-color: @dworaczek-white-gray;
}
[data-theme="dark"] .header-navigation {
    background-color: @dworaczek-light-gray;
}

.header-navigation-entry {
    padding: 6px 20px 5px 20px;
    text-align: center;
}
.header-navigation-entry:not(:first-child) {
    border-left: 1px solid white;
}
[data-theme="dark"] .header-navigation-entry:not(:first-child) {
    border-left: 1px solid @dworaczek-gray;
}

.header-switch-theme {
    position: absolute;
    right: 0;
}

@media screen and (max-width: @breakpoint-mobile) {
    .header {
        justify-content: flex-start;
    }
}
</style>