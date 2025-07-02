<template>
    <modal-component ref="modalRef" heading-text="Work Experience">
        <template #content>
            <modal-content-component 
                :company="{ 
                    logo: require('@/assets/logos/fiverr.webp'), 
                    name: 'Fiverr', 
                    role: 'Freelancer', 
                    service: 'Oct 2018 - Aug 2019', 
                    description: 'Fiverr is an online marketplace that connects freelancers with clients seeking digital services. As a teenager preparing to graduate from secondary school, I have decided to launch my freelancing journey on Fiverr in order to start earning my own income and fulfill my entrepreneurial spirit. This platform provided the perfect opportunity to showcase my skills, establish valuable connections, and build lasting connections with clients who appreciate quality work and dedication. It was an excellent starting point for my career, providing me with valuable experience in managing various aspects of running a small-scale operation. Additionally, it honed my ability to quickly analyze and comprehend code written by others, enhancing my adaptability and problem-solving skills.' 
                }"

                :responsibilities-list="[
                    { text: 'Providing software debugging and functionality implementation services tailored to client requirements.' },
                    { text: 'Providing customer support and handle any technical issues that arise.' },
                    { text: 'Creating marketing content and appropriately pricing listings.' },
                ]"

                :achievement-list="[
                    { text: 'Led the development of VR gameplay and experience features using Unreal Engine blueprints.' },
                    { text: 'Built positive connections all around the world that have resulted in long-term collaborations.' },
                    { text: 'Achieved a 5-star rating from over 50 clients, demonstrating exceptional performance and customer satisfaction.' }
                ]"
            />
        </template>
    </modal-component>
</template>

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

<style lang="less" scoped>
</style>