// main.js
import { createApp } from 'vue';
import App from '../src/views/App.vue';
import router from './router'; // Import router

// Import các component
import Header from './components/Header.vue';
import ScheduleModal from './components/home/ScheduleModal.vue';
import TourSection from './components/TourSection.vue';
import ContactSection from './components/home/ContactSection.vue';

// Tạo app
const app = createApp(App);

// Đăng ký các component
app.component('Header', Header);
app.component('ScheduleModal', ScheduleModal);
app.component('TourSection', TourSection);
app.component('ContactSection', ContactSection);

// Sử dụng router
app.use(router);

// Gắn app vào DOM
app.mount('#app');

console.log('App mounted');
