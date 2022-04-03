<script setup lang="ts">
const props = defineProps<{
    to?: string;
    href?: string;
    variant?: string;
}>();

let arrowUrl: string;
switch(props.variant) {
    case "blue":
        arrowUrl = '/images/arrow-blue.svg'
        break;
    default:
        arrowUrl = '/images/arrow.svg'
        break;
}

</script>
<template>
    <router-link
        v-if="props.to"
        class="text-primary font-Limelight text-base inline-flex"
        :to="props.to"
    >
        <slot />

        <img
            class="ml-2"
            :src="arrowUrl"
            alt=""
            width="20"
            height="8"
        >
    </router-link>

    <a
        v-else
        :href="props.href"
        target="_blank"
        rel="noopener nofollow"
        class="text-primary font-Limelight text-base inline-flex"
    >
        <slot />

        <img
            class="ml-2"
            :src="arrowUrl"
            alt=""
            width="20"
            height="8"
        >
    </a>
</template>