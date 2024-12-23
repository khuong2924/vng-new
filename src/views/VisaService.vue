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
          <div class="relative rounded-lg p-24 shadow-lg transform transition duration-500 hover:scale-105 h-[330px]">
            <!-- Background image div - removed overflow-hidden -->
            <div class="absolute inset-0 z-0 w-full h-full">
              <img 
                :src="getImageUrl()"
                alt="Visa Card" 
                class="w-full h-full object-cover object-center rounded-lg"
              >
            </div>
            
            <!-- Content -->
            <div class="relative z-2 text-white mr-32 ml-20 mt-20">

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
            :modules="modules"
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
                    class="bg-white text-[#10b981] font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-50 flex items-center justify-center space-x-2"
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
                    class="bg-white text-[#10b981] font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-50 flex items-center justify-center space-x-2"
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


    <section class="py-16 bg-white">
        <div class="container text-center mx-auto px-4" data-aos="fade-up">
          <h2 id="reason-title" class="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-900 via-cyan-900 to-gray-900 inline-block text-transparent bg-clip-text drop-shadow-lg leading-relaxed">Hãy để chúng tôi lo liệu mọi thứ, bạn chỉ cần chuẩn bị hành lý và sẵn sàng cho chuyến đi của mình!</h2>
            <div class="max-w-3xl mx-auto">
                <div id="reason-content" class="mb-4">
                    <button 
                        @click="toggleFAQ" 
                        class="flex justify-between items-center w-full p-4 bg-custom-gradient rounded-lg focus:outline-none transition duration-300 hover:bg-green-300"
                    >
                        <span class="text-lg font-semibold">Lý do nên chọn dịch vụ VISA - VNGroup Tourist</span>
                        <i :class="{'ri-arrow-up-s-line': open, 'ri-arrow-down-s-line': !open}" class="text-2xl"></i>
                    </button>
                    
                    <transition
                        enter-active-class="transition ease-out duration-300"
                        enter-from-class="opacity-0 transform scale-95"
                        enter-to-class="opacity-100 transform scale-100"
                        leave-active-class="transition ease-in duration-300"
                        leave-from-class="opacity-100 transform scale-100"
                        leave-to-class="opacity-0 transform scale-95"
                    >
                    <div id="reason-content"
                        v-show="open"
                        class="mt-4 p-6 bg-gradient-to-br from-white to-gray-50 rounded-lg text-left shadow-lg border border-gray-100"
                    >
                        <!-- Reason 1 -->
                        <div class="mb-6 transform transition duration-500 hover:scale-105">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <div class="p-3 bg-blue-100 rounded-full">
                                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold mb-2 text-gray-800">Đội ngũ chuyên nghiệp</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        Với đội ngũ nhân viên visa giàu kinh nghiệm, được đào tạo các kỹ năng, kiến thức và nhiều năm kinh nghiệm trong lĩnh vực visa - VNGroup Tourist tự hào là đơn vị cung cấp dịch vụ làm visa du lịch uy tín.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Reason 2 -->
                        <div class="mb-6 transform transition duration-500 hover:scale-105">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <div class="p-3 bg-green-100 rounded-full">
                                        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold mb-2 text-gray-800">Nhanh chóng & Tiết kiệm</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        Nhờ vào sự tận tâm và am hiểu sâu sắc về thủ tục xin visa, chúng tôi cam kết mang đến cho quý khách hàng dịch vụ làm visa nhanh chóng, tiết kiệm thời gian và chi phí, đồng thời đảm bảo tỷ lệ đậu visa cao nhất.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Reason 3 -->
                        <div class="transform transition duration-500 hover:scale-105">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <div class="p-3 bg-purple-100 rounded-full">
                                        <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold mb-2 text-gray-800">Bảo mật & Hỗ trợ</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                      Sự hài lòng của khách hàng luôn là mục tiêu hàng đầu của chúng tôi. Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của quý khách trong suốt quá trình làm hồ sơ. Đồng thời bảo mật thông tin khách hàng một cách tuyệt đối.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </transition>
                </div>


                
                <!-- Add more FAQ items here -->
                <div id="visa-content" class="mb-4">
                  <button 
                      @click="toggleVisaDocs" 
                      class="flex justify-between items-center w-full p-4 bg-custom-gradient rounded-lg focus:outline-none transition duration-300 hover:bg-green-300"
                  >
                      <span id="visa-title" class="text-lg font-semibold">Những gì bạn cần cho Hồ sơ VISA</span>
                      <i :class="{'ri-arrow-up-s-line': open2, 'ri-arrow-down-s-line': !open2}" class="text-2xl"></i>
                  </button>
                  
                  <transition
                      enter-active-class="transition ease-out duration-300"
                      enter-from-class="opacity-0 transform scale-95"
                      enter-to-class="opacity-100 transform scale-100"
                      leave-active-class="transition ease-in duration-300"
                      leave-from-class="opacity-100 transform scale-100"
                      leave-to-class="opacity-0 transform scale-95"
                  >
                      <div
                          v-show="open2"
                          class="mt-4 p-6 bg-gradient-to-br from-white to-gray-50 rounded-lg text-left shadow-lg border border-gray-100"
                      >
                          <div class="mb-6 transform transition duration-500 hover:scale-105">
                              <div class="flex items-start space-x-4">
                                  <div class="flex-shrink-0">
                                  <div class="p-3 bg-green-100 rounded-full">
                                    <img 
                                          src="../assets/img/documents_1548205.png" 
                                          alt="Passport Icon"
                                          class="w-6 h-6"
                                      />
                                  </div>
                                  </div>
                                  <div>
                                  <p class="text-gray-700 leading-relaxed">
                                      Tờ khai xin cấp visa theo mẫu quy định của Đại sứ quán đã được điền đầy đủ thông tin.
                                  </p>
                                  </div>
                              </div>
                          </div>

                          <div class="mb-6 transform transition duration-500 hover:scale-105">
                              <div class="flex items-start space-x-4">
                                  <div class="flex-shrink-0">
                                    <div id="visa-content-info-icon" class="p-3 bg-green-100 rounded-full">
                                      <img 
                                          src="../assets/img/passport_620686.png" 
                                          alt="Passport Icon"
                                          class="w-6 h-6"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                  <p class="text-gray-700 leading-relaxed">
                                      Passport (đã ký tên) còn thời hạn trên 6 tháng và còn ít nhất 3 trang trống.
                                  </p>
                                  </div>
                              </div>
                          </div>

                         
                          <div class="mb-6 transform transition duration-500 hover:scale-105">
                              <div class="flex items-start space-x-4">
                                  <div class="flex-shrink-0">
                                    <div id="visa-content-info-icon" class="p-3 bg-green-100 rounded-full">
                                      <img 
                                          src="../assets/img/resume_3033614.png" 
                                          alt="Passport Icon"
                                          class="w-6 h-6"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                  <p class="text-gray-700 leading-relaxed">
                                    Ảnh chụp trên phông nền trắng, chụp chính diện, khổ hình theo yêu cầu của từng loại visa và tùy vào Đại sứ quán.
                                  </p>
                                  </div>
                              </div>
                          </div>


                          <div class="mb-6 transform transition duration-500 hover:scale-105">
                              <div class="flex items-start space-x-4">
                                  <div class="flex-shrink-0">
                                    <div id="visa-content-info-icon" class="p-3 bg-green-100 rounded-full">
                                      <img 
                                          src="../assets/img/fingerprint_3045910.png" 
                                          alt="Passport Icon"
                                          class="w-6 h-6"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                  <p class="text-gray-700 leading-relaxed">
                                    Những giấy tờ chứng minh tình trạng cá nhân, các mối quan hệ nhân thân, xã hội: Căn cước công dân, Sổ hộ khẩu, Đăng ký kết hôn, Giấy khai sinh,…
                                  </p>
                                  </div>
                              </div>
                          </div>

                          <div class="mb-6 transform transition duration-500 hover:scale-105">
                              <div class="flex items-start space-x-4">
                                  <div class="flex-shrink-0">
                                    <div id="visa-content-info-icon" class="p-3 bg-green-100 rounded-full">
                                      <img 
                                          src="../assets/img/document_2703428.png" 
                                          alt="Passport Icon"
                                          class="w-6 h-6"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                  <p class="text-gray-700 leading-relaxed">
                                    Giấy tờ có thể chứng minh mối quan hệ bạn bè, người thân tại nước bạn muốn đến và giấy tờ xác nhận tình trạng công việc hiện tại của bạn.
                                  </p>
                                  </div>
                              </div>
                          </div>

                          <div class="mb-6 transform transition duration-500 hover:scale-105">
                              <div class="flex items-start space-x-4">
                                  <div class="flex-shrink-0">
                                    <div id="visa-content-info-icon" class="p-3 bg-green-100 rounded-full">
                                      <img 
                                          src="../assets/img/contract_1358615.png" 
                                          alt="Passport Icon"
                                          class="w-6 h-6"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                  <p class="text-gray-700 leading-relaxed">
                                    Giấy tờ chứng minh khả năng tài chính và tài sản: Giấy tờ chủ quyền tài sản (sở hữu nhà đất, cavet xe oto,…), giấy khai báo về thu nhập lợi tức (cổ phiếu, trái phiếu, nhà cho thuê,…), Giấy xác nhận mức lương nếu là nhân viên hoặc Giấy phép kinh doanh nếu là chủ doanh nghiệp,…
                                  </p>
                                  </div>
                              </div>
                          </div>

                          <div class="mb-6 transform transition duration-500 hover:scale-105">
                              <div class="flex items-start space-x-4">
                                  <div class="flex-shrink-0">
                                    <div id="visa-content-info-icon" class="p-3 bg-green-100 rounded-full">
                                      <img 
                                          src="../assets/img/weekly_5242692.png" 
                                          alt="Timmline Icon"
                                          class="w-6 h-6"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                  <p class="text-gray-700 leading-relaxed">
                                    Lịch trình rõ ràng: nêu chi tiết lộ trình chuyến đi và thời gian lưu trú.
                                  </p>
                                  </div>
                              </div>
                          </div>

                          
                          <div class="mb-6 transform transition duration-500 hover:scale-105">
                              <div class="flex items-start space-x-4">
                                  <div class="flex-shrink-0">
                                    <div id="visa-content-info-icon" class="p-3 bg-green-100 rounded-full">
                                      <img 
                                          src="../assets/img/ticket_13415945.png" 
                                          alt="Passport Icon"
                                          class="w-6 h-6"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                  <p class="text-gray-700 leading-relaxed">
                                    Giấy tờ chứng minh đã đặt các dịch vụ khác cho chuyến đi như: Vé máy bay khứ hồi hoặc các loại vé vào cửa tham quan các công trình kiến trúc, vé thăm bảo tàng, vé tham dự hòa nhạc, vé tham dự triển lãm nghệ thuật,…
                                  </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </transition>   
              </div>

              <div id="reason-content" class="mb-4">
                    <button 
                        @click="toggleVisaDocs2" 
                        class="flex justify-between items-center w-full p-4 bg-custom-gradient rounded-lg focus:outline-none transition duration-300 hover:bg-green-300"
                    >
                        <span class="text-lg font-semibold">Lệ phí làm VISA và Thời gian xét duyệt VISA</span>
                        <i :class="{'ri-arrow-up-s-line': open, 'ri-arrow-down-s-line': !open}" class="text-2xl"></i>
                    </button>
                    
                    <transition
                        enter-active-class="transition ease-out duration-300"
                        enter-from-class="opacity-0 transform scale-95"
                        enter-to-class="opacity-100 transform scale-100"
                        leave-active-class="transition ease-in duration-300"
                        leave-from-class="opacity-100 transform scale-100"
                        leave-to-class="opacity-0 transform scale-95"
                    >
                    <div id="reason-content"
                        v-show="open3"
                        class="mt-4 p-6 bg-gradient-to-br from-white to-gray-50 rounded-lg text-left shadow-lg border border-gray-100"
                    >
                        <div class="mb-6 transform transition duration-500 hover:scale-105">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <div class="p-3 bg-green-100 rounded-full">
                                      <img 
                                          src="../assets/img/pay_625599.png" 
                                          class="w-6 h-6"
                                      />
                                    </div>
                                </div>
                                <div>
                                    <p class="text-gray-600 leading-relaxed">
                                      Mức lệ phí mà bạn phải trả được xét theo từng loại Visa và từng Đại sứ quán.                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mb-6 transform transition duration-500 hover:scale-105">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <div class="p-3 bg-green-100 rounded-full">
                                      <img 
                                          src="../assets/img/deadline_14354278.png" 
                                          class="w-6 h-6"
                                      />
                                    </div>
                                </div>
                                <div>
                                    <p class="text-gray-600 leading-relaxed">
                                      Thời gian để xét duyệt một visa của mỗi quốc gia là khác nhau. Tuy nhiên, trong vài trường hợp, thời gian xét duyệt có thể dài hơn dự kiến nếu hồ sơ cần được xác minh thêm.
                                 </p>
                                </div>
                            </div>
                        </div>
                        <!-- Reason 3 -->
                        <div class="transform transition duration-500 hover:scale-105">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <div class="p-3 bg-green-100 rounded-full">
                                      <img 
                                          src="../assets/img/messages_5766603.png" 
                                          class="w-6 h-6"
                                      />
                                    </div>
                                </div>
                                <div>
                                      <p class="text-gray-600 leading-relaxed">
                                      Lời khuyên tốt nhất dành cho bạn là nên hoàn thiện hồ sơ xin visa sớm để đảm bảo cho việc khởi hành đúng lịch trình.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </transition>
                </div>
              
            </div>
        </div>
    </section>

    <!-- Workflow Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto text-center  px-4">
        <h2 id="workflow-title" class="tex-center text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-900 via-cyan-900 to-gray-900 inline-block text-transparent bg-clip-text drop-shadow-lg leading-relaxed">CÁC BƯỚC LÀM VISA TẠI VNGROUP TOURIST</h2>
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
        <h2 class="text-3xl font-bold mb-6 text-center text-[#10b981] flex items-center justify-center">
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
                <span class="ml-2">Mỹ</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.country" name="country" value="canada" class="form-radio text-blue-600">
                <span class="ml-2">Úc</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.country" name="country" value="uk" class="form-radio text-blue-600">
                <span class="ml-2">Hàn quốc</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.country" name="country" value="uk" class="form-radio text-blue-600">
                <span class="ml-2">Các nước châu Âu</span>
              </label>
            </div>
          </div>

          <!-- Marital status -->
          <!-- <div class="bg-purple-50 p-4 rounded-lg scale-hover">
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
          </div> -->

        

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
                <span class="ml-2">Hộ chiếu trắng</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.travelHistory" value="asia" class="form-checkbox text-yellow-600">
                <span class="ml-2">Đã đi 1 nước Đông Nam Á trong 1 năm gần đây</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.travelHistory" value="americas" class="form-checkbox text-yellow-600">
                <span class="ml-2">Đã đi 1 nước Đông Nam Á trên 1 năm</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.travelHistory" value="americas" class="form-checkbox text-yellow-600">
                <span class="ml-2">Đã đi 2-3 nước Đông Nam Á trong 1 năm gần đây</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.travelHistory" value="americas" class="form-checkbox text-yellow-600">
                <span class="ml-2">Đã đi 2-3 nước Đông Nam Á trên 1 năm</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.travelHistory" value="americas" class="form-checkbox text-yellow-600">
                <span class="ml-2">Đã từng đi các nước Đông Nam Á, Nhật, Hàn</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.travelHistory" value="americas" class="form-checkbox text-yellow-600">
                <span class="ml-2">Đã từng đi Hàn, Nhật, Mỹ, Úc, các nước EU</span>
              </label>
            </div>
          </div>


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
                  Công việc tự do (Không chứng minh được công việc)</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.currentJob" name="current_job" value="self-employed" class="form-radio text-indigo-600">
                <span class="ml-2">Công việc tự do (Chứng minh được công việc)</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.currentJob" name="current_job" value="student" class="form-radio text-indigo-600">
                <span class="ml-2">Nhân viên không có sao kê lương, ko có BHXH (nhận lương tiền mặt)</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.currentJob" name="current_job" value="unemployed" class="form-radio text-indigo-600">
                <span class="ml-2">Nhân viên có sao kê lương, có BHXH dưới 06 tháng	</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.currentJob" name="current_job" value="unemployed" class="form-radio text-indigo-600">
                <span class="ml-2">Nhân viên có sao kê lương, có BHXH trên 01 năm</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.currentJob" name="current_job" value="unemployed" class="form-radio text-indigo-600">
                <span class="ml-2">Chủ doanh nghiệp, có đóng thuế VAT trên 01 năm, có sao kê tài khoản công ty</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.currentJob" name="current_job" value="unemployed" class="form-radio text-indigo-600">
                <span class="ml-2">Chủ hộ kinh doanh có đóng thuế VAT dưới 01 năm</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.currentJob" name="current_job" value="unemployed" class="form-radio text-indigo-600">
                <span class="ml-2">Chủ hộ kinh doanh có đóng thuế VAT trên 01 năm</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.currentJob" name="current_job" value="unemployed" class="form-radio text-indigo-600">
                <span class="ml-2">Viên chức nhà nước</span>
              </label>
            </div>
          </div>

          <!-- Average income -->
          <div class="bg-pink-50 p-4 rounded-lg scale-hover">
            <label class="block text-lg font-medium text-pink-700 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Bạn có sổ tiết kiệm không nè?
            </label>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="radio" v-model="formData.averageIncome" name="average_income" value="low" class="form-radio text-pink-600">
                <span class="ml-2"> Không có sổ tiết kiệm</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.averageIncome" name="average_income" value="medium" class="form-radio text-pink-600">
                <span class="ml-2">Sổ tiết kiệm dưới 150tr</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.averageIncome" name="average_income" value="high" class="form-radio text-pink-600">
                <span class="ml-2">Sổ tiết kiệm hơn 200tr</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.averageIncome" name="average_income" value="high" class="form-radio text-pink-600">
                <span class="ml-2">Sổ tiết kiệm hơn 300tr</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.averageIncome" name="average_income" value="high" class="form-radio text-pink-600">
                <span class="ml-2">Sổ tiết kiệm hơn 500tr</span>
              </label>
            </div>
          </div>

          <!-- Financial ability -->
          <div class="bg-teal-50 p-4 rounded-lg scale-hover">
            <label class="block text-lg font-medium text-teal-700 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Vậy còn những tài sản khác thì sao?
            </label>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="radio" v-model="formData.financialAbility" name="financial_ability" value="low" class="form-radio text-teal-600">
                <span class="ml-2">Không có nhà đất</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.financialAbility" name="financial_ability" value="medium" class="form-radio text-teal-600">
                <span class="ml-2">
                  1 nhà đất</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.financialAbility" name="financial_ability" value="high" class="form-radio text-teal-600">
                <span class="ml-2">1 nhà đất + xe hơi</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.financialAbility" name="financial_ability" value="high" class="form-radio text-teal-600">
                <span class="ml-2">2 nhà đất trở lên + xe hơi</span>
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
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import lottie from 'lottie-web'
import 'animate.css'
import visa1 from '../assets/img/visa1.jpg'
import visa2 from '../assets/img/visa2.jpg'
import visa3 from '../assets/img/visa3.jpg'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [EffectCoverflow, Pagination, Autoplay], // Define modules here
      isModalOpen: false,
      count: 0,
      open: false,
      open2: false,
      open3: false,
      open4: false,
      formData: {
        country: '',
        maritalStatus: '',
        travelHistory: [],
        currentJob: '',
        averageIncome: '',
        financialAbility: '',
        name: '',
        phone: '',
        email: ''
      },
      slides: [
        { img: visa1, alt: 'USA' },
        { img: visa2, alt: 'Japan' },
        { img: visa3, alt: 'France' },
        { img: visa2, alt: 'Australia' }
      ],
      workflowSteps: [
        {
          id: 'receive',
          title: '1. Đăng ký',
          description: 'Điền Form thông tin đơn giản, nhanh chóng. Các thông tin được bảo mật một cách tuyệt đối an toàn.'
        },
        {
          id: 'profile',
          title: '2. Tư vấn',
          description: 'Nhân viên sẽ liên hệ lại với bạn trong vòng 4h hoặc liên hệ qua Hotline 096 698 09 37/ Tổng đài miễn phí 1800 6700 '
        },
        {
          id: 'review',
          title: '3. Hoàn thiện hồ sơ',
          description: 'Một nhân viên kinh nghiệm sẽ đồng hành và hỗ trợ bạn trong suốt quá trình hoàn thành hồ sơ'
        },
        {
          id: 'results',
          title: '4. Nhận visa',
          description: 'Bạn sẽ nhận visa trực tiếp tại văn phòng VNGroup Tourist hoặc chuyển phát nhanh đến tận tay.'
        }
      ]
    }
  },
  methods: {
    toggleFAQ() {
      this.open = !this.open
    },
    toggleVisaDocs() {
      this.open2 = !this.open2
    },
    toggleVisaDocs2() {
      this.open3 = !this.open3
    },
    toggleVisaDocs3() {
      this.open4 = !this.open4
    },

    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
    submitForm() {
      console.log('Form submitted:', this.formData)
      alert('Form submitted successfully!')
      this.closeModal()
    },
    getImageUrl(type = 'desktop') {
      if (type === 'mobile') {
        return new URL('../assets/visa-card-mobile.jpg', import.meta.url).href
      }
      return new URL('../assets/visa-card.jpg', import.meta.url).href
    },
    initializeLottie() {
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
  },
  mounted() {
    this.initializeLottie()
    
    // Counter animation
    const interval = setInterval(() => {
      if (this.count < 195) this.count++
    }, 20)

    // Clear interval on component destroy using onBeforeUnmount
    this.$options.beforeUnmount = () => {
      clearInterval(interval)
    }
  },
  // Add beforeUnmount hook
  beforeUnmount() {
    // This will be called when component is about to be destroyed
    if (this.$options.beforeUnmount) {
      this.$options.beforeUnmount()
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