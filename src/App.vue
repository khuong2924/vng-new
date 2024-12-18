<template>
  <div class="bg-gradient-to-r from-gray-50 to-gray-100">
    <header-component @open-schedule="openScheduleModal"></header-component>
    
    <main class="pt-16">   
      <hero-section></hero-section>
      <plane-animation></plane-animation>
      <tour-section></tour-section>
      <contact-section></contact-section>

      <!-- Schedule Modal -->
      <schedule-modal 
        v-if="showScheduleModal" 
        @close="closeScheduleModal"
      ></schedule-modal>
    </main>

    <site-footer></site-footer>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import PlaneAnimation from './components/PlaneAnimation.vue'
import ScheduleModal from './components/ScheduleModal.vue'
import TourSection from './components/TourSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSection,
    PlaneAnimation,
    ScheduleModal,
    TourSection,
    ContactSection,
    SiteFooter
  },
  data() {
    return {
      showScheduleModal: false
    }
  },
  methods: {
    openScheduleModal() {
      this.showScheduleModal = true
    },
    closeScheduleModal() {
      this.showScheduleModal = false
    }
  }
}
</script>

<style scoped>
/* Các style chung cho App */
</style>
