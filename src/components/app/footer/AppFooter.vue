<script setup lang="ts">
import contactInfo from "@/const/contactInfo.ts"
</script>

<template>
    <footer
        class="
            bg-secondary text-white p-5
            md:p-7 md:grid md:grid-cols-[1fr_auto_auto] md:gap-x-10 md:gap-y-5 
            lg:gap-x-16 lg:p-12
            xl:gap-x-32 xl:px-24 xl:py-16 xl:gap-y-14
        "
    >

        <div>
            <a href="/">
                <img
                    src="/images/logo.png"
                    alt="Karczma na Górce"
                    width="711"
                    height="200"
                    class="w-1/2 mb-3 md:mb-5 xl:mb-8 max-w-[200px]"
                />
            </a>

            <p class="text-sm max-w-md">
                Zapraszamy serdecznie do Karczmy na Górce usytuowanej w sercu Starych Budkowic.
                Karczma na Górce świadczy również usługi cateringowe.
                Z przyjemnością przygotujemy dla Państwa przyjęcia weselne, komunie oraz inne imprezy okolicznościowe.
            </p>
        </div>

        <hr class="my-4 md:hidden">

        <div>
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
        </div>

        <hr class="my-4 md:hidden">

        <div class="md:text-right">
            <h4 class="text-base mb-2">
                Dane kontaktowe
            </h4>

            <ul>
                <li v-for="contactItem in contactInfo" :key="contactItem.value">
                    <a
                        :href="contactItem.link.url"
                        :target="contactItem.link.outside ? '_blank' : undefined"
                        :rel="contactItem.link.outside ? 'noopener nofollow' : undefined"
                        class="inline-flex items-center py-1 text-sm w-full md:justify-end"
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
        </div>

        <hr class="my-4 md:hidden">

        <p class="text-sm">
            Karczma na Górce &copy; {{ (new Date()).getFullYear() }}
        </p>

    </footer>
</template>