<script setup lang="ts">

const props = defineProps<{
    sectionName?: string;
    reversed?: boolean;
    imageUrl: string;
}>();

</script>
<template>
    <article
        class="
            w-full
            md:flex md:gap-x-12 md:items-center
            lg:justify-center lg:gap-x-24
            xl:gap-x-32
        "
        :class="{
            'md:flex-row-reverse': props.reversed,
            'md:flex-row': !props.reversed,
            'card__reversed': props.reversed
        }"
        :aria-label="props.sectionName"
    >
        <div class="hidden md:block card--background__moved flex-grow max-w-[500px]">
            <img
                class="
                    w-full h-80 object-cover
                    md:h-full
                "
                :src="props.imageUrl"
                alt=""
            >
        </div>

        <div class="md:flex-grow-[2] lg:max-w-md">
            <h2 class="text-xl text-primary mb-2 pl-3 md:text-2xl">
                <slot name="header" />
            </h2>

            <div class="w-full bg-primary-light p-3">
                <slot />
            </div>
        </div>

    </article>
</template>
<style lang="postcss" scoped>
.card--background__moved {
    @apply md:pl-4 md:pb-4 md:relative md:z-20;
}

.card--background__moved::after {
    @apply
        hidden md:absolute md:block z-[-1] top-8 right-8 bottom-0 left-0 bg-primary-light
        lg:top-16 lg:right-16 lg:-left-8 lg:-bottom-8;
    content: '';
}

.card__reversed .card--background__moved {
    @apply md:pl-0 md:pr-4;
}
.card__reversed .card--background__moved::after {
    @apply right-0 lg:left-16 lg:-right-8;
}
</style>