<script setup>
import CartSideBar from './CartSideBar.vue'

</script>
<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div class="navbar-brand">
        <RouterLink to="/"><img src="@/assets/images/logo.png" alt="Logo" /></RouterLink>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse nav-center justify-content-center align-content-center"
        id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Trang chủ</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/products">Sản phẩm</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="cart_open">Giỏ hàng</a>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">Liên hệ</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.facebook.com/profile.php?id=61558538326405">Fanpage</a>
          </li>
        </ul>
      </div>
      <ul class="navbar-nav nav-right">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/"><i class="bi bi-person"></i></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/"><i class="bi bi-search"></i> </RouterLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="cart_open"><i class="bi bi-cart"></i></a>
        </li>
      </ul>
    </div>
  </nav>
  <CartSideBar />
</template>
<script>
export default {
  name: 'NavbarView',
  components: {
    CartSideBar,
  },
  data() {
    return {
    }
  },
  methods: {
    cart_open() {
      const sidebar = document.getElementById('cart');
      sidebar.classList.toggle('open');
    },
  },
  mounted() {
    window.onscroll = function () {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.querySelector('nav').style.height = '60px';
        document.querySelector('nav').style.transition = '0.2s';
      } else {
        document.querySelector('nav').style.height = '90px';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  background-color: $main-color-1;
  position: fixed;
  width: 100vw;
  height: 90px;
  z-index: 2;

  .navbar-brand {
    img {
      max-width: 220px;
    }
  }

  .nav-link {
    color: rgb(236, 233, 233);
    font-size: 15px;
    padding: 0 5px !important;
  }

  a {
    font-size: 24px;
    padding-left: 10px;
    color: white !important;
  }

  .nav-center {
    a {
      font-size: 14px;
      font-family: questrial;
    }

    li {
      margin-right: 20px;
    }
  }

  .nav-right {
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;

    & li a {
      text-align: center;
    }

    & li:first-child>a {
      font-size: 26px;
    }

    & li:nth-child(2)>a {
      font-size: 20px;
    }

    & li:last-child>a {
      font-size: 20px;
    }

    &>li {
      width: 40px;
    }
  }
}
</style>
