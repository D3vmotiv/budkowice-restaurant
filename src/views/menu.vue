<script setup lang="ts">
import { useHead } from "@vueuse/head";
import AppNavigation from "@/components/app/navigation/AppNavigation.vue";
import AppFooter from "@/components/app/footer/AppFooter.vue";
import MenuPdf from "@/components/menu/menu-pdf/MenuPdf.vue"

useHead({
  title: "Karczma na Górce - Menu",
  meta: [
    {
      name: 'description',
      content: 'Zapraszamy do zapoznania się z naszym menu'
    }    
  ],
});
</script>

<template>
    <div class="min-h-screen">
        <app-navigation filled />

        <menu-pdf url="/files/Menu.pdf" />
        
        <app-footer />
    </div>
</template>