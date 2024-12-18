<template>
  <section class="py-20 bg-gradient-to-b from-gray-100 to-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="bg-white p-8 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300" 
             data-aos="fade-right" 
             data-aos-duration="1000">
          <h3 class="text-3xl font-bold mb-8 text-blue-600 flex items-center">
            <i class="fas fa-address-card mr-3"></i>Thông tin liên hệ
          </h3>
          <div class="space-y-6">
            <contact-info-item 
              v-for="item in contactInfo" 
              :key="item.id"
              :icon="item.icon"
              :title="item.title"
              :content="item.content"
            />
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300" 
             data-aos="fade-left" 
             data-aos-duration="1000">
          <h3 class="text-3xl font-bold mb-8 text-blue-600 flex items-center">
            <i class="fas fa-paper-plane mr-3"></i>Liên hệ với chúng tôi
          </h3>
          <contact-form @submit="handleSubmit" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactInfoItem from './ContactInfoItem.vue'
import ContactForm from './ContactForm.vue'

export default {
  name: 'ContactSection',
  components: {
    ContactInfoItem,
    ContactForm
  },
  data() {
    return {
      contactInfo: [
        {
          id: 1,
          icon: 'fa-map-marker-alt',
          title: 'Địa chỉ',
          content: '93/8 Phạm Văn Hai, Phường 3, Quận Tân Bình, VietNam'
        },
        {
          id: 2,
          icon: 'fa-phone-alt',
          title: 'Phone',
          content: '08 1800 2728'
        },
        {
          id: 3,
          icon: 'fa-envelope',
          title: 'Email',
          content: 'vngrouptourist@gmail.com'
        }
      ]
    }
  },
  methods: {
    handleSubmit(formData) {
      // Handle form submission
      console.log('Form submitted:', formData)
    }
  }
}
</script> 