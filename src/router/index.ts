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
      path: '/logs',
      name: 'logs',
      component: () => import('../views/Logs.vue')
    },
    {
      path: '/empty',
      name: 'empty',
      component: () => import('../views/Empty.vue')
    },
  ]
})

export default router
