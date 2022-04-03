<script setup lang="ts">

const props = defineProps<{
    imageUrl: string;
    sectionName?: string;
    reversed?: boolean;
}>();

</script>
<template>
    <article
        class="w-full bg-white flex flex-col"
        :class="{
            'md:flex-row-reverse': props.reversed,
            'md:flex-row': !props.reversed,
            'card__reversed': props.reversed,
        }"
        :aria-label="props.sectionName"
    >
        <div class="card--background__moved md:flex-grow">
            <img
                v-if="props.imageUrl"
                class="
                    w-full h-80 object-cover
                    md:h-full
                "
                :src="props.imageUrl"
                alt=""
            >
        </div>

        <div
            class="
                p-6 flex flex-col
                md:p-12 md:justify-center
                md:flex-grow-[1.2]
            "
        >

            <slot name="title" />

            <p class="text-base py-3">
                <slot />
            </p>

            <slot name="bottom" />
        </div>

    </article>
</template>
<style lang="postcss" scoped>
.card--background__moved {
    @apply md:pl-4 md:pb-4 md:relative md:z-20;
}

.card--background__moved::after {
    @apply hidden md:absolute md:block z-[-1] top-8 right-8 bottom-0 left-0 bg-primary-light;
    content: '';
}

.card__reversed .card--background__moved {
    @apply md:pl-0 md:pr-4;
}
.card__reversed .card--background__moved::after {
    @apply right-0 left-8;
}
</style>