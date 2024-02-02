import { createRouter, createWebHistory } from 'vue-router'
import Home from '../modules/views/Home.vue';
import { routes as authRoutes } from '../modules/auth/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/ui-kit',
      name: 'ui_kit',
      component: () => import('../modules/UIKit.vue'),
    },
    ...authRoutes,
  ]
})

export default router;