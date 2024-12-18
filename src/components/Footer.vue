<template>
  <footer class="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center transform hover:scale-105 transition-transform duration-500">
        <p class="text-gray-300 hover:text-white transition-colors duration-300 animate__animated animate__fadeIn">
          © {{ currentYear }} Wanderlust Tours. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script> 