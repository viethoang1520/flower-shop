<script setup>
import ProductComp from '@/components/ProductComp.vue';
</script>
<template>
  <div class="products">
    <div class="banner">
      <img
        src="https://cdn.shopify.com/s/files/1/0962/2574/files/Decor_823c8a23-d942-4d19-849a-df7240fe1883.jpg?v=1710832011"
        alt="">
      <div class="banner-content">
        <h4>All Decor</h4>
        <p>Your home, your story. Our All Decor collection is your canvas to express your unique style, featuring an
          eclectic mix of items that range from traditional elegance to modern minimalism. Curate your spaces with
          pieces
          that reflect your personality, ensuring every corner tells a part of your tale.</p>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <ProductComp :products="products" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "ProductView",
  components: {
    ProductComp,
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    loadDefault() {
      // Define the data you want to post
      const load_product = {
        number: 100
      };

      // Make the POST request
      axios.post('http://localhost:3000/product/load', load_product)
        .then(response => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error posting data:', error);
        });
    },
  },
  mounted() {
    this.loadDefault();
  }
}
</script>
<style lang="scss">
@media (min-width: 1800px) {

  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1700px;
  }
}

.products {
  .banner {
    position: relative;

    &-content {
      color: white;
      max-width: 500px;
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translateY(-50%);

      h4 {
        font-style: italic;
      }
    }
  }

  .content {}
}
</style>