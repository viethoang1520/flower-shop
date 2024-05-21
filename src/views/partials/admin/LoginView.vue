<template>
  <div class="admin-login">
    <div class="container">
      <h1 class="text-center">Đăng nhập để quản lý</h1>
      <div class="admin-form">
        <input type="text" name="admin_account" placeholder="Nhập tài khoản ADMIN">
        <input type="password" name="admin_password" placeholder="Nhập mật khẩu ADMIN">
        <button @click="loginAdmin()">Đăng nhập tài khoản admin</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Cookies from 'js-cookie';
export default {
  methods: {
    async loginAdmin() {
      const admin_account = document.querySelector('input[name="admin_account"]').value;
      const admin_password = document.querySelector('input[name="admin_password"]').value;
      try {
        await axios.post('http://localhost:3000/admin/login', { admin_account, admin_password }).then(response => {
          if (response.data.error_code === 0) {
            document.cookie = this.setCookie('admin', admin_account);
            this.$router.push('/admin');
          } else {
            alert('Sai tài khoản hoặc mật khẩu');
          }
        });
      } catch (error) {
        console.error('Error posting data:', error);
      }
    },
    setCookie(name, value) {
      Cookies.set(name, value, { expires: 7 });
    },
  },
  mounted() {
    const cookieValue = Cookies.get('admin');
    if (cookieValue != null && cookieValue !== '' && cookieValue !== 'undefined') {
      this.$router.push('/admin');
    }
  },
}
</script>
<style lang="scss">
.admin-login {
    padding: 70px 0;
    .admin-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;
      input {
        margin: 10px;
        padding: 10px;
        width: 300px;
      }
      button {
        margin-top: 10px;
        color: white;
        padding: 10px;
        width: 300px;
        background-color: #746b61;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        &:hover {
          background-color: #5e554a;
        }
      }
    }
  }
</style>