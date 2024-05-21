<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './views/partials/NavbarView.vue'
import Footer from './views/partials/FooterView.vue'
</script>

<template>
  <header style="padding-bottom: 90px;">
    <Navbar />
  </header>

  <RouterView />
  <notifications />
  <Footer />
</template>
