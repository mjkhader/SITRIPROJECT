import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from "@/views/home/LandingPage.vue";
import AddPublicPlace from '@/views/places/AddPublicPlace.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      name:'LandingPage',
      component: LandingPage,      
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
      component: () => import('../views/places/PlacesView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/events/EventsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminDashboard.vue'),
      meta: { requiresAdmin: true }
    }    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/aboutView.vue')
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: () => import('../views/restaurants/resturant.vue')
    },
    {
      path: "/flights",
      name: "flights",
      component: () => import('../views/flights/flight.vue')
    }

  ]
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
  const user = JSON.parse(localStorage.getItem('user') || '{}');
   if (requiresAuth && !user?.email) {
    next('/login');
  } 
    next();
});

export default router;