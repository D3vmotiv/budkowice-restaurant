<script setup lang="ts">
import { useHead } from "@vueuse/head";
import HomeSlider from "@/components/home/home-slider/HomeSlider.vue";
import AppNavigation from '@/components/app/AppNavigation.vue';

useHead({
  title: "Karczma na górce - Strona główna",
});
</script>

<template>
  <HomeSlider>
    <template v-slot:top>
      <AppNavigation />
    </template>
  </HomeSlider>
</template>