<template>
  <carousel :autoplay="2000" :wrap-around="true">
    <slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Slide {{ index + 1 }}" />
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>
<style lang="scss">
.carousel__slide {
  img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
}
</style>
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Navigation
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>
