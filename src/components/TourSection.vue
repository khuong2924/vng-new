<template>
  <section class="py-20 px-4 mt-0">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(tour, index) in tours" 
             :key="index"
             class="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 relative" 
             data-aos="fade-up" 
             data-aos-delay="200">
          <div class="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full z-10 flex items-center gap-2">
            <i class="fas fa-location-arrow"></i>
            <span>{{ tour.from }}</span>
          </div>
          <img :src="tour.image" :alt="tour.title" class="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ tour.title }}</h3>
            <p class="text-gray-600 mb-4">{{ tour.duration }}</p>
            <div class="flex justify-between items-center border-t pt-4">
              <div class="flex items-center gap-2 text-green-600 font-bold text-xl">
                <i class="fas fa-tag animate-bounce"></i>
                <span>{{ tour.price }}</span>
              </div>
              <a :href="tour.link" class="text-blue-600 font-semibold hover:text-blue-800 flex items-center group">
                Xem chi tiết 
                <i class="fas fa-chevron-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TourSection',
  data() {
    return {
      tours: [
        {
          title: 'BangKok - Pattaya',
          duration: 'Hành trình 5 ngày 4 đêm',
          price: '6.290.000 đ',
          image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b',
          from: 'từ Hồ Chí Minh',
          link: '#'
        },
        {
          title: 'BangKok - Pattaya',
          duration: 'Hành trình 5 ngày 4 đêm',
          price: '6.290.000 đ',
          image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b',
          from: 'từ Hồ Chí Minh',
          link: '#'
        },
        {
          title: 'BangKok - Pattaya',
          duration: 'Hành trình 5 ngày 4 đêm',
          price: '6.290.000 đ',
          image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b',
          from: 'từ Hồ Chí Minh',
          link: '#'
        }
      ]
    }
  }
}
</script>
