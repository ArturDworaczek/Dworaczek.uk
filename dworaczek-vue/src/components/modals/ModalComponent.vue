<template>
    <Transition name="modal-transition" @before-leave="animationStarted" @before-enter="animationStarted" @after-enter="animationFinished">
        <div v-show="showModal" ref="modalRef" class="modal" @click.self="backHandler">
            <div class="modal-content-container">
                <div class="modal-heading">
                    <button class="modal-back-button transparent-button" @click="backHandler"><v-icon name="md-arrowback-round" scale="1.5"/></button>
                    <h1 class="modal-heading-text">{{ props.headingText }}</h1>
                </div>
                <div class="modal-content" ref="modalContent">
                    <slot name="content" />
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    headingText: {
        type: String,
        required: true
    }
});

const modalRef = ref(null);
const modalContent = ref(null);
const showModal = ref(false);

function animationStarted() {
    modalContent.value.style.overflow = 'hidden';
}

function animationFinished() {
    modalContent.value.style.overflow = 'auto';
}

function backHandler() {
    showModal.value = false;
    document.body.style.overflow = 'auto'; // Restore background scroll
}

function showModalHandler() {
    showModal.value = true;
    document.body.style.overflow = 'hidden'; // Stop background scroll
}
defineExpose({ showModalHandler });

onMounted(() => {
    document.body.appendChild(modalRef.value);
});
</script>

<style lang="less" scoped>
.modal {
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100dvw;
    height: 100dvh;
    backdrop-filter: blur(10px);
    color: black;
    z-index: 5;
}
[data-theme="dark"] .modal {
    color: @dworaczek-white-gray;
}

.modal-transition-enter-active {
    animation: modal-blur-animation 0.75s;
    .modal-content-container { 
        animation: modal-animation 0.75s;
    }
}
.modal-transition-leave-active {
    animation: modal-blur-animation 0.75s reverse;
    .modal-content-container { 
        animation: modal-animation 0.75s reverse;
    }
}

@keyframes modal-blur-animation {
    from { backdrop-filter: blur(0px); }
    to { backdrop-filter: blur(10px); }
}

@keyframes modal-animation {
    from { height: 1px; width: 90%; opacity: 0; }
    to { height: 85dvh; width: 90%; opacity: 1; }
}

@keyframes modal-animation-mobile {
    from { height: 1px; width: 100%; opacity: 0; }
    to { height: calc(100% - 40px); width: 100%; opacity: 1; }
}

.modal-content-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 90%;
    max-width: 1240px;
    height: 85dvh;
    max-height: 85dvh;
    padding: 20px;
    border-radius: 1.25rem;
    background-color: white;
    border: 1px solid @dworaczek-white-gray;
    overflow: hidden;

    .modal-content {
        padding: 0 10px;
    }
}
[data-theme="dark"] .modal-content-container {
    background-color: @dworaczek-gray;
    border: 1px solid @dworaczek-light-gray;
}

.modal-heading {
    display: flex;
    align-items: center;
    min-width: max-content;
    gap: 2rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid @dworaczek-white-gray;
}
[data-theme="dark"] .modal-heading {
    border-bottom: 1px solid @dworaczek-light-gray;
}

.modal-heading-text {
    font-size: x-large;
    margin: 0;
    padding-top: 2px;
}

@media screen and (max-width: @breakpoint-mobile) {
    .modal-content-container {
        width: 100%;
        height: calc(100% - 40px);
        max-height: calc(100% - 40px);
        border-radius: 0;
    }
    .modal-transition-enter-active {
        animation: modal-blur-animation 0.5s reverse;
        .modal-content-container { 
            animation: modal-animation-mobile 0.5s;
        }
    }
    .modal-transition-leave-active {
        animation: modal-blur-animation 0.5s reverse;
        .modal-content-container { 
            animation: modal-animation-mobile 0.5s reverse;
        }
    }
}
</style>