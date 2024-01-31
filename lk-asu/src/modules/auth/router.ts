export const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('./views/index.vue')
  },
  {
    path: '/auth/register',
    name: 'auth/register',
    component: () => import('./views/Register.vue')
  },
  {
    path: '/auth/forgot-password',
    name: 'auth/forgot_password',
    component: () => import('./views/ForgotPassword.vue')
  },
];