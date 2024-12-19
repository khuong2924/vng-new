<template>
  <section id="tour-list" class="py-12 bg-white">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="tour in filteredTours" 
             :key="tour.id" 
             class="tour-card bg-white rounded-lg shadow-md overflow-hidden" 
             data-aos="fade-up">
          <div class="relative">
            <img :src="tour.image" :alt="tour.name" class="w-full h-48 object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 card-overlay">
              <button class="view-details-btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
                <i class="fas fa-info-circle mr-2"></i> View Details
              </button>
            </div>
            <span class="absolute top-2 left-2 bg-blue-500 bg-opacity-60 text-white px-3 py-1 rounded-full flex items-center text-sm font-semibold transition duration-300 ease-in-out transform hover:bg-opacity-80 hover:scale-105">
              <div class="flex items-center gap-2">
                <svg v-if="tour.vehicle === 'Plane'" 
                     xmlns="http://www.w3.org/2000/svg" 
                     class="h-5 w-5 text-white-500" 
                     viewBox="0 0 24 24" 
                     fill="currentColor">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
                
                <svg v-if="tour.vehicle === 'Car'" 
                     xmlns="http://www.w3.org/2000/svg" 
                     class="h-5 w-5 text-white-500" 
                     viewBox="0 0 24 24" 
                     fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
                  <circle cx="7.5" cy="14.5" r="1.5"/>
                  <circle cx="16.5" cy="14.5" r="1.5"/>
                </svg>
                
                <span>{{ tour.vehicle }}</span>
              </div>
            </span>
          </div>
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ tour.name }}</h3>
            <p class="text-gray-600 mb-2 flex items-center">
              <i class="far fa-clock mr-2"></i>
              <span>{{ tour.time }}</span>
            </p>
            <p class="text-gray-600 mb-2 flex items-center">
              <i class="fas fa-plane-departure mr-2"></i>
              <span>{{ tour.departure }}</span>
            </p>
            <p class="text-lg font-bold text-blue-500 mb-4 flex items-center">
              <i class="fas fa-tag mr-2"></i>
              <span>{{ tour.price }} đ</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TourList',
  data() {
    return {
      tours: [
        { id: 1, name: 'European Adventure', time: '10 days', departure: 'Hà Nội', price: 2500, image: 'https://i.pinimg.com/736x/c9/73/dc/c973dca3712cfd6d8e14948326864bf8.jpg', vehicle: 'Car' },
        { id: 2, name: 'Asian Explorer', time: '14 days', departure: 'TP HCM', price: 3000, image: 'https://i.pinimg.com/736x/8c/fe/0f/8cfe0f3a09fa814e33a0279719fcc832.jpg', vehicle: 'Plane' },
        { id: 3, name: 'American Road Trip', time: '7 days', departure: 'Hà Nội', price: 1800, image: 'https://i.pinimg.com/736x/39/4b/a5/394ba570534bd5f7de52eb3193b75951.jpg', vehicle: 'Car' },
        { id: 4, name: 'African Safari', time: '8 days', departure: 'TP HCM', price: 3500, image: 'https://i.pinimg.com/736x/82/28/b9/8228b9f13512dc1f7766e12b89a25986.jpg', vehicle: 'Plane' },
      ]
    }
  },
  computed: {
    filteredTours() {
      return this.tours; // Add filtering logic here if needed
    }
  },
  methods: {
    getVehicleIcon(vehicle) {
      const icons = {
        'Bus': 'fas fa-bus', 
        'Train': 'fas fa-train',
        'Car': 'fas fa-car',
        'Jeep': 'fas fa-truck',
        'Plane': 'fa-regular fa-plane'
      };
      return icons[vehicle] || 'fas fa-car';
    }
  }
}
</script>

<style scoped>
.tour-card {
  transition: all 0.3s ease;
}
.tour-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}
.tour-card:hover .card-overlay {
  opacity: 1;
}
.view-details-btn {
  transition: all 0.3s ease;
}
.view-details-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.4);
}
</style> 