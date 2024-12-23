<template>
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 w-full h-full">
        <div class="relative h-full w-full">
          <div class="motion-preset-pop absolute inset-0 transition-all duration-1000 ease-in-out" id="mainImageContainer">
            <img :src="currentImage.src" 
                 :alt="currentImage.alt" 
                 class="w-full h-full object-cover transition-all duration-700 ease-in-out transform scale-100 opacity-100"
                 :class="{ 'opacity-0 scale-105': isTransitioning }" 
                 id="mainImage">
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
        </div>
      </div>
      <div class="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-4 px-4 py-4">
        <button @click="navigateImages('prev')" class="bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div class="flex space-x-4 overflow-x-auto scroll-smooth" id="imageScroller">
          <img v-for="(image, index) in images" 
               :key="index"
               :src="image.src" 
               :alt="image.alt" 
               class="w-24 h-16 object-cover rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 border-2 border-transparent hover:border-white" 
               @click="changeMainImage(image)">
        </div>
        <button @click="navigateImages('next')" class="bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSlider',
    data() {
      return {
        images: [
          { src: 'https://images.unsplash.com/photo-1528127269322-539801943592', alt: 'Vietnam Landscape 1' },
          { src: 'https://i.pinimg.com/736x/2f/f2/98/2ff298557e1c70edeaa44887dcda9c5c.jpg', alt: 'Vietnam Landscape 2' },
          { src: 'https://i.pinimg.com/736x/fc/94/12/fc94123c91b63e453980abd64b2925cd.jpg', alt: 'Vietnam Landscape 3' },
          { src: 'https://i.pinimg.com/736x/96/9d/1c/969d1cd1ab6fc0e168d0a3105519ea7e.jpg', alt: 'Vietnam Landscape 4' }
        ],
        currentImage: { src: '', alt: '' },
        isTransitioning: false
      }
    },
    mounted() {
      this.currentImage = this.images[0]
    },
    methods: {
      changeMainImage(newImage) {
        this.isTransitioning = true
        setTimeout(() => {
          this.currentImage = newImage
          this.isTransitioning = false
        }, 500)
      },
      navigateImages(direction) {
        const currentIndex = this.images.findIndex(img => img.src === this.currentImage.src)
        let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
  
        if (newIndex >= this.images.length) newIndex = 0
        if (newIndex < 0) newIndex = this.images.length - 1
  
        this.changeMainImage(this.images[newIndex])
      }
    }
  }
  </script>
  
  <style scoped>
  /* Custom styles for transitions */
  .motion-preset-pop {
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }
  </style>
  