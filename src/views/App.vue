<template>
  <div class="bg-gradient-to-r from-gray-50 to-gray-100">
    <header-component></header-component>
    
    <main class="pt-16">   
      <router-view></router-view>
    </main>

    <site-footer></site-footer>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue'
import ScheduleModal from '../components/home/ScheduleModal.vue'
import TourSection from '../components/TourSection.vue'
import ContactSection from '../components/home/ContactSection.vue'
import ImageGallery from '../components/home/ImageGallery.vue' 
import SiteFooter from '../components/Footer.vue'
import HeroSection from '../components/home/HeroSection.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSection,
    ScheduleModal,
    TourSection,
    ContactSection,
    SiteFooter,
    ImageGallery
  },
  mounted() {
    AOS.init()
  }
}
</script>

<style>
#app {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
