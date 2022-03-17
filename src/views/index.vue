<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Website Title',
  meta: [
    {
      name: `description`,
      content: `Website description`,
    },
  ],
})
</script>

<template>
    <p class="text-3xl font-bold">
        index.vue
    </p>
</template>