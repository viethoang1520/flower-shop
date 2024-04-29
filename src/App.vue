<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './views/partials/NavbarView.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
</template>
