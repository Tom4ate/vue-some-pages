import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/sing',
      name: 'sing',
      component: () => import('../views/SingView.vue')
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: () => import('../views/ticket/ListView.vue')
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: () => import('../views/ticket/ManageView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/FakeSearchView.vue')
    },
  ]
})

export default router
