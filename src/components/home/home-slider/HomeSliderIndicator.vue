<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  page: number;
  activePage: number;
}>();

const emit = defineEmits<{
  (e: "onClick"): void;
}>();

const isActive = computed(() => props.page == props.activePage)
</script>

<template>
  <button
    class="slider--indicator"
    :class="{ 'slider--indicator__active': isActive }"
    :aria-label="`Przejdź do ekranu ${page}`"
    :tabindex="isActive ? '-1' : undefined"
    @click.stop="() => emit('onClick')"
  ></button>
</template>

<style lang="postcss">
.slider--indicator {
  @apply w-8 h-2 border-2 border-white;
}

.slider--indicator__active {
  @apply bg-white;
}
</style>