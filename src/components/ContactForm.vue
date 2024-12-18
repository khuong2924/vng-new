<template>
  <form class="space-y-6" @submit.prevent="handleSubmit">
    <div class="transform hover:scale-105 transition-all duration-300">
      <label class="block text-gray-700 mb-2 font-semibold" for="name">
        <i class="fas fa-user mr-2"></i>Họ tên
      </label>
      <input type="text" 
             id="name" 
             v-model="formData.name"
             class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300" 
             required>
    </div>
    <div class="transform hover:scale-105 transition-all duration-300">
      <label class="block text-gray-700 mb-2 font-semibold" for="email">
        <i class="fas fa-envelope mr-2"></i>Email
      </label>
      <input type="email" 
             id="email" 
             v-model="formData.email"
             class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300" 
             required>
    </div>
    <div class="transform hover:scale-105 transition-all duration-300">
      <label class="block text-gray-700 mb-2 font-semibold" for="message">
        <i class="fas fa-comment mr-2"></i>Nội dung
      </label>
      <textarea id="message" 
                v-model="formData.message"
                rows="4" 
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300" 
                required></textarea>
    </div>
    <button type="submit" 
            class="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
      <i class="fas fa-paper-plane"></i>
      <span>Gửi</span>
    </button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
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
    handleSubmit() {
      this.$emit('submit', this.formData)
      // Reset form after submission
      this.formData = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script> 