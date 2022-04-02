<template>
    <div class="navigation--screen">
        <!-- Layout div purpose -->
        <div />

        <ul class="text-center font-Limelight text-xl">
            <li class="my-4">
                <router-link to="/">Strona główna</router-link>
            </li>
            <li class="my-4">
                <router-link to="/menu">Menu</router-link>
            </li>
            <li class="my-4">
                <router-link to="/kontakt">Kontakt</router-link>
            </li>
        </ul>

        <div class="bg-primary text-white">
            <a
                href="#"
                target="_blank"
                rel="noopener nofollow"
                class="inline-flex w-full h-24 items-center p-6 gap-3"
            >
                <img
                    src="/images/facebook.svg"
                    alt="Nasz facebook"
                    width="36"
                    height="36"
                >
                <p class="text-sm">
                    Odwiedź naszego facebooka!
                </p>
            </a>
        </div>
    </div>
</template>
<style lang="postcss">
.navigation--screen {
    @apply
        fixed inset-0 z-40
        w-screen h-screen
        flex flex-col justify-between
        bg-white;
}

.router-link-active::before {
    @apply
        inline-flex absolute -left-6 top-1/2 -translate-y-1/2
        w-3 h-3 bg-primary;
    content: '';
}

.router-link-active {
    @apply text-primary relative;
}
</style>