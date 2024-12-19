<template>
  <div class="bg-gradient-to-r from-gray-50 to-gray-100">
    <main>
      <tour-detail-main />
      <customer-reviews />
    </main>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import TourDetailMain from '../components/tour-detail/TourDetailMain.vue'
import CustomerReviews from '../components/tour-detail/CustomerReviews.vue'

export default {
  name: 'TourDetail',
  components: {
    TourDetailMain,
    CustomerReviews
  },
  mounted() {
    AOS.init()
  }
}
</script> 