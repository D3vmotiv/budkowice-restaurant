<script setup lang="ts">
import HomeSliderIndicator from "../home-slider/HomeSliderIndicator.vue";
import HomeSliderContent1 from "./HomeSliderContent1.vue";
import HomeSliderContent2 from "./HomeSliderContent1.vue";
import useHomeSlider from './useHomeSlider.ts'

const { sliderPage, changeSliderPage } = useHomeSlider()

</script>
<template>
  <div
    id="slider"
    class="w-screen h-screen slider--display slider--background"
    aria-controls="slider--indicators"
    aria-label="Główny slider"
    :style="`background-image: url('/images/slider_${sliderPage}.jpg')`"
  >
    <div>
      <slot name="top" />
    </div>

    <div class="w-full flex">
      <div></div>

      <div class="w-full md:w-3/4 text-white text-center">
        <home-slider-content1 v-if="sliderPage == 1"/>
        <home-slider-content2 v-if="sliderPage == 2"/>
      </div>

      <div></div>
    </div>

    <div id="slider--indicators" class="flex gap-3">
      <home-slider-indicator
        :page="1"
        :active-page="sliderPage"
        @onClick="changeSliderPage(1)"
      />
      <home-slider-indicator
        :page="2"
        :active-page="sliderPage"
        @onClick="changeSliderPage(2)"
      />
    </div>
  </div>
</template>
<style lang="postcss">
.slider--display {
  @apply flex flex-col justify-between items-center p-5;
}

.slider--background {
  @apply bg-cover bg-no-repeat bg-center bg-black-ligth;
}
</style>