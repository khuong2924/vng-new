<template>
    <div class="bg-gradient-to-r from-gray-50 to-gray-100">
      <header-component></header-component>
      
      <main class="pt-16">   
      </main>
  
      <site-footer></site-footer>
    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/Header.vue'
  import AOS from 'aos'
  import 'aos/dist/aos.css'
  
  export default {
    name: 'App',
    components: {
      HeaderComponent,
    },
    mounted() {
      AOS.init()
    }
  }
  </script>
  
  <style>
  #app {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  </style>
  