<template>
  <header-component />
  <hero-section></hero-section>
  <image-gallery></image-gallery>
  <schedule-modal v-if="showScheduleModal" @close="closeScheduleModal" />
  <plane-animation />
  <tour-section></tour-section>
  <contact-section></contact-section>
  <travel-guides />
  
</template>

<script>
import HeaderComponent from '../components/Header.vue'
import ScheduleModal from '../components/home/ScheduleModal.vue'
import TourSection from '../components/TourSection.vue'
import ContactSection from '../components/home/ContactSection.vue'
import ImageGallery from '../components/home/ImageGallery.vue' 
import SiteFooter from '../components/Footer.vue'
import HeroSection from '../components/home/HeroSection.vue'
import TravelGuides from '../components/TravelGuides.vue'
import PlaneAnimation from '../components/home/PlaneAnimation.vue'
// Move your component imports and setup here
export default {
  name: 'Home',
  components: {
    HeroSection,
    ScheduleModal,
    PlaneAnimation,
    TourSection,
    ContactSection,
    ImageGallery,
    TravelGuides,
    SiteFooter,
    
  }
}
</script> 