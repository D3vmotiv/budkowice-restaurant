<template>
    <div
        class="
            absolute bottom-0 left-0 right-0
            shadow-lg
            sm:bottom-2 sm:left-auto sm:right-2 sm:w-96
            bg-primary text-white p-5
            flex flex-col gap-3
        "
    >
        <h2 class="text-lg">
            Nasza strona używa plików Cookies.
        </h2>
        
        <p class="text-sm mb-2">
            Witryna wykorzystuje ciasteczka (ang. cookies) <br class="hidden sm:inline"> w celach statycznych.

            <a href="/cookies" class="underline">Więcej tutaj</a>.
        </p>

        <base-button
            class="important-w-full"
            white
        >
            OK
        </base-button>
    </div>
</template>
<style scoped>
.important-w-full {
    width: 100% !important;
}
</style>