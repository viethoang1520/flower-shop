<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import { notify } from "@kyvg/vue3-notification";
import { useStore } from '../store/store';

export default {
  name: 'ProductComp',
  props: {
    // make array of product are name, rate, price, image
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      store: useStore()
    }
  },
  methods: {
    async handleProductClick(productId) {
      try {
        // Gửi ID của sản phẩm đến API bằng Axios
        await axios.post('http://localhost:3000/cart/add', { productId }).then(response => {
          this.store.add(response.data.item)
          this.setCookie('cart', JSON.stringify(this.store.cart_list));
          notify({
            type: 'success',
            title: "Giỏ hàng!",
            text: "Sản phẩm đã được thêm vào giỏ hàng.",
          });
        });
      } catch (error) {
        console.error('Error sending product ID to API:', error);
      }
    },
    setCookie(name, value) {
      Cookies.set(name, value, { expires: 7 });
    },
    loadCookie() {
      const cookieValue = Cookies.get('cart');
      if (cookieValue != null) {
        this.store.cart_list = JSON.parse(cookieValue);
      }
    },
  },
}
</script>
<template>
  <div class="list-product row d-flex justify-content-center">
    <h3 class="col-12">DANH SÁCH SẢN PHẨM</h3>
    <div class="product-item col-xl-2 col-lg-3 col-md-4 col-6" v-for="(product, index) in products" :key="index"
      @click="handleProductClick(product.id)">
      <div class="product-top">
        <img class="product-image" :src="product.image" alt="Product Image" />
        <button class="btn btn-light">Thêm vào giỏ hàng</button>
      </div>
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
    font-family: comfortaa_light;
  }

  .product-item {
    text-align: center;
    margin: 0 10px 10px 10px;

    &:hover {
      .product-top button {
        opacity: 1;
        transition: opacity 0.4s ease;
      }
    }

    .product-top {
      position: relative;

      button {
        opacity: 0;
        transform: translateY(100%);
        transition: opacity 0.4s ease;
        width: 90%;
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;
        border-radius: 3px !important;
        padding-bottom: 8px;
      }
    }

    .product-image {
      width: 100%;
      height: 266px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 15px;
    }

    .product-name {
      font-size: 14px;
      font-family: comfortaa_light;
      margin-bottom: 0 !important;
    }

    .product-rate {
      margin-bottom: 5px !important;

      * {
        margin-right: 2px;
        font-size: 12px;
        color: rgb(252, 183, 55);
      }
    }

    .product-price {
      font-family: questrial;
    }
  }
}
</style>
