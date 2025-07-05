<template>
    <div class="timeline-container" :class="{ first: props.isFirst, 'not-first-or-last': !props.isFirst && !props.isLast, last: props.isLast }">
        <v-icon class="timeline-dot" :class="{ 'timeline-dot-active': props.isActive }" name="pr-circle-on" scale="0.75" />
        <span class="timeline-line" :class="getLineClass()" />
    </div>
</template>

<script setup>
const props = defineProps({
    isFirst: {
        type: Boolean,
        default: false
    },
    isLast: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
    isPreviousActive: {
        type: Boolean,
        default: false
    },
    isNextActive: {
        type: Boolean,
        default: false
    }
});

function getLineClass() {
    if (props.isActive) {
        if (props.isPreviousActive && props.isNextActive) {
            return 'timeline-line-active-next-and-previous';
        } else if (props.isPreviousActive) {
            return 'timeline-line-active-only-previous';
        } else if (props.isNextActive) {
            return 'timeline-line-active-only-next';
        }
    }
    return '';
}
</script>

<style lang="less" scoped>
.timeline-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.timeline-container.first .timeline-line {
    margin-top: auto;
}
.timeline-container.not-first-or-last .timeline-line {
    height: 100% !important;
}
.timeline-container.last .timeline-line {
    margin-bottom: auto;
}

.timeline-container:hover {
    cursor: pointer;
    animation: 0.35s background-right-left-animation-light forwards;
}
[data-theme="dark"] .timeline-container:hover {
    animation: 0.35s background-right-left-animation-dark forwards;
}

.timeline-dot {
    position: absolute;
    margin-left: 0.5px;
    fill: @dworaczek-very-light-gray;
}

[data-theme="dark"] .timeline-dot {
    fill: @dworaczek-medium-gray;
}

.timeline-dot-active {
    fill: @dworaczek-green !important;
}

.timeline-line {
    display: block;
    width: 2px;
    height: 50%;
    background-color: @dworaczek-white-gray;
}

[data-theme="dark"] .timeline-line {
    background-color: @dworaczek-light-gray;
}

.timeline-line-active-only-previous {
    background: linear-gradient(to bottom, @dworaczek-green 0%, @dworaczek-green 50%, @dworaczek-white-gray 50%, @dworaczek-white-gray 100%);
}
[data-theme="dark"] .timeline-line-active-only-previous {
    background: linear-gradient(to bottom, @dworaczek-green 0%, @dworaczek-green 50%, @dworaczek-light-gray 50%, @dworaczek-light-gray 100%);
}
.timeline-line-active-next-and-previous {
    background-color: @dworaczek-green !important;
}
.timeline-line-active-only-next {
    background: linear-gradient(to bottom, @dworaczek-white-gray 0%, @dworaczek-white-gray 50%, @dworaczek-green 50%, @dworaczek-green 100%);
}
[data-theme="dark"] .timeline-line-active-only-next {
    background: linear-gradient(to bottom, @dworaczek-light-gray 0%, @dworaczek-light-gray 50%, @dworaczek-green 50%, @dworaczek-green 100%);
}
</style>