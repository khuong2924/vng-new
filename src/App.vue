<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Awesome Tours</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TourCard
                v-for="tour in tours"
                :key="tour.id"
                :tour="tour"
                @book="bookTour"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TourCard from './TourCard.vue'

const tours = ref([
  {
    id: 1,
    title: 'Paris City Tour',
    description: 'Explore the beautiful city of Paris, including the Eiffel Tower, Louvre, and Notre-Dame.',
    price: 99,
    duration: '3 days',
    rating: 4.8,
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 2,
    title: 'London Adventure',
    description: 'Discover the history and culture of London, visiting Big Ben, Tower Bridge, and Buckingham Palace.',
    price: 89,
    duration: '4 days',
    rating: 4.6,
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 3,
    title: 'Tokyo Express',
    description: 'Experience the vibrant city of Tokyo, exploring Shibuya, Asakusa, and trying delicious sushi.',
    price: 129,
    duration: '5 days',
    rating: 4.9,
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 4,
    title: 'New York City Excursion',
    description: 'Visit the Big Apple and see Times Square, Central Park, and the Statue of Liberty.',
    price: 109,
    duration: '4 days',
    rating: 4.7,
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 5,
    title: 'Rome Historical Tour',
    description: 'Step back in time and explore the Colosseum, Roman Forum, and Vatican City.',
    price: 119,
    duration: '5 days',
    rating: 4.8,
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 6,
    title: 'Barcelona Beach & Culture',
    description: 'Enjoy the beaches of Barcelona and marvel at Gaudi\'s architectural wonders.',
    price: 99,
    duration: '4 days',
    rating: 4.5,
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 7,
    title: 'Amsterdam Canal Tour',
    description: 'Cruise the canals of Amsterdam and visit the Van Gogh Museum and Anne Frank House.',
    price: 89,
    duration: '3 days',
    rating: 4.6,
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 8,
    title: 'Sydney Harbour Experience',
    description: 'Explore Sydney\'s famous harbour, Opera House, and enjoy the beautiful Bondi Beach.',
    price: 139,
    duration: '5 days',
    rating: 4.7,
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 9,
    title: 'Dubai Desert Safari',
    description: 'Experience the luxury of Dubai and embark on an exciting desert safari adventure.',
    price: 149,
    duration: '4 days',
    rating: 4.8,
    image: '/placeholder.svg?height=200&width=300'
  }
])

const bookTour = (tourId) => {
  console.log(`Booking tour with id: ${tourId}`)
  // Implement booking logic
  alert(`Tour ${tourId} booked successfully!`)
}
</script>
