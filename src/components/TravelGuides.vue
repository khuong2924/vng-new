<template>
    <section id="travel-guides" class="">
        <div class="container mx-auto px-4 py-8">
            <!-- Title Section -->
            <div class="flex justify-between items-center mb-8 animate-fade-in-down">
                <h1 class="text-3xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:scale-105 transition-all duration-300">Cẩm nang du lịch</h1>
                <button class="px-8 py-4 bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500 text-white rounded-full hover:scale-110 transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl font-semibold flex items-center gap-3 hover:rotate-1">
                    <span class="text-lg">View All</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <!-- Main Content Section -->
            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Video Section -->
                <div class="lg:w-1/4 bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-3xl border-2 border-gradient-to-r from-blue-200 to-purple-200 backdrop-filter backdrop-blur-lg">
                    <div class="aspect-w-9 aspect-h-16 relative hover:opacity-90 transition-opacity duration-300">
                        <iframe class="absolute inset-0 w-full h-full" 
                                src="https://www.tiktok.com/embed/7254047822364806405" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </div>
                </div>
                
                <!-- Travel Guides List Section -->
                <div class="lg:w-3/4 relative">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Guide Item 1 -->
                        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-105 group border-2 border-gradient-to-r from-blue-200 to-purple-200 backdrop-filter backdrop-blur-lg">
                            <div class="relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b" alt="Visa Tips Guide" class="w-full h-48 object-cover group-hover:scale-125 group-hover:rotate-3 transition-transform duration-700">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div class="p-6 text-center transform group-hover:-translate-y-2 transition-transform duration-300">
                                <h3 class="font-bold text-gray-800 text-xl group-hover:text-blue-600 transition-colors duration-300">Visa Tips</h3>
                                <p class="text-gray-600 text-sm mt-2 group-hover:text-gray-800">Essential visa guidelines for travelers</p>
                            </div>
                        </div>

                        <!-- Guide Item 2 -->
                        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-105 group border-2 border-gradient-to-r from-blue-200 to-purple-200 backdrop-filter backdrop-blur-lg">
                            <div class="relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800" alt="Travel Outfits Guide" class="w-full h-48 object-cover group-hover:scale-125 group-hover:rotate-3 transition-transform duration-700">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div class="p-6 text-center transform group-hover:-translate-y-2 transition-transform duration-300">
                                <h3 class="font-bold text-gray-800 text-xl group-hover:text-purple-600 transition-colors duration-300">Travel Outfits</h3>
                                <p class="text-gray-600 text-sm mt-2 group-hover:text-gray-800">Perfect outfit suggestions for your journey</p>
                            </div>
                        </div>

                        <!-- Guide Item 3 -->
                        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-105 group border-2 border-gradient-to-r from-blue-200 to-purple-200 backdrop-filter backdrop-blur-lg">
                            <div class="relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1528127269322-539801943592" alt="Vietnam Attractions" class="w-full h-48 object-cover group-hover:scale-125 group-hover:rotate-3 transition-transform duration-700">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div class="p-6 text-center transform group-hover:-translate-y-2 transition-transform duration-300">
                                <h3 class="font-bold text-gray-800 text-xl group-hover:text-pink-600 transition-colors duration-300">Vietnam Attractions</h3>
                                <p class="text-gray-600 text-sm mt-2 group-hover:text-gray-800">Must-visit places in Vietnam</p>
                            </div>
                        </div>
                    </div>

                    <!-- Navigation Button -->
                    <button aria-label="View next travel guides" class="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 group border-2 border-gradient-to-r from-blue-200 to-purple-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 group-hover:text-purple-600 transition-colors duration-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TravelGuides'
}
</script> 