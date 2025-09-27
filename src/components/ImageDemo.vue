<script>
export default {
  name: "ImageDemo",
  data() {
    return {
      loadingStats: {
        before: {
          fileSize: "4.2 MB",
          loadTime: "6.8s",
          format: "PNG",
          resolution: "4000×3000",
          compression: "None",
          quality: "Lossless",
          performance: "Poor",
          bandwidth: "High"
        },
        after: {
          fileSize: "180 KB",
          loadTime: "0.4s", 
          format: "WebP",
          resolution: "1920×1440",
          compression: "Smart",
          quality: "Optimized",
          performance: "Excellent",
          bandwidth: "Low"
        }
      },
      simulateLoading: false,
      loadingProgress: 0,
      isLoaded: false,
      showBlurEffect: true
    };
  },
  methods: {
    simulateSlowLoading() {
      this.simulateLoading = true;
      this.loadingProgress = 0;
      
      const interval = setInterval(() => {
        this.loadingProgress += Math.random() * 8;
        if (this.loadingProgress >= 100) {
          this.loadingProgress = 100;
          this.simulateLoading = false;
          clearInterval(interval);
        }
      }, 400);
    },
    restartDemo() {
      this.simulateSlowLoading();
    }
  },
  mounted() {
    this.simulateSlowLoading();
  }
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-6 sm:py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-2">📸 Image Optimization Demo</h1>
        <p class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Compare unoptimized vs optimized image performance
        </p>
      </div>

      <!-- Before/After Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
        <!-- Before Section -->
        <div class="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <div class="flex items-center justify-between mb-4 sm:mb-6">
            <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-red-600">❌ Before (Slow)</h2>
            <div class="text-xs sm:text-sm text-gray-500">
              {{ simulateLoading ? 'Loading...' : 'Ready' }}
            </div>
          </div>

          <div class="relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
            <div
              v-if="simulateLoading"
              class="absolute inset-0 bg-gray-200 flex items-center justify-center z-10"
            >
              <div class="text-center">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                <p class="text-gray-600">Loading large image...</p>
                <div class="w-64 bg-gray-200 rounded-full h-2 mt-2">
                  <div class="bg-red-600 h-2 rounded-full transition-all duration-300" :style="{ width: loadingProgress + '%' }"></div>
                </div>
                <p class="text-sm text-gray-500 mt-1">{{ Math.round(loadingProgress) }}%</p>
              </div>
            </div>

            <!-- Place your BEFORE images here -->
            <img 
              src="/image2.png" 
              alt="Unoptimized image" 
              class="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
              :class="{ 'blur-sm': simulateLoading }"
            />
          </div>

          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">File Size:</span>
              <span class="text-red-600 font-semibold">{{ loadingStats.before.fileSize }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Load Time:</span>
              <span class="text-red-600 font-semibold">{{ loadingStats.before.loadTime }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Format:</span>
              <span class="text-red-600 font-semibold">{{ loadingStats.before.format }}</span>
            </div>
          </div>

          <div class="mt-4 p-3 bg-red-50 rounded-lg">
            <h3 class="font-semibold text-red-700 mb-2">Issues:</h3>
            <ul class="text-sm text-red-600 space-y-1">
              <li>• Large file size (4MB+)</li>
              <li>• No compression optimization</li>
              <li>• PNG format (not optimized)</li>
              <li>• Slow loading on mobile networks</li>
            </ul>
          </div>
        </div>

        <!-- After Section -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-green-600">✅ After (Fast)</h2>
            <div class="text-sm text-gray-500">
              Ready
            </div>
          </div>

          <div class="relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
            <!-- Place your AFTER images here -->
            <img 
              src="../../public/imageweb.webp" 
              alt="Optimized image" 
              class="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">File Size:</span>
              <span class="text-green-600 font-semibold">{{ loadingStats.after.fileSize }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Load Time:</span>
              <span class="text-green-600 font-semibold">{{ loadingStats.after.loadTime }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Format:</span>
              <span class="text-green-600 font-semibold">{{ loadingStats.after.format }}</span>
            </div>
          </div>

          <div class="mt-4 p-3 bg-green-50 rounded-lg">
            <h3 class="font-semibold text-green-700 mb-2">Optimizations:</h3>
            <ul class="text-sm text-green-600 space-y-1">
              <li>• 95% smaller file size</li>
              <li>• Modern WebP format</li>
              <li>• Smart compression</li>
              <li>• Fast loading on all devices</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Restart Demo Button -->
      <div class="text-center">
        <button 
          @click="restartDemo" 
          class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
        >
          🔄 Restart Demo
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.transition-all {
  transition: all 0.3s ease;
}
</style>
