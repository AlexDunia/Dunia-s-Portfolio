<script setup>
import { RouterView } from 'vue-router'

import AppHeader from '@/components/layout/AppHeader.vue'
import AppMobileNav from '@/components/layout/AppMobileNav.vue'
</script>

<template>
  <AppHeader />
  <AppMobileNav />
  <main class="page-content">
    <RouterView />
  </main>
</template>

<style scoped>
.page-content {
  padding-top: 0;
}

@media (max-width: 900px) {
  .page-content {
    padding-top: 0;
  }
}
</style>
