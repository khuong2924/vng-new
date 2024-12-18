<template>
  <div class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
    <div class="bg-white rounded-xl max-w-2xl w-full mx-4 relative overflow-hidden" data-aos="zoom-in">
      <button @click="$emit('close')" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10 transform hover:rotate-180 transition-all duration-300">
        <i class="fas fa-times text-2xl"></i>
      </button>
      <div class="relative h-[600px]">
        <div class="h-full">
          <div class="schedule-images relative h-full">
            <img v-for="(image, index) in scheduleImages" 
                 :key="index"
                 :src="image.src"
                 :alt="image.alt"
                 :class="['w-full h-full object-contain absolute schedule-image transition-all duration-700 transform hover:scale-110', 
                         { 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }]">
          </div>
          <button @click="prevImage" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-4 rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-lg hover:scale-110">
            <i class="fas fa-chevron-left text-3xl text-blue-600"></i>
          </button>
          <button @click="nextImage" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-4 rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-lg hover:scale-110">
            <i class="fas fa-chevron-right text-3xl text-blue-600"></i>
          </button>
          <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-6 py-3 rounded-full text-white text-lg font-bold">
            <span>{{ currentIndex + 1 }}/{{ scheduleImages.length }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleModal',
  emits: ['close'],
  data() {
    return {
      currentIndex: 0,
      scheduleImages: [
        { src: '/src/assets/bg/lkh1.jpg', alt: 'Schedule 1' },
        { src: '/src/assets/bg/lkh2.jpg', alt: 'Schedule 2' },
        { src: '/src/assets/bg/lkh3.jpg', alt: 'Schedule 3' }
      ]
    }
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.scheduleImages.length
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.scheduleImages.length) % this.scheduleImages.length
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    handleKeydown(e) {
      if (e.key === 'ArrowRight') this.nextImage()
      if (e.key === 'ArrowLeft') this.prevImage()
      if (e.key === 'Escape') this.$emit('close')
    }
  }
}
</script>

<style scoped>
.schedule-image {
  transition: opacity 0.5s ease-in-out;
}
</style> 