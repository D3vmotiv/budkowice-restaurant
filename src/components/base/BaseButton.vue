<script setup lang="ts">

const props = defineProps<{
    to?: string;
}>();

</script>

<template>

    <router-link v-if="props.to" :to="props.to" class="block">
        <button
            class="btn-text btn-sizes btn-bg bg-primary"
        >
            <slot></slot>
        </button>
    </router-link>

    <button
        v-else
        class="btn-text btn-sizes btn-bg bg-primary"
    >
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

.btn-bg {
    @apply relative;
}

.btn-bg::after {
    @apply w-full h-full block absolute -right-1 top-1 border-2 border-primary motion-safe:transition-all;
    content: '';
}

.btn-bg:hover::after {
    @apply motion-safe:right-1;
}

</style>