<script setup lang="ts">
import { useHead } from "@vueuse/head";
import HomeSlider from "@/components/home/home-slider/HomeSlider.vue";
import AppNavigation from "@/components/app/navigation/AppNavigation.vue";
import AppCard from "@/components/app/card/AppCard.vue"

useHead({
  title: "Karczma na górce - Strona główna",
});
</script>

<template>
  <home-slider>
    <template v-slot:top>
      <app-navigation />
    </template>
  </home-slider>

  <div class="p-5 bg-white-ligth">
  
    <app-card
      image-url="/images/image_1.jpg"
      section-name="Menu"
    >
      <template #title>
        <h3 class="text-xl mb-2">
          Poznaj nasze
          <span class="text-primary">menu</span>
        </h3>
      </template>

      <template #default>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales a aliquam et odio bibendum.
      </template>

      <template #bottom>
        <!-- todo base-link -->
        <a href="/menu">Sprawdź nasze menu</a>
      </template>
    </app-card>

  </div>

</template>