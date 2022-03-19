<script setup lang="ts">
import { useHead } from '@vueuse/head'
import HomeSlider from './../components/home/HomeSlider.vue'

useHead({
  title: 'Karczma na górce - Strona główna',
})
</script>

<template>
    <HomeSlider>
        <div>
            <h1 class="text-center">
              Zapraszamy do najlespszej restauracji w okolicy!
            </h1>
            <p class="text-center">
              Pszepyszne dania w dobrej cenie tylko u nas!
            </p>
        </div>
    </HomeSlider>
</template>