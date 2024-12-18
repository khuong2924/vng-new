<template>
  <section class="py-20 px-4 mt-0">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <tour-card v-for="tour in tours" 
                  :key="tour.id" 
                  :tour="tour">
        </tour-card>
      </div>
    </div>
  </section>
</template>

<script>
import TourCard from './TourCard.vue'

export default {
  name: 'TourSection',
  components: {
    TourCard
  },
  data() {
    return {
      tours: [
        {
          id: 1,
          title: 'BangKok - Pattaya',
          duration: '5 ngày 4 đêm',
          price: '6.290.000 đ',
          image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b',
          from: 'Hồ Chí Minh'
        },
        // Add more tours as needed
      ]
    }
  }
}
</script> 