// main.js
import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';
import ScheduleModal from './components/ScheduleModal.vue'
import TourSection from './components/TourSection.vue'
import ContactSection from './components/ContactSection.vue'


const app = createApp(App);
app.component('Header', Header);
app.component('ScheduleModal', ScheduleModal)
app.component('TourSection', TourSection)
app.component('ContactSection', ContactSection)
app.mount('#app');

console.log('App mounted');

