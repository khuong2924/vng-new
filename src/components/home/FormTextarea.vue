<template>
  <div class="transform hover:scale-105 transition-all duration-300">
    <label class="block text-[#10b981] mb-2 font-semibold">
      <i :class="['fas', `fa-${icon}`, 'mr-2']"></i>{{ label }}
    </label>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      rows="4"
      class="w-full px-4 py-3 border-2 border-[#10b981] rounded-lg focus:outline-none transition-colors duration-300"
      required
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'FormTextarea',
  props: {
    label: String,
    icon: String,
    modelValue: String
  },
  emits: ['update:modelValue']
}
</script> 