<template>
    <panel-component class="projects" :icon="{ name: 'md-rocketlaunch-round', scale: 1.25 }" :heading="{ text: 'Projects', size: 'medium' }">
        <template #content>
            <component :is="currentModal" ref="projectModalRef" />
            <div class="projects-grid">
                <div v-for="(project, index) in props.projects" :key="index" class="project-card border" @click="showModalHandler(project.modal)">
                    <div class="project-card-header">
                        <img width="40" height="40" :alt="project.logoAlt" :src="project.logo" class="project-logo background-secondary" />
                        <span class="project-name">{{ project.name }}</span>
                    </div>
                    <div class="project-info">
                        <span class="project-tagline">{{ project.tagline }}</span>
                    </div>
                </div>
            </div>
        </template>
    </panel-component>
</template>

<script setup>
import PanelComponent from '@/components/core/PanelComponent.vue';
import { ref, shallowRef } from 'vue';

const props = defineProps({
    projects: {
        type: Array,
        default: () => []
    }
});

const projectModalRef = ref(null);
const currentModal = shallowRef(null);

function showModalHandler(modal) {
    if (modal != null) {
        currentModal.value = modal;

        setTimeout(() => {
            projectModalRef.value.getModal().showModalHandler();
        }, 100);
    }
}
</script>

<style lang="less" scoped>
.projects:deep(.panel-heading) {
    margin-bottom: 0;
}

.projects-grid {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
}

.project-card {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1rem;
    cursor: pointer;
    transition: 0.25s;
}

.project-card:hover {
    border-color: @dworaczek-green;
    background-color: @dworaczek-white-gray;
}
[data-theme="dark"] .project-card:hover {
    border-color: @dworaczek-green;
    background-color: @dworaczek-light-gray;
}

.project-card-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.project-logo {
    padding: 5px;
    border-radius: 50%;
    object-fit: cover;
}

.project-name {
    font-family: 'Bold';
    font-size: 1rem;
}

.project-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0;

    .project-tagline {
        font-family: 'Light';
        font-size: 0.75rem;
    }
}

@media screen and (max-width: @breakpoint-mobile) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
    .project-tagline {
        font-size: 0.65rem;
    }
    .project-status {
        font-size: 0.6rem;
    }
}
</style>
