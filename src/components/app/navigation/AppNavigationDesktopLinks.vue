<template>
    <ul class="flex gap-6 text-white font-Limelight"> 
        <li>
            <router-link
                to="/"
                class="nav-link"
            >
                Strona główna
            </router-link>
        </li>
        <li>
            <router-link
                to="/menu"
                class="nav-link"
            >
                Menu
            </router-link>
        </li>
        <li>
            <router-link
                to="/pizza"
                class="nav-link"
            >
                Pizza
            </router-link>
        </li>
        <li>
            <router-link
                to="/kontakt"
                class="nav-link"
            >
                Kontakt
            </router-link>
        </li>
    </ul>
</template>
<style lang="postcss" scoped>

.router-link-active.nav-link::after {
    @apply scale-x-100 origin-bottom-left;
}

.nav-link {
    @apply relative;
}
.nav-link::after {
    @apply
        absolute scale-x-0 border-b border-[1px] origin-bottom-right
        left-0 -bottom-1 h-[1px] w-full;
    content: '';
}
.nav-link:hover::after {
    @apply scale-x-100 origin-bottom-left;
}

@media (prefers-reduced-motion: no-preference) {
    .nav-link::after {
        transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }
}
</style>