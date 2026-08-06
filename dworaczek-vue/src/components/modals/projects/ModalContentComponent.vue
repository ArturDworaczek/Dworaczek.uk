<template>
    <div class="modal-project">
        <div class="modal-project-info-container border">
            <div class="modal-project-info">
                <img class="modal-project-image background-secondary" height="50" width="50" :src="props.project.logo" />
                <div class="modal-project-details">
                    <h2 class="modal-project-name">{{ props.project.name }}</h2>
                    <span class="modal-project-tagline">{{ props.project.tagline }}</span>
                </div>
            </div>

            <div v-if="props.project.website || props.project.appStore" class="modal-project-links">
                <a v-if="props.project.website" :href="props.project.website" target="_blank" rel="noopener" class="button">
                    Visit Website
                    <v-icon name="hi-globe-alt" scale="1" />
                </a>
                <a v-if="props.project.appStore" :href="props.project.appStore" target="_blank" rel="noopener" class="button">
                    View on the App Store
                    <v-icon name="io-logo-apple-appstore" scale="1" />
                </a>
            </div>
        </div>

        <panel-component :icon="{ name: 'md-description-round', scale: 1.5 }" :heading="{ text: 'Description' }">
            <template #content>
                <p class="modal-project-description-text">{{ props.project.description }}</p>
            </template>
        </panel-component>

        <tech-stack-component :tech-stack="props.techStackList" :icon="{ name: 'gi-stack', scale: 1.5 }" :heading="{ text: 'Tech Stack' }" />

        <div class="modal-project-experiences">
            <panel-component class="modal-project-experience-panel" :icon="{ name: 'ri-file-list-3-fill', scale: 1.5 }" :heading="{ text: 'Responsibilities' }">
                <template #content>
                    <list-component :list="props.responsibilitiesList" />
                </template>
            </panel-component>

            <panel-component class="modal-project-experience-panel" :icon="{ name: 'ri-user-star-fill', scale: 1.5 }" :heading="{ text: 'Achievements' }">
                <template #content>
                    <list-component :list="props.achievementList" />
                </template>
            </panel-component>
        </div>
    </div>
</template>

<script setup>
import PanelComponent from '@/components/core/PanelComponent.vue'
import ListComponent from '@/components/core/ListComponent.vue';
import TechStackComponent from '@/components/misc/TechStackComponent.vue';

const props = defineProps({
    project: {
        type: Object,
        required: true,
        default: () => { return { logo: '', name: '', tagline: '', status: '', description: '', website: '', appStore: '' } }
    },
    techStackList: {
        type: Array,
        required: true,
        default: () => [ { logo: '', name: '', description: '' } ]
    },
    responsibilitiesList: {
        type: Array,
        required: true,
        default: () => [ { icon: '', text: '' } ]
    },
    achievementList: {
        type: Array,
        required: true,
        default: () => [ { icon: '', text: '' } ]
    }
});
</script>

<style lang="less" scoped>
.modal-project {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.modal-project-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
}

.modal-project-image {
    padding: 5px;
    border-radius: 50%;
    object-fit: cover;
}

.modal-project-info-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-flow: wrap;
}

.modal-project-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
    min-height: 50px;
}

.modal-project-name {
    margin: 0;
}

.modal-project-tagline {
    font-family: 'Light';
}

.modal-project-status {
    margin: 0 0 0 auto;
}

.modal-project-links {
    display: flex;
    gap: 1rem;

    a {
        min-width: max-content;
    }
}

.modal-project-description-text {
    margin: 0;
}

.modal-project-experiences {
    display: flex;
    gap: 2rem;
    width: 100%;
}

@media screen and (max-width: @breakpoint-mobile) {
    .modal-project-experiences {
        flex-direction: column;
    }
    .modal-project-links {
        flex-wrap: wrap;
    }
    .modal-project-name {
        font-size: large;
    }
    .modal-project-tagline {
        font-size: 0.65rem;
    }
    .modal-project-status {
        font-size: 0.65rem;
    }
}

@media screen and (min-width: @breakpoint-mobile) {
    .modal-project-experience-panel {
        width: 100%;
    }
}
</style>
