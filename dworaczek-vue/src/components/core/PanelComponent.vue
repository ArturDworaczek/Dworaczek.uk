<template>
    <div class="panel border background-primary" :class="{ 'panel-no-border': hideBorder }">
        <div class="panel-heading border-bottom">
            <v-icon class="panel-heading-icon" :name="props.icon.name" :scale="props.icon.scale" />
            <span class="panel-heading-text" :style="{ fontSize: props.heading.size ?? 'large' }">{{ props.heading.text }}</span>
        </div>
        <slot name="content" />
    </div>
</template>

<script setup>
const props = defineProps({
    icon: {
        type: Object,
        required: true
    },
    heading: {
        type: Object,
        required: true
    },
    hideBorder: {
        type: Boolean,
        required: false
    }
});
</script>

<style lang="less" scoped>
.panel {
    height: max-content;
}

.panel-no-border {
    padding: 20px 0;
    border: 0;
    border-radius: 0;
}

.panel-heading {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
}

.panel-heading-text {
    font-family: 'Bold';
    margin: 3px 0 0 0;
}
</style>