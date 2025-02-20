import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue')
    },
    {
      path: '/places',
      name: 'places',
      component: () => import('../views/places/PlacesView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/events/EventsView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminDashboard.vue'),
      meta: { requiresAdmin: true }
    }
  ]
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (requiresAdmin && user.role !== 'admin') {
    next('/');
  } else {
    next();
  }
});

export default router;