<script setup>
import PanelComponent from '@/components/core/PanelComponent.vue';
import { defineProps } from 'vue';

const props = defineProps({
    techStack: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <panel-component :icon="{ name: 'gi-stack', scale: 1.5 }" :heading="{ text: 'Current Technology', size: 'medium' }">
        <template #content>
            <div class="tech-stack-details">
                <div v-for="(tech, index) in props.techStack" :key="'tech-stack-' + index" class="tech-stack-detail border">
                    <div class="tech-stack-logo-container">
                        <v-icon class="tech-stack-icon" :name="tech.logo" />
                    </div>
                    <div class="tech-stack-info">
                        <span class="tech-stack-name">{{ tech.name }}</span>
                        <span class="tech-stack-description">{{ tech.description }}</span>
                    </div>
                </div>
            </div>
        </template>
    </panel-component>
</template>

<style lang="less" scoped>
.tech-stack-details {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.tech-stack-detail {
    overflow: hidden;
    position: relative;
    display: flex;
    gap: 1rem;
    align-items: center;
    width: calc((100% / 2) - 34px - 1rem);
}

.tech-stack-logo-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.tech-stack-icon {
    filter: grayscale(1);
    opacity: 0.05;
    height: 50%;
    width: 50%;
}

.tech-stack-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .tech-stack-name {
        font-family: 'Bold';
        font-size: 1rem;
    }

    .tech-stack-description {
        font-family: 'Light';
        font-size: 0.75rem;
    }
}
</style>