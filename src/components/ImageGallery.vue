<template>
  <section class="py-16 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="(image, index) in images" 
          :key="index"
          :class="['relative group overflow-hidden rounded-xl shadow-lg', image.containerClass]"
          data-aos="fade-up"
          :data-aos-delay="200 * index"
        >
          <img 
            :src="image.src" 
            :alt="image.alt"
            :class="['transform transition-transform duration-500 group-hover:scale-110', image.imageClass]"
          >
          <div :class="['absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end', image.overlayClass]">
            <div class="p-6 text-white">
              <h3 class="text-xl font-bold mb-2">{{ image.title }}</h3>
              <p class="text-sm opacity-90">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageGallery',
  data() {
    return {
      images: [
        {
          src: '/src/assets/bg/lkh1.jpg',
          alt: 'Gallery Image 1',
          title: 'Lịch khởi hành 1',
          description: 'Khám phá hành trình mới',
          containerClass: 'first-image-container hover:shadow-xl',
          imageClass: 'w-full h-auto object-contain first-image',
          overlayClass: 'first-image-overlay'
        },
        {
          src: '/src/assets/bg/lkh2.jpg',
          alt: 'Gallery Image 2',
          title: 'Lịch khởi hành 2',
          description: 'Trải nghiệm độc đáo',
          containerClass: 'second-image-container hover:shadow-2xl',
          imageClass: 'w-full h-auto object-contain second-image',
          overlayClass: 'second-image-overlay'
        },
        {
          src: '/src/assets/bg/lkh3.jpg',
          alt: 'Gallery Image 3',
          title: 'Lịch khởi hành 3',
          description: 'Điểm đến hấp dẫn',
          containerClass: 'third-image-container hover:shadow-lg',
          imageClass: 'w-full h-auto object-contain third-image',
          overlayClass: 'third-image-overlay'
        }
      ]
    }
  }
}
</script>

<style>
/* First Image Styles */
.first-image-container {
  @apply bg-blue-50;
}

.first-image {
  @apply hover:brightness-75;
}

.first-image-overlay {
  @apply from-blue-900/50;
}

/* Second Image Styles */
.second-image-container {
  @apply bg-purple-50;
}

.second-image {
  @apply hover:brightness-75;
}

.second-image-overlay {
  @apply from-purple-900/50;
}

/* Third Image Styles */
.third-image-container {
  @apply bg-green-50;
}

.third-image {
  @apply hover:brightness-75;
}

.third-image-overlay {
  @apply from-green-900/50;
}

/* Common hover effect */
.group:hover img {
  @apply brightness-90;
}
</style> 