<template>
  <div id="scheduleModal" class="fixed inset-0 bg-black bg-opacity-75 z-50 hidden flex items-center justify-center">
    <div class="bg-white rounded-xl max-w-2xl w-full mx-4 relative overflow-hidden" data-aos="zoom-in">
      <!-- Modal content -->
      <button @click="closeModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10 transform hover:rotate-180 transition-all duration-300">
        <i class="fas fa-times text-2xl"></i>
      </button>
      <div class="relative h-[600px]">
        <div class="h-full">
          <div class="schedule-images relative h-full">
            <img v-for="(image, index) in images" 
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
            <span>{{ currentIndex + 1 }}</span>/<span>{{ images.length }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleModal',
  data() {
    return {
      currentIndex: 0,
      images: [
        { src: 'img/bg/lkh1.jpg', alt: 'Schedule 1' },
        { src: 'img/bg/lkh2.jpg', alt: 'Schedule 2' },
        { src: 'img/bg/lkh3.jpg', alt: 'Schedule 3' }
      ]
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    }
  }
}
</script>