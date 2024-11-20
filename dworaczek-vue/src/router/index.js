import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/:catchAll(.*)',
    name: 'home',
    meta: { title: 'Dworaczek.uk - Home' },
    component: () => import('../views/HomeView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : 'Dworaczek.uk';
  next();
});

export default router;