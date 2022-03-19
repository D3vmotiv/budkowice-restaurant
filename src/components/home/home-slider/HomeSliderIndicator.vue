<script setup lang="ts">
const props = defineProps<{
  page: number,
  activePage: number,
}>()

const emit = defineEmits<{
  (e: 'onClick'): void,
}>()
</script>

<template>
    <button
        @click.stop="() => emit('onClick')"
        class="slider--indicator"
        :class="{'slider--indicator__active': props.page == props.activePage}"
    >
    </button>
</template>

<style lang="postcss">
.slider--indicator {
    @apply w-8 h-2 border-2 border-white;
}

.slider--indicator__active {
    @apply bg-white;
}
</style>