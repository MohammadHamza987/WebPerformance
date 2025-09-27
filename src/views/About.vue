<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      <!-- Hero Section -->
      <div class="text-center mb-8 sm:mb-12">
        <h1 class="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight px-2">
          ℹ️ About This Demo
        </h1>
        <p class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
          Learn more about this web performance optimization demo and the techniques used to build it.
        </p>
      </div>

      <!-- About Content -->
      <div class="max-w-4xl mx-auto">
        <!-- Project Overview -->
        <div class="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
            <span class="mr-2 sm:mr-3">🚀</span>
            Project Overview
          </h2>
          <p class="text-gray-600 mb-4 leading-relaxed">
            This web performance optimization demo showcases various techniques and best practices 
            for creating fast, efficient, and user-friendly websites. Built with modern web technologies, 
            it demonstrates how to optimize different aspects of web development including images, videos, 
            fonts, and JavaScript.
          </p>
          <p class="text-gray-600 leading-relaxed">
            The demo is designed to be educational and practical, providing real-world examples 
            that developers can apply to their own projects to improve website performance and user experience.
          </p>
        </div>

        <!-- Technologies Used -->
        <div class="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
            <span class="mr-2 sm:mr-3">🛠️</span>
            Technologies Used
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-800">Frontend</h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Vue.js 3</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Vue Router</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Tailwind CSS</span>
                <span class="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">Vite</span>
              </div>
            </div>
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-800">Optimization</h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Image Optimization</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Lazy Loading</span>
                <span class="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">Code Splitting</span>
                <span class="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Minification</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Features -->
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span class="mr-3">✨</span>
            Key Features
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="flex items-start">
                <span class="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 class="font-semibold text-gray-800">Image Optimization</h4>
                  <p class="text-gray-600 text-sm">WebP format, lazy loading, responsive images</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 class="font-semibold text-gray-800">Video Optimization</h4>
                  <p class="text-gray-600 text-sm">Efficient codecs, streaming, compression</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 class="font-semibold text-gray-800">Font Optimization</h4>
                  <p class="text-gray-600 text-sm">Web fonts, preloading, fallback strategies</p>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex items-start">
                <span class="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 class="font-semibold text-gray-800">JavaScript Optimization</h4>
                  <p class="text-gray-600 text-sm">Tree shaking, minification, code splitting</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 class="font-semibold text-gray-800">Performance Monitoring</h4>
                  <p class="text-gray-600 text-sm">Core Web Vitals, Lighthouse metrics</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 class="font-semibold text-gray-800">Responsive Design</h4>
                  <p class="text-gray-600 text-sm">Mobile-first approach, adaptive layouts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  <!-- Learning Objectives -->
  <div class="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span class="mr-3">🎯</span>
            Learning Objectives
          </h2>
          <div class="space-y-4">
            <p class="text-gray-600 leading-relaxed">
              By exploring this demo, you'll learn how to:
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">→</span>
                Optimize images for faster loading and better user experience
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">→</span>
                Implement efficient video delivery strategies
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">→</span>
                Optimize web fonts and typography performance
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">→</span>
                Minimize and optimize JavaScript and CSS
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">→</span>
                Monitor and measure website performance
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">→</span>
                Apply modern web development best practices
              </li>
            </ul>
          </div>
        </div>
        <div class="text-center mt-8">
          <span>This web performance optimization demo is made with ❤️ by <a href="https://mohammadhamza-portfolio.netlify.app/" target="_blank" class="text-blue-500">Mohammad Hamza</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = 'About - Web Performance Optimization'
  }
}
</script>