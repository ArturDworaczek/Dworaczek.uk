<script setup>
import ModalComponent from '@/components/modals/ModalComponent.vue';
import ModalContentComponent from '@/components/modals/workexperience/ModalContentComponent.vue';
import { ref } from 'vue';

const modalRef = ref(null);

function getModal() {
    return modalRef.value;
}

defineExpose({ getModal });
</script>

<template>
    <modal-component ref="modalRef" heading-text="Work Experience">
        <template #content>
            <modal-content-component 
                :company="{ 
                    logo: require('@/assets/logos/imd.webp'), 
                    name: 'IMD Interactive', 
                    role: 'Freelance Game Developer', 
                    service: 'Dec 2020 - Jan 2024', 
                    description: 'IMD Interactive is a non-profit video game publisher dedicated to creating Bible-based video games and other Christian media that are high quality and educational, based in Alabama, United States. I began my journey with IMD Interactive as a freelancer through Fiverr, which grew into a rewarding three-year professional collaboration, where I would work on their games in my spare time. During this time, I contributed to various projects, worked with individuals all across the world, deepened my understanding of the industry, and improved my skills as a Game Developer.',
                }"

                :responsibilities-list="[
                    { text: 'Leading the design and development of core gameplay aspects using blueprints and C++.' },
                    { text: 'Directed the design and development of some user interfaces and gamepad support across multiple platforms.' },
                    { text: 'Debugging and testing complex gameplay features to ensure smooth performance of newly implemented and existing functionalities.' },
                    { text: 'Reproduction and documentation of any bugs encountered during gameplay.' }
                ]"

                :achievement-list="[
                    { text: 'I designed gameplay concepts from scratch that delivered a lasting impact and enhanced replayability.' },
                    { text: 'Introduced the conversation system with AI, enchancing the immersive experience.' },
                    { text: 'Enhanced gameplay on multiple platforms.' },
                ]"
            />
        </template>
    </modal-component>
</template>

<style lang="less" scoped>
</style>