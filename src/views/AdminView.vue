<script setup>
import { RouterView } from 'vue-router'
import Cookies from 'js-cookie';
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
<script>
export default {
  methods: {
    // check exist cookie('admin') if not exist, redirect to login page
    checkAdmin() {
      const cookieValue = Cookies.get('admin');
      if (cookieValue == null || cookieValue === '' || cookieValue === 'undefined') {
        this.$router.push('/admin/login');
      }
    }
  },
  mounted() {
    this.checkAdmin();
  },
}
</script>
<style lang="scss">
</style>