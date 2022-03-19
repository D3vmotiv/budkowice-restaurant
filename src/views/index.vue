<script setup lang="ts">
import { useHead } from "@vueuse/head";
import HomeSlider from "../components/home/home-slider/HomeSlider.vue";

useHead({
  title: "Karczma na górce - Strona główna",
});
</script>

<template>
  <HomeSlider> </HomeSlider>
</template>