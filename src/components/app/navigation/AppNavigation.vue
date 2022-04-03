<script setup lang="ts">
import { ref } from "vue"
import AppNavigationMobileFull from "./AppNavigationMobileFull.vue";

const isOpen = ref(false)
const changeNavVisibility = () => {
    isOpen.value = !isOpen.value
}

const props = defineProps<{
    filled?: boolean;
}>();

</script>

<template>
    <nav
        class="w-full flex justify-end"
        :class="{ 'navigation__open': isOpen}"
    >
        <div
            class="navigation--bar"
            :class="{'navigation--bar__filed': props.filled}"
        >
            <button
                :aria-expanded="isOpen"
                :aria-label="isOpen ? 'Zamknij' : 'Otwórz'"
                @click.stop="changeNavVisibility"
            >
                <span
                    class="navigation--toggler__burger"
                >
                </span>
            </button>
        </div>

        <!-- Anim background -->
        <div class="hidden w-screen h-screen bg-primary" />
        
        <app-navigation-mobile-full v-show="isOpen" />
    </nav>
</template>
<style lang="postcss" scoped>
.navigation--toggler__burger {
    @apply relative;
}

.navigation--toggler__burger,
.navigation--toggler__burger::after {
    @apply inline-block w-[40px] h-[5px] bg-white motion-safe:transition-all;
}

.navigation--toggler__burger::after {
    @apply absolute left-0;
    content: '';
}

.navigation--toggler__burger::after {
    @apply -translate-y-3
}

.navigation__open .navigation--toggler__burger {
    @apply bg-primary rotate-45;
}

.navigation__open .navigation--toggler__burger::after {
    @apply bg-primary -rotate-90 -translate-y-[1px];
}

.navigation--bar {
    @apply fixed inset-0 z-50 w-screen h-20 flex justify-end items-center p-5;
}
.navigation--bar__filed {
    @apply relative bg-primary;
}
.navigation__open .navigation--bar__filed {
    @apply bg-transparent;
}
</style>