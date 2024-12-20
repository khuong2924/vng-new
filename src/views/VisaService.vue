<template>
  <div class="bg-gray-100 font-sans">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img id="hero-image" src="../assets/visa-cover.jpg" alt="Travel Visa" class="w-full h-full object-cover">
      </div>
    
    </section>

    <!-- Countries Supported Section -->
    <section class="py-4">
      <div class="container mx-auto px-16 flex flex-wrap items-center">
        <div id="countries-supported" class="w-full lg:w-2/5 mb-0 lg:mb-4">
          <div class="relative bg-cover bg-center rounded-lg p-24 shadow-lg transform transition duration-500 hover:scale-105 overflow-hidden h-[210px]" 
               :style="{ backgroundImage: `url(${getImageUrl()})`, backgroundSize: '115%', backgroundRepeat: 'no-repeat' }">
            <!-- Content -->
            <div class="relative z-2 text-white mr-32 mt-0">

              <div id="countries-supported-count" class="text-7xl ml-4 font-extrabold mb-4">
                <span class="bg-gradient-to-r from-blue-500 via-cyan-300 to-gray-300 inline-block text-transparent bg-clip-text drop-shadow-lg">{{ count }}+</span>
              </div>
              <p id="countries-supported-text" class="ml-4 text-2lg font-medium tracking-wide w-64">
                <span class="motion-preset-typewriter-[24] bg-gradient-to-r from-blue-500 via-cyan-300 to-gray-300 inline-block text-transparent bg-clip-text drop-shadow-lg">quốc gia được hỗ trợ</span>
              </p>
            </div>
          </div>
        </div>
        <div id="slider-countries" class="w-full lg:w-2/5 ml-32">
          <swiper
            :modules="[SwiperEffectCoverflow, SwiperPagination, SwiperAutoplay]"
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :coverflowEffect="{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }"
            :pagination="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            class="mySwiper"
          >
            <swiper-slide v-for="(slide, index) in slides" :key="index">
              <img :src="slide.img" :alt="slide.alt" class="w-full h-64 object-cover rounded-lg shadow-md">
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <!-- Combined Price List and FAQ Section -->
    <section class="py-4 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row lg:space-x-8">
          <!-- Price List Section (70%) -->
          <div class="w-full lg:w-[60%] mb-8 lg:mb-0">
            <h2 id="visa-price-list-title" class="text-3xl font-bold mb-6 text-center py-4">
              <span class="bg-gradient-to-r from-blue-900 via-cyan-900 to-gray-900 inline-block text-transparent bg-clip-text drop-shadow-lg text-5xl leading-relaxed">Bảng giá VISA</span>
            </h2>
            <div class="overflow-x-auto">
              <table class="w-full bg-white shadow-xl rounded-lg overflow-hidden">
                <thead class="bg-custom-gradient text-black">
                  <tr>
                    <th class="py-3 px-4 text-left">Country</th>
                    <th class="py-3 px-4 text-left">Visa Type</th>
                    <th class="py-3 px-4 text-left">Review Time</th>
                    <th class="py-3 px-4 text-left">Reference Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-200 hover:bg-gray-50 transition duration-300">
                    <td class="py-3 px-4">
                      <div class="flex items-center">
                        <img src="https://flagcdn.com/w40/us.png" alt="USA" class="w-6 h-4 mr-2">
                        USA
                      </div>
                    </td>
                    <td class="py-3 px-4">Tourist</td>
                    <td class="py-3 px-4">3-5 business days</td>
                    <td class="py-3 px-4">$160</td>
                  </tr>
                  <tr class="border-b border-gray-200 hover:bg-gray-50 transition duration-300">
                    <td class="py-3 px-4">
                      <div class="flex items-center">
                        <img src="https://flagcdn.com/w40/jp.png" alt="Japan" class="w-6 h-4 mr-2">
                        Japan
                      </div>
                    </td>
                    <td class="py-3 px-4">Business</td>
                    <td class="py-3 px-4">5-7 business days</td>
                    <td class="py-3 px-4">$80</td>
                  </tr>
                  <tr class="border-b border-gray-200 hover:bg-gray-50 transition duration-300">
                    <td class="py-3 px-4">
                      <div class="flex items-center">
                        <img src="https://flagcdn.com/w40/fr.png" alt="France" class="w-6 h-4 mr-2">
                        France
                      </div>
                    </td>
                    <td class="py-3 px-4">Schengen</td>
                    <td class="py-3 px-4">10-15 business days</td>
                    <td class="py-3 px-4">$80</td>
                  </tr>
                  <tr class="hover:bg-gray-50 transition duration-300">
                    <td class="py-3 px-4">
                      <div class="flex items-center">
                        <img src="https://flagcdn.com/w40/au.png" alt="Australia" class="w-6 h-4 mr-2">
                        Australia
                      </div>
                    </td>
                    <td class="py-3 px-4">eVisitor</td>
                    <td class="py-3 px-4">1-2 business days</td>
                    <td class="py-3 px-4">$100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- FAQ Section -->
          <div class="w-full lg:w-[40%]">
            <div id="faq-content" class="bg-custom-gradient p-6 rounded-lg h-full">
              <h3 class="text-2xl text-center font-bold mb-4">Giải đáp mọi thắc mắc của bạn về dịch vụ Visa</h3>
              <p class="text-lg text-center mb-4">Với đội ngũ nhân viên dày dặn kinh nghiệm, VNGroup Travel sẽ giải đáp toàn bộ thắc mắc của bạn về Visa</p>
              
                <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                 
                  <button 
                    id="register"
                    @click="openModal"
                    class="bg-white text-blue-600 font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-50 flex items-center justify-center space-x-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Kiểm tra tỉ lệ đậu</span>
                  </button>
                </div>
                <div class="flex flex-col mt-4 md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">

                <button 
                    id="check-pass-rate"
                    @click="openModal"
                    class="bg-white text-blue-600 font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-50 flex items-center justify-center space-x-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Đăng ký tư vấn</span>
                  </button>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto text-center  px-4">
        <h2 id="workflow-title" class="tex-center text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-900 via-cyan-900 to-gray-900 inline-block text-transparent bg-clip-text drop-shadow-lg leading-relaxed">Quy trình làm việc nhanh gọn</h2>
        <div class="flex flex-wrap justify-center">
          <div v-for="(step, index) in workflowSteps" :key="index" class="w-full md:w-1/2 lg:w-1/4 p-4">
            <div class="bg-white rounded-lg p-6 shadow-lg text-center bg-custom-gradient transform transition duration-500 hover:scale-105">
              <div :id="`lottie-${step.id}`" class="w-24 h-24 mx-auto mb-4"></div>
              <h3 class="text-xl font-semibold mb-2">{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div 
      id="check-pass-rate-modal"
      v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      :class="{
        'animate__animated animate__fadeIn': isModalOpen,
        'animate__animated animate__fadeOut': !isModalOpen
      }"
      @click.self="closeModal"
    >
      <div
        class="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto animate__animated animate__zoomIn"
      >
        <h2 class="text-3xl font-bold mb-6 text-center text-blue-600 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Kiểm tra tỉ lệ đậu
        </h2>
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Select country -->
          <div class="bg-blue-50 p-4 rounded-lg scale-hover">
            <label class="block text-lg font-medium text-blue-700 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Chọn quốc gia bạn muốn xin visa
            </label>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="radio" v-model="formData.country" name="country" value="usa" class="form-radio text-blue-600">
                <span class="ml-2">USA</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.country" name="country" value="canada" class="form-radio text-blue-600">
                <span class="ml-2">Canada</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.country" name="country" value="uk" class="form-radio text-blue-600">
                <span class="ml-2">UK</span>
              </label>
            </div>
          </div>

          <!-- Marital status -->
          <div class="bg-purple-50 p-4 rounded-lg scale-hover">
            <label class="block text-lg font-medium text-purple-700 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Tình trạng hôn nhân của bạn
            </label>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="radio" v-model="formData.maritalStatus" name="marital_status" value="single" class="form-radio text-purple-600">
                <span class="ml-2">Độc thân</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.maritalStatus" name="marital_status" value="married" class="form-radio text-purple-600">
                <span class="ml-2">Kết hôn</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.maritalStatus" name="marital_status" value="divorced" class="form-radio text-purple-600">
                <span class="ml-2">Góa chồng/vợ</span>
              </label>
            </div>
          </div>

          <!-- Place of birth in province -->
          <div class="bg-green-50 p-4 rounded-lg scale-hover">
            <label class="block text-lg font-medium text-green-700 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Nơi sinh bạn ở các tỉnh: Thanh Hóa, Hà Tĩnh, Quảng Trị, ...
            </label>
            <label class="flex items-center">
              <input type="checkbox" v-model="formData.birthInProvince" name="birth_in_province" class="form-checkbox text-green-600">
              <span class="ml-2">Đúng</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" v-model="formData.birthInProvince" name="birth_in_province" class="form-checkbox text-green-600">
              <span class="ml-2">Sai</span>
            </label>
          </div>

          <!-- International travel history -->
          <div class="bg-yellow-50 p-4 rounded-lg scale-hover">
            <label class="block text-lg font-medium text-yellow-700 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Lịch sử du lịch quốc tế của bạn là gì?
            </label>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.travelHistory" value="europe" class="form-checkbox text-yellow-600">
                <span class="ml-2">Du lịch các nước Đông Nam Á</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.travelHistory" value="asia" class="form-checkbox text-yellow-600">
                <span class="ml-2">Du lịch Trung Quốc</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.travelHistory" value="americas" class="form-checkbox text-yellow-600">
                <span class="ml-2">Du lịch các nước Châu Á</span>
              </label>
            </div>
          </div>

          <!-- Visa rejections -->
          <div class="bg-red-50 p-4 rounded-lg scale-hover">
            <label class="block text-lg font-medium text-red-700 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Bạn đã từng bị từ chối Visa lần nào chưa?
            </label>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="radio" v-model="formData.visaRejections" name="visa_rejections" value="0" class="form-radio text-red-600">
                <span class="ml-2">Chưa</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.visaRejections" name="visa_rejections" value="1-2" class="form-radio text-red-600">
                <span class="ml-2">1-2 lần</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.visaRejections" name="visa_rejections" value="3+" class="form-radio text-red-600">
                <span class="ml-2">nhiều hơn 3 lần</span>
              </label>
            </div>
          </div>

          <!-- Current job -->
          <div class="bg-indigo-50 p-4 rounded-lg scale-hover">
            <label class="block text-lg font-medium text-indigo-700 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Công việc hiện tại của bạn là gì?
            </label>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="radio" v-model="formData.currentJob" name="current_job" value="employed" class="form-radio text-indigo-600">
                <span class="ml-2">
                  Kinh doanh tự do</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.currentJob" name="current_job" value="self-employed" class="form-radio text-indigo-600">
                <span class="ml-2">Nhân viên (có Bảo hiểm xã hội)</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.currentJob" name="current_job" value="student" class="form-radio text-indigo-600">
                <span class="ml-2">Nhân viên (không có Bảo hiểm xã hội)</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.currentJob" name="current_job" value="unemployed" class="form-radio text-indigo-600">
                <span class="ml-2">Không có việc làm</span>
              </label>
            </div>
          </div>

          <!-- Average income -->
          <div class="bg-pink-50 p-4 rounded-lg scale-hover">
            <label class="block text-lg font-medium text-pink-700 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Thu nhập trung bình hàng tháng của bạn:
            </label>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="radio" v-model="formData.averageIncome" name="average_income" value="low" class="form-radio text-pink-600">
                <span class="ml-2">Thu nhập trên 50 triệu</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.averageIncome" name="average_income" value="medium" class="form-radio text-pink-600">
                <span class="ml-2">Thu nhập từ 20-50 triệu</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.averageIncome" name="average_income" value="high" class="form-radio text-pink-600">
                <span class="ml-2">Thu nhập dưới 20 triệu</span>
              </label>
            </div>
          </div>

          <!-- Financial ability -->
          <div class="bg-teal-50 p-4 rounded-lg scale-hover">
            <label class="block text-lg font-medium text-teal-700 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Thông tin khả năng tài chính, tài sản của bạn
            </label>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="radio" v-model="formData.financialAbility" name="financial_ability" value="low" class="form-radio text-teal-600">
                <span class="ml-2">Giấy tờ nhà đất (sổ hồng, sổ đỏ, hợp đồng mua bán)</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.financialAbility" name="financial_ability" value="medium" class="form-radio text-teal-600">
                <span class="ml-2">
                  Sổ tiết kiệm trên 200 triệu</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.financialAbility" name="financial_ability" value="high" class="form-radio text-teal-600">
                <span class="ml-2">Sổ tiết kiệm dưới 200 triệu</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.financialAbility" name="financial_ability" value="high" class="form-radio text-teal-600">
                <span class="ml-2">Không có tài sản, tài chính</span>
              </label>
            </div>
          </div>

          <!-- Personal Information -->
          <div class="space-y-4 bg-gray-50 p-4 rounded-lg scale-hover">
            <h3 class="text-lg font-medium text-gray-700 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Điền thông tin của bạn
            </h3>
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Tên của bạn</label>
              <input type="text" id="name" v-model="formData.name" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-300">
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
              <input type="tel" id="phone" v-model="formData.phone" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-300">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" v-model="formData.email" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-300">
            </div>
          </div>

          <!-- Submit button -->
          <div class="flex justify-center">
            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Nhận kết quả</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
// Import visa images
import visa1 from '../assets/img/visa1.jpg';
import visa2 from '../assets/img/visa2.jpg'; 
import visa3 from '../assets/img/visa3.jpg';
// Update this import to use URL
import visaImage from '../assets/visa-card.jpg';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import lottie from 'lottie-web'
import 'animate.css'
export default {
  name: 'VisaService',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const isModalOpen = ref(false)
    const count = ref(0)
    const formData = ref({
      country: '',
      maritalStatus: '',
      birthInProvince: false,
      travelHistory: [],
      visaRejections: '',
      currentJob: '',
      averageIncome: '',
      financialAbility: '',
      name: '',
      phone: '',
      email: ''
    })
    
    const faqs = ref([
      {
        question: 'What documents do I need for a visa application?',
        answer: 'The required documents vary depending on the country and visa type. Generally, you\'ll need a valid passport, passport-sized photos, proof of funds, travel itinerary, and accommodation details.',
        isOpen: false
      },
      // Add more FAQs here
    ])

    const workflowSteps = ref([
      {
        id: 'receive',
        title: '1. Nhận thông tin và tư vấn',
        description: 'Gather all necessary details and provide expert advice'
      },
      {
        id: 'profile',
        title: '2. Bổ sung và hoàn thiện hồ sơ',
        description: 'Add and complete customer profile'
      },
      {
        id: 'review',
        title: '3. Hoàn tất Visa và kiểm duyệt',
        description: 'Complete visa application and send to the review department'
      },
      {
        id: 'results',
        title: '4. Gửi kết quả đến khách hàng',
        description: 'Send results to customers and complete the process'
      }
    ])

    const slides = [
      { img: visa1, alt: 'USA' },
      { img: visa2, alt: 'Japan' },
      { img: visa3, alt: 'France' },
      { img: visa2, alt: 'Australia' }
    ]

    const toggleFaq = (index) => {
      faqs.value[index].isOpen = !faqs.value[index].isOpen
    }

    const openModal = () => {
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
    }

    const submitForm = () => {
      console.log('Form submitted:', formData.value)
      alert('Form submitted successfully!')
      closeModal()
    }

    const initializeLottie = () => {
      const animationUrls = {
        receive: 'https://assets2.lottiefiles.com/packages/lf20_u25cckyh.json',
        profile: 'https://assets2.lottiefiles.com/packages/lf20_khzniaya.json',
        review: '../src/components/icons/review-gif.json',
        results: 'https://assets2.lottiefiles.com/packages/lf20_9wpyhdzo.json'
      }

      Object.entries(animationUrls).forEach(([key, url]) => {
        lottie.loadAnimation({
          container: document.getElementById(`lottie-${key}`),
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: url
        })
      })
    }

    const handleConsultation = () => {
      // Handle consultation registration
      console.log('Register for consultation clicked')
      // Add your consultation registration logic here
    }

    const getImageUrl = () => {
      return new URL(`../assets/visa-card.jpg`, import.meta.url).href
    }

    onMounted(() => {
      initializeLottie()
      
      // Counter animation
      const interval = setInterval(() => {
        if (count.value < 195) count.value++
      }, 20)

      return () => clearInterval(interval)
    })

    return {
      isModalOpen,
      count,
      formData,
      faqs,
      workflowSteps,
      toggleFaq,
      submitForm,
      handleConsultation,
      // Swiper modules
      SwiperEffectCoverflow: EffectCoverflow,
      SwiperPagination: Pagination,
      SwiperAutoplay: Autoplay,
      openModal,
      closeModal,
      slides,
      getImageUrl,
    }
  }
}

</script>

<style scoped>
.custom-shape-divider-bottom-1627023629 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1627023629 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
  transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1627023629 .shape-fill {
  fill: #FFFFFF;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

:deep(.swiper-pagination-bullet) {
  background: white;
}

:deep(.swiper-pagination-bullet-active) {
  background: #3B82F6;
}

/* Add the float animation */
/* @keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.float {
  animation: float 3s ease-in-out infinite;
} */

.scale-hover:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

/* Add any additional styles needed */
</style> 