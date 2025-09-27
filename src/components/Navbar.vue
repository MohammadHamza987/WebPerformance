<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<template>
  <nav class="bg-blue-900 text-white p-4 shadow-lg sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <router-link 
        to="/" 
        class="text-2xl font-bold"
      >
        Web Performance
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6">
        <router-link 
          to="/"
          class="relative pb-1 font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Home
        </router-link>
        <router-link 
          to="/pictures"
          class="relative pb-1 font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Image Optimization
        </router-link>
        <router-link 
          to="/videos"
          class="relative pb-1 font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Video Optimization
        </router-link>
        <router-link 
          to="/fonts"
          class="relative pb-1 font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Fonts Optimization
        </router-link>
        <router-link 
          to="/javascript"
          class="relative pb-1 font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          JavaScript Optimization
        </router-link>
        <router-link 
          to="/about"
          class="relative pb-1 font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          About
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMobileMenu"
        class="md:hidden bg-blue-600 px-3 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path :class="{'hidden': mobileMenuOpen, 'inline-flex': !mobileMenuOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path :class="{'hidden': !mobileMenuOpen, 'inline-flex': mobileMenuOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div :class="{'block': mobileMenuOpen, 'hidden': !mobileMenuOpen}" class="md:hidden mt-4 pb-4">
      <div class="flex flex-col space-y-3">
        <router-link 
          to="/"
          @click="closeMobileMenu"
          class="block px-3 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors"
        >
          Home
        </router-link>
        <router-link 
          to="/pictures"
          @click="closeMobileMenu"
          class="block px-3 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors"
        >
          Image Optimization
        </router-link>
        <router-link 
          to="/videos"
          @click="closeMobileMenu"
          class="block px-3 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors"
        >
          Video Optimization
        </router-link>
        <router-link 
          to="/fonts"
          @click="closeMobileMenu"
          class="block px-3 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors"
        >
          Fonts Optimization
        </router-link>
        <router-link 
          to="/javascript"
          @click="closeMobileMenu"
          class="block px-3 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors"
        >
          JavaScript Optimization
        </router-link>
        <router-link 
          to="/about"
          @click="closeMobileMenu"
          class="block px-3 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors"
        >
          About
        </router-link>
      </div>
    </div>
  </nav>
</template>
