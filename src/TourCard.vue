<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <img :src="tour.image" :alt="tour.title" class="w-full h-48 object-cover" />
    <div class="p-6">
      <h3 class="text-lg font-semibold text-gray-900">{{ tour.title }}</h3>
      <p class="mt-2 text-sm text-gray-600">{{ tour.description }}</p>
      <div class="mt-4 flex items-center">
        <span class="text-sm text-gray-500">{{ tour.duration }}</span>
        <span class="mx-2 text-gray-400">|</span>
        <div class="flex items-center">
          <StarIcon class="h-5 w-5 text-yellow-400" />
          <span class="ml-1 text-sm text-gray-600">{{ tour.rating }}</span>
        </div>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <span class="text-lg font-bold text-gray-900">${{ tour.price }}</span>
        <button
            @click="$emit('book', tour.id)"
            class="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Book Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from 'lucide-vue-next'

defineProps({
  tour: {
    type: Object,
    required: true
  }
})

defineEmits(['book'])
</script>

