<script setup>
import Carousel from '../components/CarouselComp.vue'
import ProductComp from '../components/ProductComp.vue'
</script>

<template>
  <div class="category">
    <div class="container">
      <div class="category-item">
        <img src="../assets/images/category/category-1.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>Sân vườn</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-2.jpg" alt="Sale Banner" height="229px" wi dth="229px" />
        <h5>Ngoại cảnh</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-3.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>Nội thất</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-4.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>Phòng ngủ</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-5.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>Ngày lễ</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-6.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>Đơn giản</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-7.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>Trang trí</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-8.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>Thiết kế</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-9.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>Trang trọng</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-10.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>Lễ cưới</h5>
      </div>
    </div>
  </div>
  <div class="banner row d-flex justify-content-center">
    <div class="col-12">
      <div class="carousel">
        <Carousel :images="carousels" />
      </div>
    </div>
  </div>
  <div class="hot-product">
    <h3 class="hot-product-title">SẢN PHẨM NỔI BẬT</h3>
    <div class="hot-product-list">
      <div class="hot-product-item" v-for="product in hotProducts" :key="product.id">
        <img :src="product.image" :alt="product.name" />
        <RouterLink :to="`/hot-product?id=${product.id}`">
          <h6 class="hot-product-price">{{ product.name }}</h6>
        </RouterLink>
      </div>
    </div>
  </div>
  <div class="list-products">
    <div class="container">
      <ProductComp :products="products" />
      <div class="list-products-control">
        <h6>Hiển thị <b>10</b> trên <b>100</b> sản phẩm</h6>
        <RouterLink to="/products">
          <button class="btn">
            Xem thêm sản phẩm
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.category {
  width: 100%;
  background-color: $main-color-2;
  padding: 30px 0 10px 0;
  overflow-x: auto;

  .container {
    display: flex;
    justify-content: space-around;

    .category-item {
      max-width: 90px;
      margin-right: 30px;

      img {
        border: 1px solid $main-color-1;
        border-radius: 50%;
        width: 90px;
        height: 92px;
        object-fit: cover;
      }

      h5 {
        margin-top: 15px;
        font-size: 14px;
        text-align: center;
        font-family: comfortaa_light;
      }
    }
  }
}

.banner {
  .carousel {
    max-height: 600px;

    & * {
      max-height: 600px;
    }
  }

  .banner-img {
    max-height: 245px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-item {
      margin-bottom: 10px;
    }

    img {
      max-height: 245px;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
}

.hot-product {
  background-color: $main-color-3;
  margin-bottom: 30px;
  height: fit-content;

  h3 {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 50px;
    font-family: comfortaa_light;
  }

  &-title {
    flex-basis: 100%;
  }

  &-list {
    display: flex;
    justify-content: center;
    overflow-x: auto;
    width: 100%;
  }

  &-item {
    width: 450px;
    margin-right: 50px;
    padding-bottom: 30px;

    img {
      width: 450px;
      height: 530px;
      object-fit: cover;
      border-radius: 50% 50% 5px 5px;
      border: 4px solid #7c2f07;
    }

    h6 {
      text-align: center;
      margin-top: 10px;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 4px;
      font-family: comfortaa_light;
    }
  }
}

.list-products {
  background-color: #fdf7f2;
  padding-bottom: 50px;

  &>.container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .list-products-control {
      margin-top: 20px !important;

      button {
        font-size: 17px;
        background: #746b61;
        color: #fff;
        padding: 13px 30px;
        border-radius: 5px;
        display: inline-block;
      }
    }
  }
}
</style>
<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import { useStore } from '../store/store';

export default {
  name: 'HomeView',
  components: {
    Carousel,
    ProductComp
  },
  data() {
    return {
      products: [],
      hotProducts: [],
      carousels: [],
      store: useStore()
    }
  },
  methods: {
    imgUrl(name) {
      return new URL('/assets/images/product/' + name + '.jpg', import.meta.url).href
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
    loadDefault() {
      // Define the data you want to post
      const load_product = {
        number: 10
      };
      const load_carousel = {
        number: 3
      };
      const load_hot_product = {
        type: "hot",
        number: 5
      };
      // Make the POST request
      axios.post('http://localhost:3000/product/load', load_product)
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error('Error posting data:', error);
        });
      axios.post('http://localhost:3000/carousel/load', load_carousel)
        .then(response => {
          this.carousels = response.data;
        })
        .catch(error => {
          console.error('Error posting data:', error);
        });
      axios.post('http://localhost:3000/product/load', load_hot_product)
        .then(response => {
          this.hotProducts = response.data;
        })
        .catch(error => {
          console.error('Error posting data:', error);
        });
    }
  },
  mounted() {
    this.loadDefault();
    this.loadCookie();
  }
}
</script>
