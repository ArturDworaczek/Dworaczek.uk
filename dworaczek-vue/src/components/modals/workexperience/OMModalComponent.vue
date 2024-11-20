<script setup>
import ModalComponent from '@/components/modals/ModalComponent.vue';
import ModalContentComponent from '@/components/modals/workexperience/ModalContentComponent.vue';
import { defineExpose, ref } from 'vue';

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
                    logo: require('@/assets/logos/om.svg'), 
                    name: 'Old Mill', 
                    role: 'Software Developer', 
                    service: 'Oct 2019 - Jun 2024', 
                    description: 'Old Mill are professional accountants, financial advisers and tax specialists. That helps businesses and individuals throughout the UK. After completing secondary school, I began seeking an apprenticeship that would provide opportunities for growth within a professional workplace. I recognized early on that hands-on experience is invaluable in the field of software development. Joining Old Mill proved to be an excellent choice, as it allowed me to contribute significantly by leading the design and development of various impactful software solutions that benefited the organization.' 
                }"

                :responsibilities-list="[
                    { text: 'Collaborating with cross-functional teams to understand requirements and create wireframes and prototypes.' },
                    { text: 'Leading design and development of internal/external websites.' },
                    { text: 'Aligning objectives with achievable outcomes and timelines.' },
                    { text: 'Risk management and mitigation planning.' },
                    { text: 'Documenting and presenting the development process to key stakeholders.' },
                ]"

                :achievement-list="[
                    { text: 'Spearheaded the design and development of Azure functions for importing data from third-party applications, aiding in the creation of internal reports for board members and managers, thereby significantly enhancing business operations and profits through fresh and accurate business analytics data. Utilising the latest technologies of Azure, C#, .NET Core 8, Azure Key Vault, Azure Blob Storage, SSRS, and various third-party APIs.' },
                    { text: 'Led the design and development of diverse bespoke websites, catering to both internal and external stakeholders, utilising technologies such as Azure, Vue, React, JavaScript, PHP, Node.js, and .NET for frontend and backend development.' },
                    { text: 'Pioneered the design and development of task automation, saving thousands of hours of manual labour, aiding employees in staying on track, consequently aiding to drive millions in profits.' },
                    { text: 'Led the design and development of various SQL databases for storing and receiving information.' },
                    { text: 'Pioneered the design and development of security features for transmitting confidential data to clients via email.' },
                    { text: 'Utilized Microsoft Azure components for a range of tasks, including hosting services and data warehousing.' },
                ]"
            />
        </template>
    </modal-component>
</template>

<style lang="less" scoped>
</style>