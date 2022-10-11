import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogTemplate from '../views/LogTemplate.vue'
import Empty from '../views/Empty.vue'

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
      component: LogTemplate
      // component: () => import('../views/LogTemplate.vue')
    },
    {
      path: '/empty',
      name: 'empty',
      component: Empty
      // component: () => import('../views/Empty.vue')
    },
  ]
})

export default router
