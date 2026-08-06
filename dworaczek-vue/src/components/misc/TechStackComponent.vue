<template>
    <panel-component :icon="props.icon" :heading="props.heading">
        <template #content>
            <div
                ref="containerRef"
                class="tech-stack-details"
                :style="{
                    'grid-template-columns': 'repeat(' + columns + ', 1fr)'
                }"
            >
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
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useThemeMode } from '@/composables/ThemeComposable';
import PanelComponent from '@/components/core/PanelComponent.vue';

const props = defineProps({
    techStack: {
        type: Array,
        required: true
    },
    icon: {
        type: Object,
        default: () => ({ name: 'gi-stack', scale: 1.5 })
    },
    heading: {
        type: Object,
        default: () => ({ text: 'Current Technology', size: 'medium' })
    },
    minEntryWidth: {
        type: Number,
        default: 200
    }
});

const { prefersLightMode } = useThemeMode();
const renderedTechStack = ref([]);

const containerRef = ref(null);
const containerWidth = ref(0);
const columns = ref(1);

// Work out how many columns nicely fill the available width.
// We only ever pick a column count that divides the entry count evenly
// (entries % columns === 0), so the grid never ends up with a sparse,
// unevenly filled last row.
function calculateColumns() {
    const count = renderedTechStack.value.length;

    if (count === 0 || !containerWidth.value) {
        columns.value = 1;
        return;
    }

    const maxColumnsByWidth = Math.max(1, Math.floor(containerWidth.value / props.minEntryWidth));
    const maxColumns = Math.min(count, maxColumnsByWidth);

    let bestColumns = 1;
    for (let cols = maxColumns; cols >= 1; cols--) {
        if (count % cols === 0) {
            bestColumns = cols;
            break;
        }
    }

    columns.value = bestColumns;
}

function updateContainerWidth() {
    if (containerRef.value) {
        containerWidth.value = containerRef.value.clientWidth;
    }
    calculateColumns();
}

let resizeObserver;
let resizeFrame = null;

// Defer to the next animation frame so we're not reading/writing layout
// synchronously inside the ResizeObserver callback itself, which is what
// triggers the browser's "loop completed with undelivered notifications"
// warning.
function handleResize() {
    if (resizeFrame !== null) {
        cancelAnimationFrame(resizeFrame);
    }
    resizeFrame = requestAnimationFrame(() => {
        resizeFrame = null;
        updateContainerWidth();
    });
}

onMounted(() => {
    if (containerRef.value) {
        resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(containerRef.value);
    }
    updateContainerWidth();
});

onUnmounted(() => {
    resizeObserver?.disconnect();
    if (resizeFrame !== null) {
        cancelAnimationFrame(resizeFrame);
    }
});

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

// Recalculate columns whenever the tech stack itself changes.
watch(() => props.techStack, () => {
    updateRenderedTechStack();
    calculateColumns();
}, { deep: true });
</script>

<style lang="less" scoped>
.tech-stack-details {
    display: grid;
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