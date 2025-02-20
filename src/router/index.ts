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
      component: () => import('../views/places/PlacesView.vue')
    },
    {
      path: '/addPublicPlaces',
      name: 'addpublicPlaces',
      component: AddPublicPlace
    },
    {
      path: '/hotels',
      name: 'hotels',
      component: () => import('../views/hotels/hotels.vue')
    },

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