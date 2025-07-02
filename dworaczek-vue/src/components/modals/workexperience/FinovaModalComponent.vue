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
                    logo: require('@/assets/logos/finova.webp'), 
                    name: 'Finova', 
                    role: 'Frontend Developer', 
                    service: 'Jul 2024 - Current', 
                    description: 'Finova is a leading financial technology company that provides innovative solutions to banks and financial institutions. As a Frontend Developer, I have been responsible for designing and implementing user-friendly interfaces for our web applications. My work involves collaborating with cross-functional teams to understand requirements, conducting user research, and creating wireframes and prototypes. I also write clean, maintainable code using modern frontend technologies. Additionally, I ensure the accessibility and responsiveness of our applications to provide a seamless experience for users across different devices and screen sizes.' 
                }"

                :responsibilities-list="[
                    { text: 'Frontend and backend development of core features.' },
                    { text: 'Collaborating with cross-functional teams to understand requirements and create wireframes and prototypes.' },
                    { text: 'Aligning objectives with achievable outcomes and timelines.' },
                    { text: 'Documenting and presenting the development process to key stakeholders.' },
                    { text: 'Ensuring a high-quality coding standard for myself and maintaining the same during code reviews.' },
                    { text: 'Identifying potential security threats and exploitable vulnerabilities.' },
                ]"

                :achievement-list="[
                    { text: 'TBA.' }
                ]"
            />
        </template>
    </modal-component>
</template>

<style lang="less" scoped>
</style>