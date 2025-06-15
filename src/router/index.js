import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/launch',
      name: 'launch',
      component: () => import('../views/LaunchView.vue'),
    },
    {
      path: '/launch-standalone',
      name: 'launch-standalone',
      component: () => import('../views/StandaloneLaunchView.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router
