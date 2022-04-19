<script setup lang="ts">
import CookiesAlert from './components/app/cookies-alert/CookiesAlert.vue'
</script>

<template>
  <router-view></router-view>

  <cookies-alert />
</template>