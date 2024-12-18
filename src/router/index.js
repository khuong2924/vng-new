import { createRouter, createWebHistory } from 'vue-router';
import App from '../views/App.vue'; 
import TourType from '../views/TourType.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,
  },
  {
    path: '/tour-type',
    name: 'TourType',
    component: TourType,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
