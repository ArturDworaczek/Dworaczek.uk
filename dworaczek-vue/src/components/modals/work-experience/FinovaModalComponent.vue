<template>
    <modal-component ref="modalRef" heading-text="Work Experience">
        <template #content>
            <modal-content-component 
                :company="{ 
                    logo: require('@/assets/logos/finova.webp'), 
                    name: 'Finova', 
                    role: 'Software Engineer', 
                    service: 'Jul 2024 - Current', 
                    description: 'Finova is a financial technology company providing software solutions for banks, building societies, lenders and mortgage brokers. As a Software Engineer in the Bristol Broker team, I work across a complex Mortgage Broker CRM platform using Vue, JavaScript, Laravel and PHP. My role involves delivering customer-funded product enhancements, improving application performance, maintaining legacy and modern codebases, and collaborating closely with Product, QA and senior engineers to deliver high-quality features in business-critical areas of the system. A significant part of my work has focused on highly configurable CRM functionality, including Fact Find, dynamic field behaviour, calculations, dropdown logic and customer-specific configuration.' 
                }"

                :responsibilities-list="[
                    { text: 'Developing full-stack features across Vue, JavaScript, Laravel and legacy PHP within a complex fintech CRM platform.' },
                    { text: 'Delivering customer-funded product enhancements across highly configurable areas of the Mortgage Broker CRM system.' },
                    { text: 'Working on complex product functionality involving configurable workflows, dynamic business logic, calculations, data-driven behaviour and customer-specific requirements.' },
                    { text: 'Collaborating closely with Product, QA and senior engineers to refine requirements, validate behaviour and deliver sprint commitments.' },
                    { text: 'Presenting completed features and technical changes to customers and internal stakeholders, clearly explaining functionality, behaviour and delivery outcomes.' },
                    { text: 'Taking an active role in the scrum process, including sprint planning, refinements, stand-ups, reviews and occasionally leading scrum meetings when required.' },
                    { text: 'Profiling and improving application performance across front-end execution flow, API requests and backend processing.' },
                    { text: 'Maintaining quality and stability across both legacy and modern areas of the platform while reducing the risk of regressions.' },
                    { text: 'Contributing front-end expertise in Vue and JavaScript to support the wider team and improve implementation decisions.' },
                    { text: 'Writing clean, maintainable code and participating in code reviews to support consistent engineering standards.' }
                ]"

                :achievement-list="[
                    { text: 'Optimised key Laravel/API request performance by around 70% through profiling, query improvements and reducing unnecessary processing.' },
                    { text: 'Contributed to a high-performing delivery squad that consistently delivered 100% of committed sprint work.' },
                    { text: 'Helped deliver complex customer-funded enhancements within a business-critical Mortgage Broker CRM platform.' },
                    { text: 'Completed detailed front-end performance profiling to identify inefficient loading behaviour, repeated data transforms and opportunities to improve execution flow.' },
                    { text: 'Delivered improvements across both legacy PHP and modern Vue/Laravel codebases while maintaining stability in a highly configurable product area.' },
                    { text: 'Supported team delivery by contributing strong Vue and JavaScript knowledge alongside colleagues with deeper legacy PHP expertise.' }
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