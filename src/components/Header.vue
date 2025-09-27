<script>
export default {
  name: 'Header',
  methods: {
    navigateToPage(page) {
      this.$router.push(`/${page}`);
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <!-- Hero Section -->
      <div class="text-center mb-8 sm:mb-12">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight px-2">
          🚀 Web Performance Optimization
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
          Learn how to optimize your website for better performance, faster loading times, and improved user experience.
        </p>
      </div>

      <!-- Navigation Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <!-- Pictures Card -->
        <div 
          @click="navigateToPage('pictures')"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
        >
          <div class="h-40 sm:h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center relative overflow-hidden">
            <img 
              alt="Image Optimization" 
              class="absolute inset-0 w-full h-full object-cover opacity-100" 
              src="/imageopt.jpg" 
            />
          </div>
          <div class="p-4 sm:p-6">
            <h4 class="font-semibold text-gray-900 mb-2">Pictures & Images</h4>
            <p class="text-gray-600 text-sm mb-4">
              Learn how to compress, resize, and optimize images for faster loading times.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">WebP</span>
              <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Lazy Loading</span>
              <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Compression</span>
            </div>
          </div>
        </div>

        <!-- Videos Card -->
        <div 
          @click="navigateToPage('videos')"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
        >
          <div class="h-40 sm:h-48 bg-gradient-to-br from-red-500 to-pink-600 rounded-t-lg flex items-center justify-center relative overflow-hidden">
            <img 
              alt="Video Optimization" 
              class="absolute inset-0 w-full h-full object-cover opacity-100" 
              src="/videoopt.jpg" 
            />
          </div>
          <div class="p-4 sm:p-6">
            <h4 class="font-semibold text-gray-900 mb-2">Videos & Media</h4>
            <p class="text-gray-600 text-sm mb-4">
              Optimize video delivery, formats, and loading strategies for better performance.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">MP4</span>
              <span class="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Streaming</span>
              <span class="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Compression</span>
            </div>
          </div>
        </div>

        <!-- Fonts Card -->
        <div 
          @click="navigateToPage('fonts')"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
        >
          <div class="h-40 sm:h-48 bg-gradient-to-br from-green-500 to-teal-600 rounded-t-lg flex items-center justify-center relative overflow-hidden">
            <img 
              alt="Font Optimization" 
              class="absolute inset-0 w-full h-full object-cover opacity-100" 
              src="/fontsopt.jpg" 
            />
          </div>
          <div class="p-4 sm:p-6">
            <h4 class="font-semibold text-gray-900 mb-2">Fonts & Typography</h4>
            <p class="text-gray-600 text-sm mb-4">
              Optimize web fonts for faster loading and better rendering performance.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">WOFF2</span>
              <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Preload</span>
              <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Fallbacks</span>
            </div>
          </div>
        </div>

        <!-- JavaScript Card -->
        <div 
          @click="navigateToPage('javascript')"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
        >
          <div class="h-40 sm:h-48 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-t-lg flex items-center justify-center relative overflow-hidden">
            <img 
              alt="JavaScript Optimization" 
              class="absolute inset-0 w-full h-full object-cover opacity-100" 
              src="/jsopt.jpg" 
            />
          </div>
          <div class="p-4 sm:p-6">
            <h4 class="font-semibold text-gray-900 mb-2">JavaScript & CSS</h4>
            <p class="text-gray-600 text-sm mb-4">
              Minimize, bundle, and optimize JavaScript and CSS for better performance.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Minification</span>
              <span class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Tree Shaking</span>
              <span class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Bundling</span>
            </div>
          </div>
        </div>

        <!-- Performance Card -->
        <div 
          @click="navigateToPage('performance')"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
        >
          <div class="h-40 sm:h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-t-lg flex items-center justify-center relative overflow-hidden">
            <img 
              alt="Performance Optimization" 
              class="absolute inset-0 w-full h-full object-cover opacity-100" 
              src="/performopt.jpg" 
            />
          </div>
          <div class="p-4 sm:p-6">
            <h4 class="font-semibold text-gray-900 mb-2">Performance Metrics</h4>
            <p class="text-gray-600 text-sm mb-4">
              Monitor and analyze your website's performance with key metrics.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded">Core Vitals</span>
              <span class="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded">Lighthouse</span>
              <span class="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded">Analytics</span>
            </div>
          </div>
        </div>       
      </div>
    </div>
  </div>
</template>
