<script setup lang="ts">
const props = defineProps<{
    to: string;
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
</template>