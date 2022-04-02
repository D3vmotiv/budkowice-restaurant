<script setup lang="ts">
import { useHead } from "@vueuse/head";
import HomeSlider from "@/components/home/home-slider/HomeSlider.vue";
import AppNavigation from "@/components/app/navigation/AppNavigation.vue";
import AppFooter from "../components/app/footer/AppFooter.vue";
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

  <main class="p-5 bg-white-ligth flex flex-col gap-y-12">
  
    <app-card
      image-url="/images/image_1.jpg"
      section-name="Menu"
    >
      <template #title>
        <h2 class="text-xl mb-3">
          Poznaj nasze
          <span class="text-primary">menu</span>
        </h2>
      </template>

      <template #default>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales a aliquam et odio bibendum.
      </template>

      <template #bottom>
        <base-link to="/menu" class="mt-3">
          Sprawdź nasze menu
        </base-link>
      </template>
    </app-card>

    <app-card
      image-url="/images/image_3.jpg"
      section-name="Kontakt"
    >
      <template #title>
        <h2 class="text-xl mb-3">
          Odwiedź
          <span class="text-primary">nas</span>
        </h2>
      </template>

      <template #default>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales a aliquam et odio bibendum.
      </template>

      <template #bottom>
        <base-link to="/kontakt" class="mt-3">
          Kontakt
        </base-link>
      </template>
    </app-card>

    <app-card
      image-url="/images/image_4.jpg"
      section-name="Nasz facebook"
    >
      <template #title>
        <h2 class="text-xl mb-3">
          Nasza strona na
          <span class="text-facebookBlue">facebooku</span>
        </h2>
      </template>

      <template #default>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales a aliquam et odio bibendum.
      </template>

      <template #bottom>
        <base-link
          to="/menu"
          variant="blue"
          class="mt-3 text-facebookBlue"
        >
          Facebook
        </base-link>
      </template>
    </app-card>

  </main>
  
  <app-footer />

</template>