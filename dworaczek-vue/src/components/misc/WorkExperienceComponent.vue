<script setup>
import PanelComponent from '@/components/core/PanelComponent.vue';
import { defineProps, ref, shallowRef } from 'vue';

const props = defineProps({
    workExperience: {
        type: Array,
        default: () => []
    }
});

const experienceModalRef = ref(null);
const currentModal = shallowRef(null);

function showModalHandler(modal) {
    if (modal != null) {
        currentModal.value = modal;

        setTimeout(() => {
            experienceModalRef.value.getModal().showModalHandler();
        }, 100);
    }
}
</script>

<template>
    <panel-component class="previous-experience" :icon="{ name: 'md-workhistory', scale: 1.25 }" :heading="{ text: 'Work Experience', size: 'medium' }">
        <template #content>
            <component :is="currentModal" ref="experienceModalRef" />
            <div class="previous-experience-details">
                <div v-for="(experience, index) in props.workExperience" :key="index" class="previous-experience-detail" @click="showModalHandler(experience.modal)">
                    <img width="40" height="40" :alt="experience.logoAlt" :src="experience.logo" class="previous-experience-logo background-secondary" />
                    <div class="previous-experience-info">
                        <span class="previous-experience-company">{{ experience.company }}</span>
                        <span class="previous-experience-position">{{ experience.position }}</span>
                    </div>
                    <span class="previous-experience-service">{{ experience.service }}</span>
                </div>
            </div>
            <a href="/Artur Dworaczek - CV.pdf" download class="button">
                Download CV
                <v-icon name="hi-download" scale="1" />
            </a>
        </template>
    </panel-component>
</template>

<style lang="less" scoped>
.previous-experience:deep(.panel-heading) {
    margin-bottom: 0;
}

.previous-experience-details {
    margin: 0 -20px 1rem -20px;
    display: flex;
    flex-direction: column;
}

.previous-experience-detail {
    display: flex;
    width: calc(100% - 40px);
    gap: 10px;
    align-items: center;
    padding: 1.25rem;
}

.previous-experience-detail:hover {
    cursor: pointer;
    animation: 0.25s background-right-left-animation-light forwards;
}
[data-theme="dark"] .previous-experience-detail:hover {
    animation: 0.25s background-right-left-animation-dark forwards;
}

.previous-experience-logo {
    padding: 5px;
    border-radius: 50%;
}

.previous-experience-info {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    .previous-experience-company {
        font-family: 'Bold';
        font-size: 1rem;
    }

    .previous-experience-position {
        font-family: 'Light';
        font-size: 0.75rem;
    }
}

.previous-experience-service {
    font-family: 'Light';
    font-size: 0.75rem;
    margin-left: auto;
}

@media screen and (max-width: @breakpoint-mobile) {
    .previous-experience-position {
        font-size: 0.5rem;
    }
    .previous-experience-service {
        font-size: 0.5rem;
    }
}
</style>