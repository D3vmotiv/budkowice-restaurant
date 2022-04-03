<script setup lang="ts">
import { useHead } from "@vueuse/head";

import AppNavigation from "@/components/app/navigation/AppNavigation.vue";
import AppFooter from "@/components/app/footer/AppFooter.vue";

import ContactWelcome from "@/components/contact/contact-welcome/ContactWelcome.vue"
import ContactCard from "@/components/contact/contact-card/ContactCard.vue"
import ContactMap from "@/components/contact/contact-map/ContactMap.vue";

import contactInfo from "@/const/contactInfo.ts"
import openHours from "@/const/openHours.ts"

useHead({
  title: "Karczma na Górce - Kontakt",
  meta: [
    {
      name: 'description',
      content: 'Wszystkie źrodła kontaktu z nami zebrane na jednej podstronie, aby umożliwić Ci jak najłatwieszy kontakt z nami:)'
    }    
  ],
});
</script>

<template>
    <div>

        <contact-welcome>
            <template #top>
                <app-navigation />
            </template>
        </contact-welcome>

        <main class="p-5 bg-white-ligth flex flex-col gap-y-12">
            <contact-card section-name="Dane kontaktowe">
                <template #header>
                    Dane kontaktowe
                </template>

                <template #default>

                    <ul class="text-base">
                        <li v-for="contactItem in contactInfo" :key="contactItem.value">
                            <a
                                :href="contactItem.link.url"
                                :target="contactItem.link.outside ? '_blank' : undefined"
                                :rel="contactItem.link.outside ? 'noopener nofollow' : undefined"
                                class="inline-flex items-start py-1 text-base w-full"
                            >
                                <img
                                    :src="contactItem.image.alternative"
                                    :alt="`${contactItem.altName}:`"
                                    width="20"
                                    height="20"
                                    class="mr-2 mt-1"
                                >

                                {{ contactItem.value }}
                            </a>
                        </li>
                    </ul>

                </template>
            </contact-card>

            <contact-card section-name="Godziny otwarcia">
                <template #header>
                    Godziny otwarcia
                </template>

                <template #default>

                    <ul class="text-base">
                        <li
                            v-for="openHourItem in openHours"
                            :key="openHourItem.shortDay"
                            class="flex justify-between"
                        >
                            <h3 class="font-Poppins">
                                {{ openHourItem.shortDay }}
                            </h3>
                            <p>
                                {{ openHourItem.value }}
                            </p>
                        </li>
                    </ul>

                </template>

            </contact-card>

            <contact-map />

        </main>
        
        <app-footer />
    </div>
</template>