<template>
    <div
        id="slider"
        class="w-screen h-screen flex justify-between items-center p-5"
    >
        <div>
            <slot name="top" />
        </div>

        <div class="w-full flex">
            <div>

            </div>

            <div class="w-full md:w-3/4">
                <slot />
            </div>

            <div>

            </div>
        </div>

        <!-- Slider indicators -->
        <div>
            <button data-home-slider-step="1" class="slider--indicator"></button>
            <button data-home-slider-step="2" class="slider--indicator"></button>
        </div>
    </div>
</template>