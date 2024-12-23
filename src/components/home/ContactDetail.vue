<template>
  <div class="flex items-center p-4 bg-blue-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
    <i :class="['fas', `fa-${icon}`, 'text-2xl', 'text-[#10b981]', 'mr-4']"></i>
    <div>
      <h4 class="font-semibold text-[#10b981]">{{ title }}</h4>
      <p class="text-gray-600">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactDetail',
  props: {
    icon: String,
    title: String,
    text: String
  }
}
</script> 