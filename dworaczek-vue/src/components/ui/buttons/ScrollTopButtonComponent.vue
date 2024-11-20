<template>
    <button class="scroll-top-button transparent-button" @click="scrollTop">
        <v-icon name="md-verticalaligntop-round" scale="1.75" />
    </button>
</template>

<style lang="less" scoped>
.scroll-top-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    backdrop-filter: blur(10px);
    padding: 10px 7px 5px 7px;
    border-radius: 50%;
    z-index: 2;
}
</style>

<script setup>
function scrollTop() {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
}
</script>