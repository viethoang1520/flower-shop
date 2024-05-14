<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './views/partials/NavbarView.vue'
import Footer from './views/partials/FooterView.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
  <Footer />
</template>
