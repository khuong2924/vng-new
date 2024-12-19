<template>
  <section class="bg-gradient-to-br p-4" x-data="tourFilter()" x-init="AOS.init();">
    <div class="max-w-6xl mx-auto">
      <div class="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-0" data-aos="fade-up" data-aos-delay="200">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <!-- Location Filter -->
          <div class="space-y-2" data-aos="fade-right" data-aos-delay="300">
            <label for="location" class="block text-sm font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Location
            </label>
            <select v-model="filters.location" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-full transition duration-300 ease-in-out hover:border-indigo-300">
              <option value="">All Locations</option>
              <option>Paris</option>
              <option>Rome</option>
              <option>Barcelona</option>
              <option>London</option>
            </select>
          </div>

          <!-- Duration Filter -->
          <div class="space-y-2" data-aos="fade-right" data-aos-delay="400">
            <label for="duration" class="block text-sm font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Duration
            </label>
            <select v-model="filters.duration" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-full transition duration-300 ease-in-out hover:border-indigo-300">
              <option value="">Any Duration</option>
              <option value="1-3">1-3 Days</option>
              <option value="4-6">4-6 Days</option>
              <option value="7-9">7-9 Days</option>
              <option value="10+">10+ Days</option>
            </select>
          </div>

          <!-- Budget Filter -->
          <div class="space-y-2" data-aos="fade-right" data-aos-delay="500">
            <label for="budget" class="block text-sm font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Budget Range
            </label>
            <select v-model="filters.budget" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-full transition duration-300 ease-in-out hover:border-indigo-300">
              <option value="">Any Budget</option>
              <option value="0-500">$0 - $500</option>
              <option value="501-1000">$501 - $1000</option>
              <option value="1001-2000">$1001 - $2000</option>
              <option value="2000+">$2000+</option>
            </select>
          </div>

          <!-- Sort By -->
          <div class="space-y-2" data-aos="fade-left" data-aos-delay="600">
            <label for="sortBy" class="block text-sm font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              Sort By
            </label>
            <select v-model="sortOrder" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-full transition duration-300 ease-in-out hover:border-indigo-300">
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="duration_asc">Duration: Short to Long</option>
              <option value="duration_desc">Duration: Long to Short</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <!-- Find Tours Button -->
          <div class="flex items-end justify-center lg:justify-start" data-aos="fade-left" data-aos-delay="700">
            <button @click="applyFilters" class="w-full lg:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Find Tours
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TourFilter',
  data() {
    return {
      filters: {
        location: '',
        duration: '',
        budget: ''
      },
      sortOrder: 'price_asc'
    }
  },
  methods: {
    applyFilters() {
      const filterData = {
        ...this.filters,
        sortOrder: this.sortOrder
      }
      this.$emit('filter-changed', filterData)
    }
  }
}
</script>

<style scoped>
.backdrop-filter {
  backdrop-filter: blur(8px);
}
</style> 