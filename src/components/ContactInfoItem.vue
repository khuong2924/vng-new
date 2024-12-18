<template>
  <div class="flex items-center p-4 bg-blue-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
    <i :class="['fas', icon, 'text-2xl text-blue-600 mr-4']"></i>
    <div>
      <h4 class="font-semibold text-gray-800">{{ title }}</h4>
      <p class="text-gray-600">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactInfoItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script> 