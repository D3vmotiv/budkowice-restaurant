<script setup lang="ts">
import AppNavigationMobileFull from "./AppNavigationMobileFull.vue";
import AppNavigationDesktopLinks from "./AppNavigationDesktopLinks.vue";
import useAppNavigation from "./useAppNavigation";

const props = defineProps<{
    filled?: boolean;
}>();

const { 
    isNavOpen,
    shouldBeFilled,
    changeNavVisibility
} = useAppNavigation({ isInitialFilled: props.filled })

</script>

<template>
    <nav
        class="w-full flex justify-end motion-safe:transition-all"
        :class="{ 'navigation__open': isNavOpen, 'h-20': shouldBeFilled }"
    >
        <!-- Mobile nav -->
        <div class="block md:hidden">
            <div
                class="navigation--bar flex"
                :class="{'navigation--bar__filed': shouldBeFilled}"
            >
                <button
                    :aria-expanded="isNavOpen"
                    :aria-label="isNavOpen ? 'Zamknij' : 'Otwórz'"
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
            
            <app-navigation-mobile-full v-show="isNavOpen" />
        </div>

        <!-- Desktop nav -->
        <app-navigation-desktop-links
            class="navigation--bar hidden md:flex"
            :class="{'navigation--bar__filed': shouldBeFilled}"
        />
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
    @apply fixed inset-0 z-50 w-screen h-20 justify-end items-center p-5 motion-safe:transition-all;
}
.navigation--bar__filed {
    @apply bg-primary;
}
.navigation__open .navigation--bar__filed {
    @apply bg-transparent;
}
</style>