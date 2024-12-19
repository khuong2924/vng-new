<template>
  <main class="container mx-auto max-w-7xl py-8">
    <div class="grid md:grid-cols-3 gap-8 px-4">
      <div class="md:col-span-2">
        <!-- Image Carousel -->
        <div class="relative h-[400px] overflow-hidden rounded-xl mb-8 group">
          <div class="flex transition-transform duration-1000 ease-in-out transform h-full" 
               :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
            <img v-for="(image, index) in tour.images" 
                 :key="index"
                 :src="image" 
                 :alt="`Tour image ${index + 1}`"
                 class="w-full h-full object-cover flex-shrink-0">
          </div>
          <!-- Navigation Buttons -->
          <button @click="prevImage" 
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button @click="nextImage" 
                  class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
            <i class="fas fa-chevron-right"></i>
          </button>

          <!-- Indicators -->
          <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button v-for="(_, index) in tour.images" 
                    :key="index"
                    @click="setImage(index)"
                    :class="['w-2 h-2 rounded-full transition-all duration-300',
                            currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50']">
            </button>
          </div>
        </div>

        <!-- Tour Title -->
        <h1 class="text-4xl font-bold mb-6 text-center font-poppins bg-gradient-to-r from-purple-400 via-blue-500 to-blue-500 text-transparent bg-clip-text motion-scale-in-[0.49] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-duration-[0.75s]/scale motion-delay-[0.21s]/scale motion-duration-[0.69s]/translate motion-duration-[0.68s]/opacity motion-duration-[0.72s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier">
          {{ tour.title }}
        </h1>

        <!-- Tour Info -->
        <div id="tour-less-info" class="bg-white rounded-xl p-6 shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300">
          <div class="grid grid-cols-2 gap-4">
            <div class="text-center p-4 border rounded-lg hover:border-blue-500 transition-colors duration-300">
              <i class="fas fa-clock text-2xl text-blue-500 mb-2"></i>
              <p class="text-gray-600">Thời gian</p>
              <p class="font-bold">{{ tour.duration }}</p>
            </div>
            <div class="text-center p-4 border rounded-lg hover:border-blue-500 transition-colors duration-300">
              <i class="fas fa-plane-departure text-2xl text-blue-500 mb-2"></i>
              <p class="text-gray-600">Khởi hành</p>
              <p class="font-bold">{{ tour.startTime }}</p>
              <p class="text-sm">{{ formatDate(tour.startDate) }}</p>
            </div>
            <div class="text-center p-4 border rounded-lg hover:border-blue-500 transition-colors duration-300">
              <i class="fas fa-users text-2xl text-blue-500 mb-2"></i>
              <p class="text-gray-600">Số chỗ còn lại</p>
              <p class="font-bold">{{ tour.seatsLeft }}</p>
            </div>
            <div class="text-center p-4 border rounded-lg hover:border-blue-500 transition-colors duration-300">
              <i class="fas fa-map-marker-alt text-2xl text-blue-500 mb-2"></i>
              <p class="text-gray-600">Khởi hành từ</p>
              <p class="font-bold">{{ tour.departureLocation }}</p>
            </div>
          </div>
        </div>

        <!-- Tour Highlights -->
        <div id="tour-highlights" class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h2 class="text-2xl font-bold mb-4 text-blue-600 border-b pb-2">Điểm nhấn hành trình</h2>
            <ul class="space-y-3">
              <li class="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg">
                <i class="fas fa-umbrella-beach text-blue-500 text-xl"></i>
                <span>Private Beach Access</span>
              </li>
              <li class="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg">
                <i class="fas fa-ship text-blue-500 text-xl"></i>
                <span>Sunset Cruise</span>
              </li>
              <li class="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg">
                <i class="fas fa-fish text-blue-500 text-xl"></i>
                <span>Snorkeling Adventure</span>
              </li>
              <li class="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg">
                <i class="fas fa-hotel text-blue-500 text-xl"></i>
                <span>Luxury Resort Stay</span>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h2 class="text-2xl font-bold mb-4 text-purple-600 border-b pb-2">Quà tặng đi kèm</h2>
            <div class="space-y-4">
              <div class="bg-purple-50 p-4 rounded-lg flex items-center space-x-4">
                <div class="bg-purple-100 p-3 rounded-full">
                  <i class="fas fa-gift text-purple-500 text-2xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-purple-700">Buffet nhà hàng 5 sao quốc tế Baiyoke Sky</h3>
                  <p class="text-sm text-purple-600">Luxury beach kit & refreshments</p>
                </div>
              </div>

              <div class="bg-purple-50 p-4 rounded-lg flex items-center space-x-4">
                <div class="bg-purple-100 p-3 rounded-full">
                  <i class="fas fa-spa text-purple-500 text-2xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-purple-700">1 suất trải nghiệm Massage Thái cổ truyền</h3>
                  <p class="text-sm text-purple-600">30-minute massage included</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tour Schedule -->
        <div id="tour-schedule" class="bg-white rounded-xl p-6 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-4">Lịch trình chuyến đi</h2>
          <div class="space-y-4">
            <!-- Day 1 -->
            <div class="border-l-4 border-blue-500 pl-4 p-4 hover:bg-blue-50 relative group cursor-pointer transition-all duration-300" 
                 @click="toggleDetails('day1')">
              <div class="flex justify-between items-center">
                <h3 class="font-bold text-xl">Day 1</h3>
                <i class="fas fa-chevron-down text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
              </div>
              <p class="text-gray-600 mb-2">Morning: Airport pickup & resort check-in<br>Afternoon: Welcome drinks & beach exploration<br>Evening: Sunset dinner cruise</p>
              <div :id="'day1'" class="hidden bg-blue-50 mt-4 p-4 rounded-lg transition-all duration-300">
                <h4 class="font-semibold text-blue-700 mb-2">Detailed Schedule</h4>
                <ul class="space-y-2">
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-sun text-yellow-500 mt-1"></i>
                    <div>
                      <span class="font-medium">Morning (8:00 AM - 12:00 PM)</span>
                      <p class="text-sm text-gray-600">VIP airport pickup service, luxury transfer to resort, welcome ceremony, room check-in with ocean view, resort tour</p>
                    </div>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-umbrella-beach text-orange-500 mt-1"></i>
                    <div>
                      <span class="font-medium">Afternoon (1:00 PM - 5:00 PM)</span>
                      <p class="text-sm text-gray-600">Welcome cocktail reception, beach orientation, free time for swimming and sunbathing, water sports introduction</p>
                    </div>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-moon text-indigo-500 mt-1"></i>
                    <div>
                      <span class="font-medium">Evening (6:00 PM - 10:00 PM)</span>
                      <p class="text-sm text-gray-600">Luxury catamaran sunset cruise, champagne service, gourmet dinner under the stars, live music entertainment</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Day 2 -->
            <div class="border-l-4 border-blue-500 pl-4 p-4 hover:bg-blue-50 relative group cursor-pointer transition-all duration-300" 
                 @click="toggleDetails('day2')">
              <div class="flex justify-between items-center">
                <h3 class="font-bold text-xl">Day 2</h3>
                <i class="fas fa-chevron-down text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
              </div>
              <p class="text-gray-600 mb-2">Morning: Snorkeling expedition<br>Afternoon: Beach activities<br>Evening: Beachside BBQ</p>
              <div :id="'day2'" class="hidden bg-blue-50 mt-4 p-4 rounded-lg transition-all duration-300">
                <h4 class="font-semibold text-blue-700 mb-2">Detailed Schedule</h4>
                <ul class="space-y-2">
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-fish text-blue-500 mt-1"></i>
                    <div>
                      <span class="font-medium">Morning (9:00 AM - 12:00 PM)</span>
                      <p class="text-sm text-gray-600">Professional snorkeling guide, equipment fitting, coral reef exploration, underwater photography session</p>
                    </div>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-volleyball-ball text-yellow-600 mt-1"></i>
                    <div>
                      <span class="font-medium">Afternoon (2:00 PM - 5:00 PM)</span>
                      <p class="text-sm text-gray-600">Beach volleyball tournament, kayaking, paddleboarding, beach yoga session</p>
                    </div>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-fire text-red-500 mt-1"></i>
                    <div>
                      <span class="font-medium">Evening (7:00 PM - 10:00 PM)</span>
                      <p class="text-sm text-gray-600">Beachside BBQ feast, fresh seafood selection, bonfire experience, acoustic live music</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Day 3 -->
            <div class="border-l-4 border-blue-500 pl-4 p-4 hover:bg-blue-50 relative group cursor-pointer transition-all duration-300" 
                 @click="toggleDetails('day3')">
              <div class="flex justify-between items-center">
                <h3 class="font-bold text-xl">Day 3</h3>
                <i class="fas fa-chevron-down text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
              </div>
              <p class="text-gray-600 mb-2">Morning: Island hiking<br>Afternoon: Spa treatment<br>Evening: Cultural show</p>
              <div :id="'day3'" class="hidden bg-blue-50 mt-4 p-4 rounded-lg transition-all duration-300">
                <h4 class="font-semibold text-blue-700 mb-2">Detailed Schedule</h4>
                <ul class="space-y-2">
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-hiking text-green-600 mt-1"></i>
                    <div>
                      <span class="font-medium">Morning (8:00 AM - 11:00 AM)</span>
                      <p class="text-sm text-gray-600">Guided nature trail hike, wildlife spotting, panoramic viewpoint visit, tropical fruit tasting</p>
                    </div>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-spa text-purple-500 mt-1"></i>
                    <div>
                      <span class="font-medium">Afternoon (2:00 PM - 5:00 PM)</span>
                      <p class="text-sm text-gray-600">Luxury spa treatment, aromatherapy massage, facial treatment, private jacuzzi session</p>
                    </div>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-theater-masks text-indigo-600 mt-1"></i>
                    <div>
                      <span class="font-medium">Evening (8:00 PM - 10:00 PM)</span>
                      <p class="text-sm text-gray-600">Traditional dance performance, local music show, cultural dinner, interactive workshops</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Add this after the tour-schedule section -->
        <div id="tour-price-departure" class="bg-white rounded-xl p-6 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <i class="fas fa-plane-departure text-blue-600 mr-3"></i>Bảng giá và Ngày khởi hành
          </h2>
          
          <div class="grid gap-6">
            <!-- July Departures -->
            <div class="border rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <div class="flex justify-between items-center mb-4">
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-blue-600 mb-2">July 2024 Departures</h3>
                  <div class="space-y-4">
                    <!-- July 15 -->
                    <div class="bg-blue-50 p-4 rounded-lg transition-all hover:bg-blue-100">
                      <div class="flex items-center justify-between mb-2">
                        <span class="font-semibold text-blue-800">July 15, 2024</span>
                        <span class="text-green-600 font-bold">8 seats left</span>
                      </div>
                      <div class="grid grid-cols-2 gap-4">
                        <div class="border-r">
                          <p class="text-sm text-gray-600">Outbound Flight AA1234</p>
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-plane-departure text-blue-500"></i>
                            <span>MIA 08:00</span>
                            <i class="fas fa-long-arrow-alt-right text-gray-400"></i>
                            <span>PIS 11:30</span>
                          </div>
                        </div>
                        <div>
                          <p class="text-sm text-gray-600">Return Flight AA1235</p>
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-plane-arrival text-blue-500"></i>
                            <span>PIS 14:00</span>
                            <i class="fas fa-long-arrow-alt-right text-gray-400"></i>
                            <span>MIA 17:30</span>
                          </div>
                        </div>
                      </div>
                      <div class="mt-4 p-3 bg-white rounded-lg">
                        <h4 class="font-semibold text-gray-700 mb-2">Tour Package Pricing</h4>
                        <div class="grid grid-cols-3 gap-4">
                          <div class="text-center">
                            <p class="text-sm text-gray-600">Adult (12+)</p>
                            <p class="text-lg font-medium text-gray-500 line-through">$1,899</p>
                            <p class="text-xl font-bold text-blue-600">$1,499</p>
                          </div>
                          <div class="text-center">
                            <p class="text-sm text-gray-600">Child (2-11)</p>
                            <p class="text-lg font-medium text-gray-500 line-through">$1,399</p>
                            <p class="text-xl font-bold text-blue-600">$999</p>
                          </div>
                          <div class="text-center">
                            <p class="text-sm text-gray-600">Infant (0-2)</p>
                            <p class="text-lg font-medium text-gray-500 line-through">$399</p>
                            <p class="text-xl font-bold text-blue-600">$299</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- July 22 -->
                    <div class="bg-blue-50 p-4 rounded-lg transition-all hover:bg-blue-100">
                      <div class="flex items-center justify-between mb-2">
                        <span class="font-semibold text-blue-800">July 22, 2024</span>
                        <span class="text-green-600 font-bold">12 seats left</span>
                      </div>
                      <div class="grid grid-cols-2 gap-4">
                        <div class="border-r">
                          <p class="text-sm text-gray-600">Outbound Flight AA1236</p>
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-plane-departure text-blue-500"></i>
                            <span>MIA 09:00</span>
                            <i class="fas fa-long-arrow-alt-right text-gray-400"></i>
                            <span>PIS 12:30</span>
                          </div>
                        </div>
                        <div>
                          <p class="text-sm text-gray-600">Return Flight AA1237</p>
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-plane-arrival text-blue-500"></i>
                            <span>PIS 15:00</span>
                            <i class="fas fa-long-arrow-alt-right text-gray-400"></i>
                            <span>MIA 18:30</span>
                          </div>
                        </div>
                      </div>
                      <div class="mt-4 p-3 bg-white rounded-lg">
                        <h4 class="font-semibold text-gray-700 mb-2">Tour Package Pricing</h4>
                        <div class="grid grid-cols-3 gap-4">
                          <div class="text-center">
                            <p class="text-sm text-gray-600">Adult (12+)</p>
                            <p class="text-lg font-medium text-gray-500 line-through">$1,899</p>
                            <p class="text-xl font-bold text-blue-600">$1,499</p>
                          </div>
                          <div class="text-center">
                            <p class="text-sm text-gray-600">Child (2-11)</p>
                            <p class="text-lg font-medium text-gray-500 line-through">$1,399</p>
                            <p class="text-xl font-bold text-blue-600">$999</p>
                          </div>
                          <div class="text-center">
                            <p class="text-sm text-gray-600">Infant (0-2)</p>
                            <p class="text-lg font-medium text-gray-500 line-through">$399</p>
                            <p class="text-xl font-bold text-blue-600">$299</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- August Departures -->
            <div class="border rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <div class="flex justify-between items-center mb-4">
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-blue-600 mb-2">August 2024 Departures</h3>
                  <div class="space-y-4">
                    <!-- August 5 -->
                    <div class="bg-blue-50 p-4 rounded-lg transition-all hover:bg-blue-100">
                      <div class="flex items-center justify-between mb-2">
                        <span class="font-semibold text-blue-800">August 5, 2024</span>
                        <span class="text-green-600 font-bold">15 seats left</span>
                      </div>
                      <div class="grid grid-cols-2 gap-4">
                        <div class="border-r">
                          <p class="text-sm text-gray-600">Outbound Flight AA1238</p>
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-plane-departure text-blue-500"></i>
                            <span>MIA 10:00</span>
                            <i class="fas fa-long-arrow-alt-right text-gray-400"></i>
                            <span>PIS 13:30</span>
                          </div>
                        </div>
                        <div>
                          <p class="text-sm text-gray-600">Return Flight AA1239</p>
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-plane-arrival text-blue-500"></i>
                            <span>PIS 16:00</span>
                            <i class="fas fa-long-arrow-alt-right text-gray-400"></i>
                            <span>MIA 19:30</span>
                          </div>
                        </div>
                      </div>
                      <div class="mt-4 p-3 bg-white rounded-lg">
                        <h4 class="font-semibold text-gray-700 mb-2">Tour Package Pricing</h4>
                        <div class="grid grid-cols-3 gap-4">
                          <div class="text-center">
                            <p class="text-sm text-gray-600">Adult (12+)</p>
                            <p class="text-lg font-medium text-gray-500 line-through">$1,999</p>
                            <p class="text-xl font-bold text-blue-600">$1,599</p>
                          </div>
                          <div class="text-center">
                            <p class="text-sm text-gray-600">Child (2-11)</p>
                            <p class="text-lg font-medium text-gray-500 line-through">$1,499</p>
                            <p class="text-xl font-bold text-blue-600">$1,099</p>
                          </div>
                          <div class="text-center">
                            <p class="text-sm text-gray-600">Infant (0-2)</p>
                            <p class="text-lg font-medium text-gray-500 line-through">$499</p>
                            <p class="text-xl font-bold text-blue-600">$399</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- August 19 -->
                    <div class="bg-blue-50 p-4 rounded-lg transition-all hover:bg-blue-100">
                      <div class="flex items-center justify-between mb-2">
                        <span class="font-semibold text-blue-800">August 19, 2024</span>
                        <span class="text-green-600 font-bold">10 seats left</span>
                      </div>
                      <div class="grid grid-cols-2 gap-4">
                        <div class="border-r">
                          <p class="text-sm text-gray-600">Outbound Flight AA1240</p>
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-plane-departure text-blue-500"></i>
                            <span>MIA 11:00</span>
                            <i class="fas fa-long-arrow-alt-right text-gray-400"></i>
                            <span>PIS 14:30</span>
                          </div>
                        </div>
                        <div>
                          <p class="text-sm text-gray-600">Return Flight AA1241</p>
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-plane-arrival text-blue-500"></i>
                            <span>PIS 17:00</span>
                            <i class="fas fa-long-arrow-alt-right text-gray-400"></i>
                            <span>MIA 20:30</span>
                          </div>
                        </div>
                      </div>
                      <div class="mt-4 p-3 bg-white rounded-lg">
                        <h4 class="font-semibold text-gray-700 mb-2">Tour Package Pricing</h4>
                        <div class="grid grid-cols-3 gap-4">
                          <div class="text-center">
                            <p class="text-sm text-gray-600">Adult (12+)</p>
                            <p class="text-lg font-medium text-gray-500 line-through">$1,999</p>
                            <p class="text-xl font-bold text-blue-600">$1,599</p>
                          </div>
                          <div class="text-center">
                            <p class="text-sm text-gray-600">Child (2-11)</p>
                            <p class="text-lg font-medium text-gray-500 line-through">$1,499</p>
                            <p class="text-xl font-bold text-blue-600">$1,099</p>
                          </div>
                          <div class="text-center">
                            <p class="text-sm text-gray-600">Infant (0-2)</p>
                            <p class="text-lg font-medium text-gray-500 line-through">$499</p>
                            <p class="text-xl font-bold text-blue-600">$399</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Booking Sidebar -->
      <div id="book-tour" class="md:col-span-1">
        <!-- Booking Card - Sticky -->
        <div class="bg-white rounded-xl p-6 shadow-lg sticky top-24 mb-6">
          <div class="mb-6">
            <p class="text-gray-600 line-through">Giá gốc: {{ formatPrice(tour.pricing.adult.original) }}</p>
            <p class="text-3xl font-bold text-blue-600">{{ formatPrice(tour.pricing.adult.discounted) }}</p>
          </div>
          
          <button @click="handleBooking" 
                  class="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 mb-4">
            <i class="fas fa-shopping-cart mr-2"></i>Đặt tour
          </button>
          <button class="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
            <i class="fas fa-comments mr-2"></i>Tư vấn ngay
          </button>
        </div>

        <!-- Services Info - Not Sticky -->
        <div class="bg-white rounded-xl p-6 shadow-lg mb-6">
          <div id="service-include" class="space-y-4">
            <h3 class="text-xl font-bold text-green-600 mb-4 border-b pb-2">Dịch vụ bao gồm:</h3>
            <ul class="text-gray-600 space-y-3">
              <li class="flex items-center space-x-2 bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-all">
                <i class="fas fa-plane-departure text-green-500"></i>
                <span>Vé máy bay khứ hồi SÀI GÒN – BANGKOK – SÀI GÒN, hành lý 07kg xách tay + 20kg hành lý ký gửi. </span>
              </li>
              <li class="flex items-center space-x-2 bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-all">
                <i class="fas fa-bus text-green-500"></i>
                <span>Xe máy lạnh phục vụ riêng cho đoàn suốt tuyến.</span>
              </li>
              <li class="flex items-center space-x-2 bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-all">
                <i class="fas fa-receipt text-green-500"></i>
                <span>Các loại thuế phí sân bay, xăng dầu, an ninh,... </span>
              </li>
              <li class="flex items-center space-x-2 bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-all">
                <i class="fas fa-hotel text-green-500"></i>
                <span>Khách sạn tiêu chuẩn 4 - 5 sao tiêu chuẩn THÁI LAN, 2 hoặc 3 khách người lớn 1 phòng, trường hợp ch đi lẻ sở ở ghép với khách khác hoặc sẽ phụ thu phòng đơn.</span>
              </li>
              <li class="flex items-center space-x-2 bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-all">
                <i class="fas fa-utensils text-green-500"></i>
                <span>Ăn uống theo chương trình, 4 bữa sáng Buffet khách sạn, 07 bữa ăn chính.</span>
              </li>
              <li class="flex items-center space-x-2 bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-all">
                <i class="fas fa-ticket-alt text-green-500"></i>
                <span>Vé tham quan một lần các điểm có trong chương trình.</span>
              </li>
              <li class="flex items-center space-x-2 bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-all">
                <i class="fas fa-gift text-green-500"></i>
                <span>Quà tặng : Nón du lịch.</span>
              </li>
              <li class="flex items-center space-x-2 bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-all">
                <i class="fas fa-tint text-green-500"></i>
                <span>Nước phục vụ hàng ngày, tiêu chuẩn 01 chai trên xe và 01 chai tại khách sạn.</span>
              </li>
              <li class="flex items-center space-x-2 bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-all">
                <i class="fas fa-shield-alt text-green-500"></i>
                <span>Bảo hiểm du lịch quốc tế.</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg">
          <div id="service-exclude" class="space-y-4">
            <h3 class="text-xl font-bold text-red-600 mb-4 border-b pb-2">Dịch vụ không bao gồm: </h3>
            <ul class="text-gray-600 space-y-3">
              <li class="flex items-center space-x-2 bg-red-50 p-3 rounded-lg hover:bg-red-100 transition-all">
                <i class="fas fa-passport text-red-500"></i>
                <span>Hộ chiếu hợp lệ còn thời hạn là 06 tháng so với ngày về của tour.</span>
              </li>
              <li class="flex items-center space-x-2 bg-red-50 p-3 rounded-lg hover:bg-red-100 transition-all">
                <i class="fas fa-map-marked text-red-500"></i>
                <span>Chi phí tham quan ngoài chương trình và các chi phí cá nhân khác.</span>
              </li>
              <li class="flex items-center space-x-2 bg-red-50 p-3 rounded-lg hover:bg-red-100 transition-all">
                <i class="fas fa-hand-holding-usd text-red-500"></i>
                <span>Phí TIP cho HDV và lái xe tại Thái Lan là 5 USD/ngày/người. </span>
              </li>
              <li class="flex items-center space-x-2 bg-red-50 p-3 rounded-lg hover:bg-red-100 transition-all">
                <i class="fas fa-file-alt text-red-500"></i>
                <span>Visa nhập cảnh Việt Nam (35 USD/khách) đối với khách Việt Kiều hoặc khách nước ngoài. </span>
              </li>
              <li class="flex items-center space-x-2 bg-red-50 p-3 rounded-lg hover:bg-red-100 transition-all">
                <i class="fas fa-door-closed text-red-500"></i>
                <span>Phụ thu phòng đơn : 90 USD/khách.</span>
              </li>
              <li class="flex items-center space-x-2 bg-red-50 p-3 rounded-lg hover:bg-red-100 transition-all">
                <i class="fas fa-percentage text-red-500"></i>
                <span>Phí VAT.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Add this at the end of your template, just before closing </template> -->
  <div v-if="showBookingForm" 
       class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 motion-scale-in-[0.5] motion-translate-x-in-[-66%] motion-translate-y-in-[65%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate"
       @click.self="closeBookingForm">
    <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-4 transform transition-all duration-300 max-h-[80vh] overflow-y-auto"
         :class="{'scale-100 opacity-100': showBookingForm, 'scale-95 opacity-0': !showBookingForm}">
      <!-- Header -->
      <div class="flex justify-between items-center mb-3">
        <h3 class="text-xl font-bold text-gray-800">Đặt Tour</h3>
        <button @click="closeBookingForm" 
                class="text-gray-400 hover:text-gray-600 transition-colors">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>

      <!-- Form Content -->
      <div class="space-y-3">
        <!-- Date Selection -->
        <div>
          <label class="block text-gray-700 text-sm font-medium mb-1">Ngày khởi hành</label>
          <input type="date" 
                 v-model="selectedDate"
                 :min="tour.startDate"
                 class="w-full border border-gray-300 rounded-lg p-1.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
        </div>

        <!-- Travelers Selection -->
        <div>
          <label class="block text-gray-700 text-sm font-medium mb-1">Số lượng khách</label>
          
          <!-- Adults -->
          <div class="flex justify-between items-center bg-gray-50 p-2 rounded-lg mb-1.5">
            <div>
              <p class="font-medium text-sm">Người lớn <span class="text-xs text-gray-500">(>12)</span></p>
            </div>
            <div class="flex items-center space-x-2">
              <button @click="adultCount = Math.max(1, adultCount - 1)"
                      class="w-6 h-6 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center justify-center transition-colors">
                <i class="fas fa-minus text-xs"></i>
              </button>
              <span class="w-6 text-center font-medium text-sm">{{ adultCount }}</span>
              <button @click="adultCount++"
                      class="w-6 h-6 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center justify-center transition-colors">
                <i class="fas fa-plus text-xs"></i>
              </button>
            </div>
          </div>

          <!-- Children -->
          <div class="flex justify-between items-center bg-gray-50 p-2 rounded-lg mb-1.5">
            <div>
              <p class="font-medium text-sm">Trẻ em <span class="text-xs text-gray-500">(2-11)</span></p>
            </div>
            <div class="flex items-center space-x-2">
              <button @click="childCount = Math.max(0, childCount - 1)"
                      class="w-6 h-6 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center justify-center transition-colors">
                <i class="fas fa-minus text-xs"></i>
              </button>
              <span class="w-6 text-center font-medium text-sm">{{ childCount }}</span>
              <button @click="childCount++"
                      class="w-6 h-6 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center justify-center transition-colors">
                <i class="fas fa-plus text-xs"></i>
              </button>
            </div>
          </div>

          <!-- Infants -->
          <div class="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
            <div>
              <p class="font-medium text-sm">Em bé <span class="text-xs text-gray-500">(<2)</span></p>
            </div>
            <div class="flex items-center space-x-2">
              <button @click="infantCount = Math.max(0, infantCount - 1)"
                      class="w-6 h-6 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center justify-center transition-colors">
                <i class="fas fa-minus text-xs"></i>
              </button>
              <span class="w-6 text-center font-medium text-sm">{{ infantCount }}</span>
              <button @click="infantCount++"
                      class="w-6 h-6 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center justify-center transition-colors">
                <i class="fas fa-plus text-xs"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Price Summary -->
        <div class="bg-blue-50 p-2 rounded-lg space-y-0.5 text-xs">
          <div class="flex justify-between">
            <span class="text-gray-600">Người lớn x {{ adultCount }}</span>
            <span>{{ formatPrice(tour.pricing.adult.discounted * adultCount) }}</span>
          </div>
          <div v-if="childCount > 0" class="flex justify-between">
            <span class="text-gray-600">Trẻ em x {{ childCount }}</span>
            <span>{{ formatPrice(tour.pricing.child.discounted * childCount) }}</span>
          </div>
          <div v-if="infantCount > 0" class="flex justify-between">
            <span class="text-gray-600">Em bé x {{ infantCount }}</span>
            <span>{{ formatPrice(tour.pricing.infant.discounted * infantCount) }}</span>
          </div>
          <div class="border-t border-blue-200 mt-1 pt-1 flex justify-between font-bold text-sm">
            <span>Tổng cộng</span>
            <span class="text-blue-600">{{ formatPrice(calculateTotal()) }}</span>
          </div>
        </div>

        <!-- Confirm Button -->
        <button @click="confirmBooking" 
                class="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 font-medium flex items-center justify-center space-x-2 text-sm">
          <i class="fas fa-check-circle"></i>
          <span>Xác nhận đặt tour</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Define tour data first
const tour = ref({
  title: 'Amazing Thailand Tour',
  images: [
    
    'https://vietnamnomad.com/wp-content/uploads/2020/09/Quy-Nhon-Travel-Guide-Vietnamnomad.jpg',
    'https://th.bing.com/th/id/OIP.U0Wq7WNY-diohPSiD74I_gHaE8?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.YDStDQz-Re5mFnhJgC_jvgHaE8?rs=1&pid=ImgDetMain',
  ],
  duration: '3 days 2 nights',
  startDate: '2024-07-15',  
  startTime: '08:00 AM',
  seatsLeft: 8,
  departureLocation: 'Ho Chi Minh City',
  pricing: {
    adult: {
      original: 1899,
      discounted: 1499
    },
    child: {
      original: 1399,
      discounted: 999
    },
    infant: {
      original: 399,
      discounted: 299
    }
  }
})

// Carousel state and methods
const currentImageIndex = ref(0)

const nextImage = () => {
  if (currentImageIndex.value < tour.value.images.length - 1) {
    currentImageIndex.value++
  } else {
    currentImageIndex.value = 0
  }
}

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  } else {
    currentImageIndex.value = tour.value.images.length - 1
  }
}

const setImage = (index) => {
  currentImageIndex.value = index
}

// Booking form state
const showBookingForm = ref(false)
const selectedDate = ref('')
const adultCount = ref(1)
const childCount = ref(0)
const infantCount = ref(0)

// Methods
const handleBooking = () => {
  showBookingForm.value = true
}

const closeBookingForm = () => {
  showBookingForm.value = false
}

const calculateTotal = () => {
  return (
    adultCount.value * tour.value.pricing.adult.discounted +
    childCount.value * tour.value.pricing.child.discounted +
    infantCount.value * tour.value.pricing.infant.discounted
  )
}

const confirmBooking = () => {
  alert('Booking confirmed!')
  closeBookingForm()
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  }
  return new Date(dateString).toLocaleDateString('vi-VN', options)
}

const toggleDetails = (dayId) => {
  const element = document.getElementById(dayId)
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden')
    element.classList.add('block')
  } else {
    element.classList.add('hidden')
    element.classList.remove('block')
  }
}
</script>

<style scoped>
.scale-100 {
  transform: scale(1);
}

.scale-95 {
  transform: scale(0.95);
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

/* Optional: Add smooth transitions for the tour schedule toggles */
.hidden {
  display: none;
}

.block {
  display: block;
}

[id^="day"] {
  transition: all 0.3s ease-in-out;
}
</style>