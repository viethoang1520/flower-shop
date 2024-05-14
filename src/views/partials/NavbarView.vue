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
      <div class="collapse navbar-collapse justify-content-center align-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/new-arrivals">New Arrivals</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/decor">Decor</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/kitchen-dining">Kitchen & Dining</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/lighting">Lighting</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/wall-decor">Wall Decor</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/bath-decor">Bath Decor</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/furniture">Furniture</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/discover">Discover</RouterLink>
          </li>
        </ul>
      </div>
      <ul class="navbar-nav nav-right">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/acccount"><i class="bi bi-person"></i></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/search"><i class="bi bi-search"></i> </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/cart"><i class="bi bi-cart"></i></RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
nav {
  padding: 20px 0;
  background-color: $main-color-1;

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

  .nav-right {
    width: 220px;
    display: flex;
    justify-content: end;
    align-items: center;

    & li:first-child>a {
      font-size: 28px;
    }

    &>li {
      width: 40px;
    }


  }
}
</style>
