<template>
  <section class="bg-gray-50 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
      
      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Review Card 1 -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center mb-4">
            <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Reviewer" class="w-12 h-12 rounded-full">
            <div class="ml-4">
              <h3 class="font-semibold">Sarah Johnson</h3>
              <div class="flex text-yellow-400">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
          <p class="text-gray-600">
            "Amazing experience! The tour was well organized and our guide was very knowledgeable. Highly recommend!"
          </p>
          <p class="text-sm text-gray-500 mt-4">Visited March 2024</p>
        </div>

        <!-- Review Card 2 -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center mb-4">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Reviewer" class="w-12 h-12 rounded-full">
            <div class="ml-4">
              <h3 class="font-semibold">Michael Chen</h3>
              <div class="flex text-yellow-400">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
          <p class="text-gray-600">
            "The highlights of Vietnam in one perfect package. Great value for money and unforgettable memories."
          </p>
          <p class="text-sm text-gray-500 mt-4">Visited February 2024</p>
        </div>

        <!-- Review Card 3 -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center mb-4">
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Reviewer" class="w-12 h-12 rounded-full">
            <div class="ml-4">
              <h3 class="font-semibold">Emma Wilson</h3>
              <div class="flex text-yellow-400">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
          <p class="text-gray-600">
            "Beautiful country, fantastic food, and wonderful people. This tour exceeded all my expectations!"
          </p>
          <p class="text-sm text-gray-500 mt-4">Visited January 2024</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CustomerReviews'
}
</script> 