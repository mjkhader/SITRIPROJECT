import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from "@/views/home/LandingPage.vue";
import AddPublicPlace from '@/views/places/AddPublicPlace.vue';
import PlacesView from '../views/places/PlacesView.vue';
import PlacesDetails from '../views/places/PlacesDetails.vue';
import PlacesContact from '../views/places/PlacesContact.vue';
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
import NotFound from '@/views/NotFound.vue';


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
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/places',
      name: 'places',
      component: PlacesView
    },
    // for places id
    {
      path: '/places/:id',
      name: 'details',
      props:true,
      component: PlacesDetails,
      children: [
        {path:'contact',name:'contact',component: PlacesContact}, // places/c1/contact
      ]
    },
    {
      path: '/addPublicPlaces',
      name: 'addpublicPlaces',
      component: AddPublicPlace
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: () => import('../views/restaurants/resturant.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: "/flights",
      name: "flights",
      component: () => import('../views/flights/flight.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/aboutView.vue')
    },
    // Not Found Page
    {path:'/:notFound(.*)',component:NotFound}

  ]
});

 // Navigation guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (requiresAuth && !user?.email) {
    next('/login');
  }
  next();
});

export default router;