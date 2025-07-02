<template>
    <div class="modal-work-experience">
        <div class="modal-company-info border">
            <img class="modal-company-image background-secondary" height="50" width="50" :src="props.company.logo" />
            <div class="modal-company">
                <h2 class="modal-company-name">{{ props.company.name }}</h2>
                <span class="modal-company-role">{{ props.company.role }}</span>
            </div>
            <p class="modal-company-service">{{ props.company.service }}</p>
        </div>

        <panel-component :icon="{ name: 'md-description-round', scale: 1.5 }" :heading="{ text: 'Description' }">
            <template #content>
                <p class="modal-company-description-text">{{ props.company.description }}</p>
            </template>
        </panel-component>

        <div class="modal-company-experiences">
            <panel-component class="modal-company-experience-panel" :icon="{ name: 'ri-file-list-3-fill', scale: 1.5 }" :heading="{ text: 'Responsibilities' }">
                <template #content>
                    <list-component :list="props.responsibilitiesList" />
                </template>
            </panel-component>

            <panel-component class="modal-company-experience-panel" :icon="{ name: 'ri-user-star-fill', scale: 1.5 }" :heading="{ text: 'Achievements' }">
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

const props = defineProps({
    company: {
        type: Object,
        required: true,
        default: () => { return { logo: '', name: '', role: '', service: '', description: '' } }
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
.modal-work-experience {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.modal-company-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.modal-company-image {
    padding: 5px;
    border-radius: 50%;
}

.modal-company {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
    min-height: 50px;
}

.modal-company-name {
    margin: 0;
}

.modal-company-role {
    font-family: 'Light';
}

.modal-company-service {
    margin: 0 0 0 auto;
}

.modal-company-description-text {
    margin: 0;
}

.modal-company-experiences {
    display: flex;
    gap: 2rem;
    width: 100%;
}

@media screen and (max-width: @breakpoint-mobile) {
    .modal-company-experiences {
        flex-direction: column;
    }
    .modal-company-name {
        font-size: large;
    }
    .modal-company-role {
        font-size: 0.65rem;
    }
    .modal-company-service {
        font-size: 0.65rem;
    }
}

@media screen and (min-width: @breakpoint-mobile) {
    .modal-company-experience-panel {
        width: 100%;
    }
}
</style>