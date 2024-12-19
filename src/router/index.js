import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TourType from '../views/TourType.vue';
import TourDetail from '../views/TourDetail.vue';
import VisaService from '../views/VisaService.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tour-type',
    name: 'TourType',
    component: TourType,
  },
  {
    // path: '/tour/:id',
    path: '/tour-detail',
    name: 'TourDetail',
    component: TourDetail,
  },
  {
    path: '/visa-service',
    name: 'VisaService',
    component: VisaService,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
