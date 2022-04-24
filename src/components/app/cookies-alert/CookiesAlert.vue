<script setup>
import useCookiesAlert from "./useCookiesAlert.ts"

const { isAlertSeen, handleAcceptCookies } = useCookiesAlert()
</script>
<template>
    <div
        class="
            fixed z-50 bottom-0 left-0 right-0
            shadow-xl
            sm:bottom-2 sm:left-auto sm:right-2 sm:w-96
            bg-primary text-white p-5
            flex flex-col gap-3
        "
        :class="isAlertSeen ? 'hidden' : ''"
    >
        <h2 class="text-lg">
            Nasza strona używa plików Cookies.
        </h2>
        
        <p class="text-sm mb-2">
            W celu prawidłowego jej działania oraz korzystania z narzędzi analitycznych, reklamowych i społecznościowych -
        </p>

        <base-button
            @click="handleAcceptCookies"
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