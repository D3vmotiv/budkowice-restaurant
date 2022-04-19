<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
    to?: string;
    white?: boolean;
}>();

const buttonVariantClasses = computed(() => !props.white ? 'text-white bg-primary after:border-primary' : 'text-primary bg-white after:border-white')

</script>

<template>

    <router-link v-if="props.to" :to="props.to" class="block">
        <button
            class="btn-text btn-sizes btn-bg"
            :class="buttonVariantClasses"
        >
            <slot></slot>
        </button>
    </router-link>

    <button
        v-else
        class="btn-text btn-sizes btn-bg"
        :class="buttonVariantClasses"
    >
        <slot></slot>
    </button>

</template>

<style lang="postcss" scoped>
.btn-text {
    @apply font-Poppins font-bold text-center text-lg;
}

.btn-sizes {
    @apply w-[200px] h-[60px];
}

.btn-bg {
    @apply relative;
}

.btn-bg::after {
    @apply w-full h-full block absolute -right-1 top-1 border-2 motion-safe:transition-all;
    content: '';
}

.btn-bg:hover::after {
    @apply motion-safe:right-1;
}

</style>