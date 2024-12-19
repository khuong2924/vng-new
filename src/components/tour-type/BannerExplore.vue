<template>
  <section id="banner-and-explore-moments" class="py-12 bg-white">
    <div class="mx-auto px-2" style="max-width: 95%;">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Banner Swiper - Updated width -->
        <div id="banner-swiper" class="w-full md:w-8/12">
          <div class="swiper mySwiper rounded-lg overflow-hidden h-full" data-aos="fade-right">
            <div class="swiper-wrapper h-full">
              <div class="swiper-slide h-full" v-for="(image, index) in bannerImages" :key="index">
                <img :src="image.src" :alt="image.alt" class="w-full h-[400px] object-cover">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <!-- Explore Moments - Updated width -->
        <div id="explore-moments" class="w-full md:w-4/12 relative" data-aos="fade-left">
          <div class="relative w-full h-[400px]">
            <img src="https://i.pinimg.com/736x/18/00/b2/1800b2508bcc8553d79fcd7a0fb57a2e.jpg" 
                 alt="Explore Moments" 
                 class="absolute inset-0 w-full h-full object-cover rounded-lg">
            
            <div class="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        
            <div class="absolute bottom-4 left-0 right-0 flex flex-col justify-center items-center text-center text-white z-10">
              <h3 class="text-xl font-bold mb-3 text-shadow-lg animate__animated animate__fadeInUp gradient-text">
                Explore Moments
              </h3>
              <button @click="exploreMoments" 
                      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mx-auto relative overflow-hidden group">
                <span class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <i class="fas fa-camera-retro mr-2 relative z-10"></i>
                <span class="relative z-10">Explore {{ displayedMoments }}+ Moments</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import { Swiper } from 'swiper'
import { Pagination } from 'swiper/modules'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export default {
  name: 'BannerExplore',    
  data() {
    return {
      bannerImages: [
        { src: 'https://i.pinimg.com/736x/45/85/70/45857057981d48c1a63e2b9a11539f16.jpg', alt: 'Tour 1' },
        { src: 'https://i.pinimg.com/736x/9d/a5/16/9da5160cee7b4b3b47ab6e69f274dfbf.jpg', alt: 'Tour 2' },
        { src: 'https://i.pinimg.com/736x/2d/c4/de/2dc4de01a14d85983308680437d90021.jpg', alt: 'Tour 3' }
      ],
      displayedMoments: 0,
      totalMoments: 150
    }
  },
  mounted() {
    this.initSwiper()
    this.animateMomentsCounter()
  },
  methods: {
    initSwiper() {
      const swiper = new Swiper('.mySwiper', {
        modules: [Pagination, Autoplay],
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })
    },
    exploreMoments() {
      console.log('Exploring moments...')
    },
    animateMomentsCounter() {
      const duration = 2000
      const interval = 20
      const increment = Math.ceil(this.totalMoments / (duration / interval))
      const timer = setInterval(() => {
        this.displayedMoments = Math.min(this.displayedMoments + increment, this.totalMoments)
        if (this.displayedMoments >= this.totalMoments) {
          clearInterval(timer)
        }
      }, interval)
    }
  }
}
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(45deg, #3b82f6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-shadow-lg {
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
</style> 