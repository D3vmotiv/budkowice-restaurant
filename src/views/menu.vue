<script setup lang="ts">
import { useHead } from "@vueuse/head";
import AppNavigation from "@/components/app/navigation/AppNavigation.vue";
import AppFooter from "../components/app/footer/AppFooter.vue";

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
    <div>
        <app-navigation filled />

        321
        
        <app-footer />
    </div>
</template>