<template>
  <div class="bg-gradient-to-r from-gray-50 to-gray-100">
    <main>
      <hero-slider />
      <banner-explore />
      <tour-filter @filter-changed="handleFilterChange" />
      <tour-list />
      <travel-guides />
    </main>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeroSlider from '../components/tour-type/HeroSlider.vue'
import TourFilter from '../components/tour-type/TourFilter.vue'
import BannerExplore from '../components/tour-type/BannerExplore.vue'
import TourList from '../components/tour-type/TourList.vue'
import TravelGuides from '../components/TravelGuides.vue'

export default {
  name: 'TourType',
  components: {
    HeroSlider,
    TourFilter,
    BannerExplore,
    TourList,
    TravelGuides
  },
  mounted() {
    AOS.init()
  },
  methods: {
    handleFilterChange(filters) {
      console.log('Filters changed:', filters)
      // Implement filter handling logic
    }
  }
}
</script>

<style>
/* Add any additional styles here */
</style>
  