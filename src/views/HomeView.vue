<script setup>
import Carousel from '../components/CarouselComp.vue'
import ProductComp from '../components/ProductComp.vue'
import carousel_img_1 from '@/assets/images/carousel/carousel-1.jpg'
import carousel_img_2 from '@/assets/images/carousel/carousel-2.jpg'
import carousel_img_3 from '@/assets/images/carousel/carousel-3.jpg'
</script>

<template>
  <div class="category">
    <div class="container">
      <div class="category-item">
        <img src="../assets/images/category/category-1.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>New Arrivals</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-2.jpg" alt="Sale Banner" height="229px" wi dth="229px" />
        <h5>Trending</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-3.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>On Sale</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-4.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>Cast Iron</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-5.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>Table Lamps</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-6.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>Chandeliers</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-7.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>Storage Boxes</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-8.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>Porcelain Figurines</h5>
      </div>
      <div class="category-item">
        <img src="../assets/images/category/category-8.jpg" alt="Sale Banner" height="229px" width="229px" />
        <h5>All Decor</h5>
      </div>
    </div>
  </div>
  <div class="banner row d-flex justify-content-center">
    <div class="col-12 col-lg-8">
      <div class="carousel">
        <Carousel :images="images" />
      </div>
    </div>
    <div class="col-12 col-lg-4">
      <div class="banner-img">
        <div class="banner-img-item">
          <img src="@/assets/images/banner/banner-1.jpg" alt="Sale Banner" />
        </div>
        <div class="banner-img-item">
          <img src="@/assets/images/banner/banner-2.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="hot-product row">
    <h3 class="col-12">SẢN PHẨM NỔI BẬT</h3>
    <div class="col-3">
      <div class="hot-product-item">
        <img src="https://thedecorkart.com/cdn/shop/files/1000_2_400x.png?v=1713271627" alt="" />
        <RouterLink to="/hot-product-1"><h6 class="hot-product-price">Vien bi</h6></RouterLink>
      </div>
    </div>
    <div class="col-3">
      <div class="hot-product-item">
        <img src="https://thedecorkart.com/cdn/shop/files/3000_1_400x.png?v=1713273999" alt="" />
        <RouterLink to="/hot-product-2"><h6 class="hot-product-price">Dong ho</h6></RouterLink>
      </div>
    </div>
    <div class="col-3">
      <div class="hot-product-item">
        <img src="https://thedecorkart.com/cdn/shop/files/5000_4e86fd90-373d-4f92-8cb1-6561099644df_400x.png?v=1713274036" alt="" />
        <RouterLink to="/hot-product-3"><h6 class="hot-product-price">Sach</h6></RouterLink>
      </div>
    </div>
  </div>
  <form action=":3000" method="post">
    <input type="text" name="email" placeholder="Enter your email" />
    <input type="text" name="name" placeholder="Enter your name" />
    <input type="text" name="phone" placeholder="Enter your phone" />
    <button type="submit">Subscribe</button>
  </form>
  <ProductComp
    :products="[
      // load model with img from images/product folder & auto generate example data
      { name: 'Product 1', rate: 3, price: '100.000đ', image: imgUrl('p1') },
      { name: 'Product 2', rate: 5, price: '200.000đ', image: imgUrl('p2') },
      { name: 'Product 3', rate: 2, price: '300.000đ', image: imgUrl('p3') },
      { name: 'Product 4', rate: 5, price: '400.000đ', image: imgUrl('p4') },
      { name: 'Product 5', rate: 4, price: '500.000đ', image: imgUrl('p5') },
      { name: 'Product 6', rate: 0, price: '600.000đ', image: imgUrl('p6') },
      { name: 'Product 7', rate: 1, price: '700.000đ', image: imgUrl('p7') },
      { name: 'Product 8', rate: 2, price: '800.000đ', image: imgUrl('p8') },
      { name: 'Product 9', rate: 5, price: '900.000đ', image: imgUrl('p9') },
      { name: 'Product 10', rate: 4, price: '1000.000đ', image: imgUrl('p10') },
      { name: 'Product 11', rate: 2, price: '1100.000đ', image: imgUrl('p11') },
      { name: 'Product 12', rate: 4, price: '1200.000đ', image: imgUrl('p12') },
      { name: 'Product 13', rate: 5, price: '1300.000đ', image: imgUrl('p13') },
      { name: 'Product 14', rate: 2, price: '1400.000đ', image: imgUrl('p14') },
      { name: 'Product 15', rate: 1, price: '1500.000đ', image: imgUrl('p15') },
      { name: 'Product 16', rate: 3, price: '1600.000đ', image: imgUrl('p16') },
      { name: 'Product 17', rate: 4, price: '1700.000đ', image: imgUrl('p17') }
    ]"
  />
</template>
<style lang="scss" scoped>
.category {
  width: 100%;
  background-color: $main-color-2;
  padding: 40px 0 30px 0;
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
        font-size: 15px;
        text-align: center;
      }
    }
  }
}
.banner {
  .carousel {
    margin-left: 5px;
    max-height: 500px;
    & * {
      max-height: 500px;
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
  display: flex;
  justify-content: center;
  h3 {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 50px;
  }
  .hot-product-item {
    img {
      width: 100%;
      height: auto;
    }
    h6 {
      text-align: center;
      margin-top: 5px;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 4px;
    }
  }
}
</style>
<script>
export default {
  name: 'HomeView',
  components: {
    Carousel,
    ProductComp
  },
  data() {
    return {
      images: [
        carousel_img_1,
        carousel_img_2,
        carousel_img_3
        // Add more image URLs as needed
      ]
    }
  },
  methods: {
    imgUrl(name) {
      return new URL('../assets/images/product/' + name + '.jpg', import.meta.url).href
    }
  }
}
</script>
