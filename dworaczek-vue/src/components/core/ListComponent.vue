<template>
    <div class="list">
        <div v-for="(entry, index) in props.list" :key="'list-component-entry-' + index" class="list-entry">
            <v-icon :name="entry.icon ?? 'oi-dot-fill'" scale="1.5" />
            <p class="list-entry-text">{{ entry.text }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    list: {
        type: Array,
        required: true
    }
});
</script>

<style lang="less" scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.list-entry {
    display: flex;
    gap: 1rem;
    align-items: center;
    min-height: 30px;
}

.list-entry-text {
    margin: 0;
}
</style>