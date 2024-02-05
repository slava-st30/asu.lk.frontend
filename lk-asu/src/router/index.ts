import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/modules/home/views/index.vue';
import { routes as authRoutes } from '@/modules/auth/router';

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
      component: () => import('@/modules/UIKit.vue'),
    },
    {
      path: '/profile/:id',
      name: 'profile',
      props: true,
      component: () => import('@/modules/profile/views/_id.vue'),
    },
    ...authRoutes,
  ]
})

export default router;