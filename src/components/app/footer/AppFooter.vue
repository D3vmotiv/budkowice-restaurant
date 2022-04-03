<script setup lang="ts">
import contactInfo from "@/const/contactInfo.ts"
</script>

<template>
    <footer class="bg-secondary text-white p-5">

        <a href="/">
            <h3 class="text-lg mb-2">
                Karczma na Górce
            </h3>
        </a>

        <p class="text-sm">
            Zapraszamy serdecznie do Karczmy na Górce usytuowanej w sercu Starych Budkowic.
        </p>

        <hr class="my-4">

        <h4 class="text-base mb-1">
            Szybka nawigacja
        </h4>

        <ul class="text-sm">
            <li>
                <a href="/" class="inline-block py-1 w-full">
                    Strona główna
                </a>
            </li>

            <li>
                <a href="/menu" class="inline-block py-1 w-full">
                    Menu
                </a>
            </li>

            <li>
                <a href="/pizza" class="inline-block py-1 w-full">
                    Pizza
                </a>
            </li>

            <li>
                <a href="/kontakt" class="inline-block py-1 w-full">
                    Kontakt
                </a>
            </li>
        </ul>

        <hr class="my-4">

        <h4 class="text-base mb-2">
            Dane kontaktowe
        </h4>

        <ul>
            <li v-for="contactItem in contactInfo" :key="contactItem.value">
                <a
                    :href="contactItem.link.url"
                    :target="contactItem.link.outside ? '_blank' : undefined"
                    :rel="contactItem.link.outside ? 'noopener nofollow' : undefined"
                    class="inline-flex items-center py-1 text-sm w-full"
                >
                    <img
                        :src="contactItem.image.default"
                        :alt="`${contactItem.altName}:`"
                        width="20"
                        height="20"
                        class="mr-2"
                    >

                    {{ contactItem.value }}
                </a>
            </li>
        </ul>

        <hr class="my-4">

        <p class="text-sm">
            Karczma na Górce &copy; {{ (new Date()).getFullYear() }}
        </p>

    </footer>
</template>