<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-4 d-flex flex-column align-items-center">
          <div class="footer-route">
            <div class="footer-logo">
              <img src="@/assets/images/logo.png" alt="Logo" />
            </div>
            <ul>
              <li>
                <RouterLink to="/">Trang chủ</RouterLink>
              </li>
              <li>
                <RouterLink to="/lien-he">Liên hệ</RouterLink>
              </li>
              <li>
                <RouterLink to="/san-pham">Sản phẩm</RouterLink>
              </li>
              <li>
                <RouterLink to="/tu-van">Tư vấn</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-4 d-flex flex-column align-items-center">
          <div class="footer-contact">
            <h3>Liên hệ</h3>
            <p>Hoa Lụa Decor : Sỉ lẻ hoa 🌷Lá 🍃 cành điểm cổng cưới toàn quốc . Ib zalo 0914402507</p>
            <p>Zalo / SĐT: 0914402507</p>
            <p>Email: hoaluathuhien@gmail.com</p>
            <p>Facebook: <a style="color: #5ab2ff !important" href="https://www.facebook.com/hoaluathuhien">Hoa Lụa Thu
                Hiền</a></p>
          </div>
        </div>
        <div class="col-4">
          <div class="fb-page" data-href="https://www.facebook.com/profile.php?id=61558538326405" data-tabs="timeline"
            data-width="300" data-height="300" data-small-header="true" data-adapt-container-width="true"
            data-hide-cover="false" data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/profile.php?id=61558538326405" class="fb-xfbml-parse-ignore"><a
                href="https://www.facebook.com/profile.php?id=61558538326405">Hoa Lụa Thu Hiền</a></blockquote>
          </div>
        </div>
      </div>
      <p class="text-center m-3 text-bold">© 2024 HOA LỤA THU HIỀN</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  padding: 20px 0;
  background-color: rgb(116, 107, 97);
  color: white;

  ul {
    padding-left: 0 !important;

    li {
      &>* {
        padding-bottom: 3px;
        border-bottom: 1px solid rgb(80, 80, 80);
      }

      margin-bottom: 5px;
    }
  }

  .footer-route {
    margin-top: 20px;

    .footer-logo {
      img {
        width: 300px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
