<script setup lang="ts">

const props = defineProps<{
    imageUrl: string;
    additionalImageUrl?: string;
    sectionName?: string;
    bgColor?: string;
    reversed?: boolean;
    colored?: boolean;
}>();

</script>
<template>
    <article
        class="w-full bg-white flex flex-col xl:justify-center xl:gap-x-24 xl:overflow-hidden"
        :class="{
            'md:flex-row-reverse': props.reversed,
            'md:flex-row': !props.reversed,
            'card__reversed': props.reversed,
            'card__colored': props.colored,
        }"
        :aria-label="props.sectionName"
    >
        <div
            class="card--background__moved md:flex-grow xl:max-w-[700px]"
            :class="{
                'xl:grid xl:grid-cols-[2fr_1fr] xl:max-h-[600px]': props.additionalImageUrl && !props.reversed,
                'xl:grid xl:grid-rows-[2fr_1fr] xl:max-h-[700px]': props.reversed,
                [props.bgColor ? `after:${props.bgColor}` : 'after:bg-primary-light']: true,
            }"
        >
            <img
                v-if="props.imageUrl"
                class="
                    w-full h-80 object-cover
                    md:h-full
                "
                :src="props.imageUrl"
                alt=""
            >

            <img
                v-if="props.additionalImageUrl"
                class="
                    hidden w-full h-full object-cover mx-8
                    xl:block
                "
                :class="{
                    'mx-0 my-8': props.reversed,
                }"
                :src="props.additionalImageUrl"
                alt=""
            >
        </div>

        <div
            class="
                p-6 flex flex-col relative z-20
                md:p-12 md:justify-center
                md:flex-grow-[1.2]
                xl:flex-grow xl:max-w-[700px]
            "
        >

            <slot name="title" />

            <p class="text-base lg:text-lg py-3 xl:py-6">
                <slot />
            </p>

            <slot name="bottom" />
        </div>

    </article>
</template>
<style lang="postcss" scoped>
.protect {
    @apply after:bg-facebookBlue-ligth;
}

.card--background__moved {
    @apply md:pl-4 md:pb-4 md:relative md:z-20;
}

.card--background__moved::after {
    @apply
        hidden md:absolute md:block z-[-1] top-8 right-8 bottom-0 left-0
        xl:top-16 xl:right-16 xl:-bottom-8 xl:-left-8;
    content: '';
}

.card__reversed .card--background__moved {
    @apply md:pl-0 md:pr-4;
}
.card__reversed .card--background__moved::after {
    @apply
        right-0 left-8
        xl:-right-16 xl:-left-1/3 xl:bottom-8;
}

.card__colored .card--background__moved::after {
    @apply
        xl:-top-16 xl:left-1/3 xl:-right-[100vw];
}
</style>