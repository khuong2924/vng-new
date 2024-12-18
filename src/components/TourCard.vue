<template>
  <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 relative" 
       data-aos="fade-up" 
       data-aos-delay="200">
    <div class="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full z-10 flex items-center gap-2">
      <i class="fas fa-location-arrow"></i>
      <span>từ {{ tour.from }}</span>
    </div>
    <img :src="tour.image" 
         :alt="tour.title" 
         class="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500">
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{{ tour.title }}</h3>
      <p class="text-gray-600 mb-4">Hành trình {{ tour.duration }}</p>
      <div class="flex justify-between items-center border-t pt-4">
        <div class="flex items-center gap-2 text-green-600 font-bold text-xl">
          <i class="fas fa-tag animate-bounce"></i>
          <span>{{ tour.price }}</span>
        </div>
        <a href="#" class="text-blue-600 font-semibold hover:text-blue-800 flex items-center group">
          Xem chi tiết 
          <i class="fas fa-chevron-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TourCard',
  props: {
    tour: {
      type: Object,
      required: true
    }
  }
}
</script> 