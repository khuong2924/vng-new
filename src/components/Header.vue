<template>
  <router-link to="/tour-detail"></router-link>
  <header class="bg-custom-gradient backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-500 h-20 flex items-center justify-between px-4">
    <!-- Enhanced Logo section -->
    <div class="logo-container flex-shrink-0 flex items-center px-8">
      <img :src="logo"
        alt="VNG Logo" 
        class="w-40 h-30 hover:scale-110 transition-all duration-500 object-contain"
      >
    </div>

    <!-- Enhanced Navigation -->
    <div class="flex px-8 items-center space-x-8">
      <!-- Hide nav links on mobile -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="/" class="nav-link group">
          <span class="relative">
            Trang chủ
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </a>
        <a href="/tour-type" class="nav-link group">
          <span class="relative">
            Du lịch
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </a>
        <a href="/visa-service" class="nav-link group">
          <span class="relative">
            Dịch vụ VISA
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </a>
      </div>

      <router-link to="/tour-detail" 
        class="motion-preset-flomoji-🚀 inline-flex items-center px-4 py-2 border-2 border-blue-500 text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-1000 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50">
        Đi ngay
        <svg class="ml-2 -mr-1 w-6 h-6 animate-bounce-slow" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </router-link>

      <!-- Mobile menu button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden fixed right-0 top-20 w-64 bg-blue-600 shadow-lg rounded-l-lg p-4">
      <div class="flex flex-col space-y-4">
        <a href="/" class="nav-link group">
          <span class="relative">
            Trang chủ
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </a>
        <a href="/tour-type" class="nav-link group">
          <span class="relative">
            Du lịch
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import logo from '@/assets/Logo-ngang-01.png';

export default {
  name: 'HeaderComponent',
  emits: ['open-schedule'],
  data() {
    return {
      isMenuOpen: false,
      logo: logo,
    }
  }
}
</script>

<style scoped>
/* Enhanced Navigation Links */
.nav-link {
  @apply text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform;
}

/* Enhanced Glow Button */
.glow-button {
  @apply inline-flex items-center px-6 py-3 text-lg font-medium rounded-full text-white 
  bg-gradient-to-r from-blue-600 to-teal-400 hover:from-blue-700 hover:to-teal-500
  transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50
  border border-white/20 backdrop-blur-sm;
  animation: glow 2s infinite;
}

/* Update header to use Tailwind class with animation */
.bg-custom-gradient {
  background-size: 200% 200%;
  animation: gradientAnimation 15s ease infinite;
}

/* Float Animation for Logo */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes gradientAnimation {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }
  50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.8); }
}
</style>

