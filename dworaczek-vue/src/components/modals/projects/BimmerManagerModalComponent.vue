<template>
    <modal-component ref="modalRef" heading-text="Projects">
        <template #content>
            <modal-content-component
                :project="{
                    logo: require('@/assets/logos/bimmer-manager.png'),
                    name: 'BimmerManager',
                    tagline: 'Dealer-level BMW diagnostics, without the subscription.',
                    website: 'https://www.bimmermanager.com',
                    appStore: 'https://apps.apple.com/gb/app/bimmermanager/id6760955766',
                    description: 'BimmerManager is a one-time purchase iOS app that gives BMW enthusiasts dealer-level diagnostic and maintenance functionality straight from their phone, without needing a laptop or a recurring subscription. It pairs a React Native front-end with BimmerKit, a custom Swift module I built to act as the bridge between the app and the vehicle, alongside a local SQLite database for fast, reliable access to vehicle data and an AWS backend for accounts, storage and communication.'
                }"

                :tech-stack-list="[
                    { logo: 'co-react', name: 'React Native', description: 'Front-end' },
                    { logo: 'si-swift', name: 'Swift', description: 'BimmerKit connector module' },
                    { logo: 'si-sqlite', name: 'SQLite', description: 'Local app data' },
                    { logo: 'co-amazon-aws', name: 'AWS', description: 'Route53 & SES' },
                    { logo: 'si-awsamplify', name: 'AWS Amplify', description: 'Hosting, API & database' },
                    { logo: 'si-amazons3', name: 'Amazon S3', description: 'File storage' }
                ]"

                :responsibilities-list="[
                    { text: 'Designing and building the entire product solo, from the React Native app through to the native Swift diagnostic layer and AWS backend.' },
                    { text: 'Developing BimmerKit, a custom Swift module that bridges the app to the vehicle\'s diagnostic interface and translates it into simple in-app actions.' },
                    { text: 'Architecting and maintaining the AWS backend and local SQLite database powering accounts, storage and vehicle data.' },
                    { text: 'Managing the full App Store lifecycle, including submissions, versioning and compliance with Apple\'s guidelines.' },
                    { text: 'Providing prompt, hands-on customer support, from onboarding questions to diagnosing device connectivity issues.' },
                    { text: 'Owning product direction and pricing strategy, including the decision to launch as a one-time purchase rather than a subscription.' }
                ]"

                :achievement-list="[
                    { text: 'Took BimmerManager from first concept to a live App Store release in around 3 months, working solo.' },
                    { text: 'Delivered a complete cross-platform stack single-handedly: React Native app, custom Swift diagnostic module and full AWS backend.' },
                    { text: 'Launched a one-time purchase model as a direct alternative to subscription-based dealer tools, addressing a common frustration in the BMW enthusiast community.' },
                    { text: 'Built BimmerKit, a bespoke native diagnostic module, entirely from scratch.' },
                    { text: 'Handled every customer support request personally, keeping response times fast during and after launch.' }
                ]"
            />
        </template>
    </modal-component>
</template>

<script setup>
import ModalComponent from '@/components/modals/ModalComponent.vue';
import ModalContentComponent from '@/components/modals/projects/ModalContentComponent.vue';
import { ref } from 'vue';

const modalRef = ref(null);

function getModal() {
    return modalRef.value;
}

defineExpose({ getModal });
</script>

<style lang="less" scoped>
</style>
