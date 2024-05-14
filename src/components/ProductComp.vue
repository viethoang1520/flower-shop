<script>
export default {
  name: 'ProductComp',
  props: {
    // make array of product are name, rate, price, image
    products: {
      type: Array,
      required: true
    }
  }
}
</script>
<template>
  <div class="list-product row d-flex justify-content-center">
    <h3 class="col-12">DANH SÁCH SẢN PHẨM</h3>
    <div class="product-item col-xl-2 col-lg-3 col-md-4 col-6" v-for="(product, index) in products" :key="index">
      <img class="product-image" :src="product.image" alt="Product Image" />
      <h5 class="product-name">{{ product.name }}</h5>
      <p class="product-rate">
        <i v-for="star in product.rate" class="bi bi-star-fill" :key="star"></i>
      </p>
      <p class="product-price">{{ product.price }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-product {
  overflow: auto;

  h3 {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 50px;
  }

  .product-item {
    text-align: center;
    margin: 0 10px;

    .product-image {
      width: 224px;
      height: 266px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 15px;
    }

    .product-name {}

    .product-rate {
      margin-bottom: 10px;
    }

    .product-price {}
  }
}
</style>
