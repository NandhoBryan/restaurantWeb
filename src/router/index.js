import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/category=:category',
          name:  'homeCategory',
          component: HomeView,
        }
      ]
    },
    {
      path: '/detail-menu/:id/:name',
      name: 'detailMenu',
      component: () => import('../views/detail.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart.vue')
    },
    {
      path: '/indexDashboard',
      name: 'indexDashboard',
      component: () => import('../views/backends/index.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/backends/dashboard.vue')
        },
        {
          path: '/dashboard/menu',
          name: 'dashboardMenu',
          component: () => import('../views/backends/dashboard.vue')
        },
        {
          path: '/dashboard/form',
          name: 'dashboardForm',
          component: () => import('../views/backends/form.vue')
        },
        {
          path: '/dashboard/kategori',
          name: 'dashboardKategori',
          component: () => import('../views/backends/kategori.vue')
        },
        {
          path: '/dashboard/transaksi',
          name: 'dashboardTransaksi',
          component: () => import('../views/backends/transaksi.vue')
        }
      ]
    }
  ]
})

export default router
