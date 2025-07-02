<template>
    <button class="toggle-button" :class="{ 'transparent-button': props.transparent, 'toggle-transparent': props.transparent }" @click="toggleButton">
        <v-icon class="toggle-icon" :class="{ toggled: buttonToggled }" :name="buttonToggled ? props.onIcon : props.offIcon" scale="1.35" />
        {{ buttonToggled ? onText : offText }}
    </button>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    offText: {
        type: String,
        required: false
    },
    offIcon: {
        type: String,
        default: 'pr-circle-off'
    },
    onText: {
        type: String,
        required: false
    },
    onIcon: {
        type: String,
        default: 'pr-circle-on'
    },
    defaultValue: {
        type: Boolean,
        default: false
    },
    transparent: {
        type: Boolean
    },
    disabled: {
        type: Boolean
    }
});

const buttonToggled = ref(props.defaultValue);

function toggleButton() {
    if (!props.disabled) {
        buttonToggled.value = !buttonToggled.value;
    }
}
</script>

<style lang="less" scoped>
.toggle-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    border-radius: 50%;
    padding: 5px;
}

.toggle-icon {
    fill: @dworaczek-gray;
}

[data-theme="dark"] .toggle-icon {
    fill: @dworaczek-white-gray;
}

.toggle-button:hover.toggle-transparent > .toggle-icon {
    fill: @dworaczek-green;
}
</style>