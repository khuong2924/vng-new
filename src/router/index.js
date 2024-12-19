import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TourType from '../views/TourType.vue';
import TourDetail from '../views/TourDetail.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
