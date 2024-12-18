<template>
  <header class="bg-white/90 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-500 hover:shadow-2xl h-20 flex items-center justify-between px-4">
    <!-- Logo -->
    <div class="logo d-flex align-items-center me-auto flex-shrink-0 flex items-center transform hover:scale-110 transition-transform px-8 duration-500">
      <img src="src/assets/logo-ngang-khong-nen.png" alt="Wanderlust Logo" class="logo d-flex align-items-center me-auto w-auto max-h-40 hover:scale-105 transition-transform duration-500 object-contain">
    </div>

    <!-- Navigation -->
    <div class="flex px-8 items-center space-x-6">
      <a href="#" class="text-blue-600 hover:text-blue-800 px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-blue-100 hover:scale-105 transform">Trang chủ</a>
      <a href="#" class="text-blue-600 hover:text-blue-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-blue-100 hover:scale-105 transform">Du lịch</a>
      <button @click="$emit('open-schedule')" 
          class="bg-transparent text-blue-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-blue-100 hover:scale-105 transform flex items-center border border-blue-600">
          <i class="fas fa-calendar-alt mr-2"></i>
          <span>Lịch khởi hành</span>
      </button>
      
      <a href="#" data-aos-delay="300" data-aos="zoom-in" class="motion-preset-flomoji-🚀 inline-flex items-center px-4 py-2 border-2 border-blue-500 text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50">
        Đi ngay
        <svg class="ml-2 -mr-1 w-6 h-6 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  emits: ['open-schedule']
}
</script> 