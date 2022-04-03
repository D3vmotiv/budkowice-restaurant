<script setup lang="ts">

const props = defineProps<{
    sectionName?: string;
}>();

</script>
<template>
    <article
        class="w-full"
        :aria-label="props.sectionName"
    >
        <h2 class="text-xl text-primary mb-2 pl-3">
            <slot name="header" />
        </h2>

        <div class="w-full bg-primary-light p-3">
            <slot />
        </div>

    </article>
</template>
