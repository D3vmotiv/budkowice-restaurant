<script setup lang="ts">

const props = defineProps<{
    imageUrl: string;
    sectionName?: string;
}>();

</script>
<template>
    <section
        class="w-full bg-white"
        :aria-label="props.sectionName"
    >
        <img
            v-if="props.imageUrl"
            class="w-full h-80 object-cover"
            :src="props.imageUrl"
            alt=""
        >

        <div class="p-6">

            <slot name="title" />

            <p class="text-base py-3">
                <slot />
            </p>

            <slot name="bottom" />
        </div>

    </section>
</template>
