import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AdminView from '../views/AdminView.vue'
import Login from '../views/partials/admin/LoginView.vue'
import Manage from '../views/partials/admin/ManageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'product',
      component: ProductView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'manage',
          name: 'manage',
          component: Manage
        }
      ]
    },
  ]
})

export default router
