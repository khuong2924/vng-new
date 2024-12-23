<template>
  <div class="transform hover:scale-105 transition-all duration-300">
    <label class="block text-[#10b981] mb-2 font-semibold">
      <i :class="['fas', `fa-${icon}`, 'mr-2']"></i>{{ label }}
    </label>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full px-4 py-3 border-2 border-[#10b981] rounded-lg focus:outline-none focus:border-[#10b981] transition-colors duration-300"
      required
    >
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    label: String,
    type: String,
    icon: String,
    modelValue: String
  },
  emits: ['update:modelValue']
}
</script> 