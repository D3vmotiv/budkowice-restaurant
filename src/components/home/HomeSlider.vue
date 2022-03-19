<script setup lang="ts">
import { ref } from 'vue'

const sliderPage = ref(1);

</script>
<template>
    <div
        id="slider"
        class="w-screen h-screen slider--display slider--background"
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
            </div>

            <div>

            </div>
        </div>

        <!-- Slider indicators -->
        <div class="flex gap-3">
            <button data-home-slider-step="1" class="slider--indicator"></button>
            <button data-home-slider-step="2" class="slider--indicator"></button>
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

.slider--indicator {
    @apply w-8 h-2 border-2 border-white;
}
</style>