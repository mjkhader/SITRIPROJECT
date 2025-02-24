import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from "@/views/home/LandingPage.vue";
import AddPublicPlace from '@/views/places/AddPublicPlace.vue';
import PlacesView from '../views/places/PlacesView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
import Hotels from '@/views/hotels/hotels.vue';
import NotFound from '@/views/NotFound.vue';
import DetailsHotel from '@/views/hotels/DetailsHotel.vue';


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
    // for hotels id
    {
      path: '/places/:id',
      name: 'hotels',
      component: PlacesView,
      children: [
        {path:'info',name:'info',component: PlacesView}, // places/c1/info
      ]
    },
    {
      path: '/addPublicPlaces',
      name: 'addpublicPlaces',
      component: AddPublicPlace
    },
    {
      path: '/hotels',
      name: 'hotels',
      component: Hotels
    },
    // Not Found Page
    {path:'/:notFound(.*)',component:NotFound}

  ]
});

 // Navigation guard
// router.beforeEach((to, from, next) => {
//   const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
//   const user = JSON.parse(localStorage.getItem('user') || '{}');

//   if (requiresAdmin && user.role !== 'admin') {
//     next('/');
//   } else {
//     next();
//   }
// });

export default router;