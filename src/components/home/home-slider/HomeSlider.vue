<script setup lang="ts">
import { ref } from 'vue'
import HomeSliderIndicator from '../home-slider/HomeSliderIndicator.vue'

const sliderPage = ref(1);

const changeSliderPage = (page: number) => {
    sliderPage.value = page
}

</script>
<template>
    <div
        id="slider"
        class="w-screen h-screen slider--display slider--background"
        aria-controls="slider--indicators"
        aria-label="`Główny slider`"
        :style="`background-image: url('/images/slider_${sliderPage}.jpg')`"
    >
        <div>
            <slot name="top" />
        </div>

        <div class="w-full flex">
            <div>

            </div>

            <div class="w-full md:w-3/4 text-white text-center">
                <template v-if="sliderPage === 1">
                    <h1 class="mb-2">
                        Restauracja <br>
                        "Karczma na górce"
                    </h1>
                    <p class="px-10">
                        Przepyszne dania w dobrej cenie tylko u nas!
                    </p>
                </template>

                <template v-else-if="sliderPage === 2">
                    <h1 class="mb-2">
                        Chcesz zamówić <br>
                        u nas salę?
                    </h1>
                    <p class="px-10">
                        Zobacz jakie to proste!
                    </p>
                </template>
            </div>

            <div>
            </div>
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