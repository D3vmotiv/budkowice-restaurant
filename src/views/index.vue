<script setup lang="ts">
import { useHead } from "@vueuse/head";
import HomeSlider from "@/components/home/home-slider/HomeSlider.vue";
import AppNavigation from "@/components/app/navigation/AppNavigation.vue";
import AppFooter from "../components/app/footer/AppFooter.vue";
import AppCard from "@/components/app/card/AppCard.vue"

useHead({
  title: "Karczma na Górce - Strona główna",
  meta: [
    {
      name: 'description',
      content: 'Zapraszamy serdecznie do Karczmy na Górce usytuowanej w sercu Starych Budkowic. Atmosfera naszego lokalu podoba się i młodszym i starszym. Staramy się, by każdy znalazł u nas to, co lubi. Mamy nadzieję, że muzyka, miła obsługa, obecność stałych bywalców i smaczne jedzenie sprawi, że poczujecie się tutaj jak w domu. Polecamy potrawy kuchni śląskiej oraz polskiej z elementami kuchni włoskiej. Nowa elegancka, nowoczesna i przestronna sala będzie doskonałą oprawą dla rodzinnych uroczystości, imprez okolicznościowych czy spotkań biznesowych. Karczma na Górce świadczy również usługi cateringowe. Z przyjemnością przygotujemy dla Państwa przyjęcia weselne, komunie oraz inne imprezy okolicznościowe.'
    }    
  ],
});
</script>

<template>
  <home-slider>
    <template v-slot:top>
      <app-navigation />
    </template>
  </home-slider>

  <main
    class="
      p-5 bg-white-ligth flex flex-col gap-y-12
      md:px-0 md:py-0 md:gap-y-0 md:bg-white 
    "
  >
  
    <app-card
      image-url="/images/image_1.jpg"
      section-name="Menu"
      class="md:px-7 md:py-16"
    >
      <template #title>
        <h2 class="text-xl md:text-2xl lg:text-3xl mb-3">
          Poznaj nasze
          <span class="text-primary">menu</span>
        </h2>
      </template>

      <template #default>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales a aliquam et odio bibendum.
      </template>

      <template #bottom>
        <base-link to="/menu" class="mt-3 md:text-lg">
          Sprawdź nasze menu
        </base-link>
      </template>
    </app-card>

    <app-card
      image-url="/images/image_3.jpg"
      section-name="Kontakt"
      class="md:px-7 md:py-16 md:bg-primary-light"
    >
      <template #title>
        <h2 class="text-xl md:text-2xl lg:text-3xl mb-3">
          Odwiedź
          <span class="text-primary">nas</span>
        </h2>
      </template>

      <template #default>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales a aliquam et odio bibendum.
      </template>

      <template #bottom>
        <base-link to="/kontakt" class="mt-3 md:text-lg">
          Kontakt
        </base-link>
      </template>
    </app-card>

    <app-card
      image-url="/images/image_4.jpg"
      section-name="Nasz facebook"
      class="md:px-7 md:py-16"
      reversed
    >
      <template #title>
        <h2 class="text-xl md:text-2xl lg:text-3xl mb-3">
          Nasza strona na
          <span class="text-facebookBlue">facebooku</span>
        </h2>
      </template>

      <template #default>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales a aliquam et odio bibendum.
      </template>

      <template #bottom>
        <base-link
          href="https://www.facebook.com/Karczma-na-G%C3%B3rce-255581354538501/"
          variant="blue"
          class="mt-3 md:text-lg text-facebookBlue"
        >
          Facebook
        </base-link>
      </template>
    </app-card>

  </main>
  
  <app-footer />

</template>