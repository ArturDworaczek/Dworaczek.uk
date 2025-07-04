<template>
    <panel-component :icon="{ name: 'gi-stack', scale: 1.5 }" :heading="{ text: 'Current Technology', size: 'medium' }">
        <template #content>
            <div class="tech-stack-details">
                <div v-for="(tech, index) in renderedTechStack" :key="'tech-stack-' + index" class="tech-stack-detail border">
                    <div class="tech-stack-logo-container">
                        <v-icon class="tech-stack-icon" :style="{ 'opacity': tech.effectiveOpacity}" :name="tech.logo" />
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

<script setup>
import { ref, watch } from 'vue';
import { useThemeMode } from '@/composables/ThemeComposable';
import PanelComponent from '@/components/core/PanelComponent.vue';

const props = defineProps({
    techStack: {
        type: Array,
        required: true
    }
});

const { prefersLightMode } = useThemeMode();
const renderedTechStack = ref([]);

function updateRenderedTechStack() {
  renderedTechStack.value = props.techStack.map((tech) => {
    let opacity = 0.05;

    if (tech.opacity) {
      opacity = tech.opacity;
    } else if (prefersLightMode.value && typeof tech.lightOpacity === 'number') {
      opacity = tech.lightOpacity;
    } else if (!prefersLightMode.value && typeof tech.darkOpacity === 'number') {
      opacity = tech.darkOpacity;
    }

    return {
      ...tech,
      effectiveOpacity: opacity,
    };
  });
}

// Run initially
updateRenderedTechStack();

// Re-run on theme change
watch(prefersLightMode, updateRenderedTechStack);
</script>

<style lang="less" scoped>
.tech-stack-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.tech-stack-detail {
    overflow: hidden;
    position: relative;
    display: flex;
    gap: 1rem;
    align-items: center;
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
    height: 50%;
    width: 50%;
    max-width: 100px;
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