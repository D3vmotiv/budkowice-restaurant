<script setup lang="ts">
</script>

<template>
    <button class="btn-text btn-sizes bg-primary ">
        <slot></slot>
    </button>
</template>

<style lang="postcss" scoped>
.btn-text {
    @apply text-white font-Poppins font-bold text-center text-lg;
}

.btn-sizes {
    @apply w-[200px] h-[60px];
}
</style>