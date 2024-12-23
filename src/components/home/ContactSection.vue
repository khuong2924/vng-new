<template>
  <section class="py-20 bg-gradient-to-b from-gray-100 to-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="bg-white p-8 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300" data-aos="fade-right" data-aos-duration="1000">
          <h3 class="text-3xl font-bold mb-8 text-[#10b981] flex items-center">
            <i class="fas fa-address-card mr-3"></i>Thông tin liên hệ
          </h3>
          <div class="space-y-6">
            <!-- Contact details -->
            <ContactDetail icon="map-marker-alt" title="Địa chỉ" text="93/8 Phạm Văn Hai, Phường 3, Quận Tân Bình, VietNam" />
            <ContactDetail icon="phone-alt" title="Phone" text="08 1800 2728" />
            <ContactDetail icon="envelope" title="Email" text="vngrouptourist@gmail.com" />
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300" data-aos="fade-left" data-aos-duration="1000">
          <h3 class="text-3xl font-bold mb-8 text-[#10b981] flex items-center">
            <i class="fas fa-paper-plane mr-3"></i>Liên hệ với chúng tôi
          </h3>
          <form @submit.prevent="submitForm" class="space-y-6">
            <FormInput label="Họ tên" type="text" icon="user" v-model="formData.name" />
            <FormInput label="Email" type="email" icon="envelope" v-model="formData.email" />
            <FormTextarea color="text-[#10b981]" label="Nội dung" icon="comment" v-model="formData.message" />
            <button type="submit" class="w-full bg-custom-gradient text-white py-4 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <i class="fas fa-paper-plane"></i>
              <span>Gửi</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactDetail from './ContactDetail.vue'
import FormInput from './FormInput.vue'
import FormTextarea from './FormTextarea.vue'

export default {
  name: 'ContactSection',
  components: {
    ContactDetail,
    FormInput,
    FormTextarea
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.formData)
    }
  }
}
</script>