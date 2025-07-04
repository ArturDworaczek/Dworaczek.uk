<template>
    <modal-component ref="modalRef" heading-text="Work Experience">
        <template #content>
            <modal-content-component 
                :company="{ 
                    logo: require('@/assets/logos/deverse.webp'), 
                    name: 'Deverse', 
                    role: 'Founder', 
                    service: 'Jun 2021 - Current', 
                    description: `Deverse is a UK-based software-as-a-service brand I founded in 2024 to unify all of the creative projects I've developed in my spare time, including software, code, and plugins. I enjoy crafting innovative solutions, which inspired me to establish a trusted and recognizable identity for my work. Deverse is still in the very early stages and I am working very hard to rebrand all my previous projects in order to fit them under this 'umbrella'.`, 
                }"

                :responsibilities-list="[
                    { text: 'Providing customer support and handling any technical issues that arise.' },
                    { text: 'Developing and maintaining software applications using various programming languages and frameworks.' },
                    { text: 'Implementing and maintaining efficient testing and debugging procedures.' },
                    { text: 'Staying updated on industry trends and advancements to ensure the delivery of high-quality solutions.' },
                ]"

                :achievement-list="[
                    { text: 'Sponsored by Epic Games, achieved over 250,000 downloads in February 2024.' },
                    { text: 'Delivered prompt support and thorough plugin documentation for customers, ensuring maximum satisfaction.' },
                    { text: 'Enhanced the functionality of Unreal Engine blueprints by designing and developing custom plugins using C++, facilitating seamless integration with the Steam API.' },
                    { text: 'Achieved a 5-star rating from over 50 clients, demonstrating exceptional performance and customer satisfaction.' }
                ]"
            />
        </template>
    </modal-component>
</template>

<script setup>
import ModalComponent from '@/components/modals/ModalComponent.vue';
import ModalContentComponent from '@/components/modals/work-experience/ModalContentComponent.vue';
import { ref } from 'vue';

const modalRef = ref(null);

function getModal() {
    return modalRef.value;
}

defineExpose({ getModal });
</script>

<style lang="less" scoped>
</style>