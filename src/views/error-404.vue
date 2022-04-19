<script setup lang="ts">
import { useHead } from "@vueuse/head";
import AppNavigation from "@/components/app/navigation/AppNavigation.vue";
import AppFooter from "@/components/app/footer/AppFooter.vue";

useHead({
  title: "Karczma na Górce - Strona nie znaleziona",
  meta: [
    {
      name: 'description',
      content: 'Prawdopodobnie trafiłeś pod adres na którym nie chciałeś się znaleźć.. Ale nie przejmuj się! Pomożemy Ci wróćić do właściwego miejsca'
    }    
  ],
});
</script>

<template>
    <div class="min-h-screen">
        <app-navigation filled />

        <main class="flex flex-col justify-center min-h-[70vh] p-5 text-center">
            <h1 class="text-primary text-3xl">
                Strona nie znaleziona!
            </h1>

            <p class="mb-3">
                Ale nie przejmuj się!
                Przygotowaliśmy dla Ciebie rozwiązanie. <br>

                Jeśli chcesz możesz rozpocząć swoją podróż od nowa klikając 
                <a href="/" class="text-primary font-bold">tutaj</a>.

            </p>

            <p>
                Alternatywnie możesz odwiedzić
                <a
                    href="https://www.facebook.com/Karczma-na-G%C3%B3rce-255581354538501/"
                    target="_blank"
                    rel="noopener nofollow"
                    class="text-facebookBlue font-bold"
                >
                naszą stronę na facebooku
                </a>
                
                <br>

                i tam znaleźć interesujące Cię informacje!
            </p>
        </main>
        
        <app-footer />
    </div>
</template>