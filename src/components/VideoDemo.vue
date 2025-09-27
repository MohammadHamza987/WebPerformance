<script>
export default {
  name: "VideoDemo",
  data() {
    return {
      loadingStats: {
        before: {
          fileSize: "25.4 MB",
          loadTime: "8.2s",
          format: "MP4 (H.264)",
          bitrate: "8 Mbps",
          quality: "1080p",
          compression: "Low",
          buffering: "Frequent",
          performance: "Poor"
        },
        after: {
          fileSize: "3.1 MB",
          loadTime: "1.1s", 
          format: "WebM (VP9)",
          bitrate: "1.2 Mbps",
          quality: "1080p",
          compression: "High",
          buffering: "Minimal",
          performance: "Excellent"
        }
      },
      simulateLoading: false,
      loadingProgress: 0
    };
  },
  methods: {
    simulateSlowLoading() {
      this.simulateLoading = true;
      this.loadingProgress = 0;
      
      const interval = setInterval(() => {
        this.loadingProgress += Math.random() * 15;
        if (this.loadingProgress >= 100) {
          this.loadingProgress = 100;
          this.simulateLoading = false;
          clearInterval(interval);
        }
      }, 300);
    },
    restartDemo() {
      this.simulateSlowLoading();
    },
    handleVideoAutoplay() {
      // Ensure video autoplays when component loads
      this.$nextTick(() => {
        const video = this.$el.querySelector('.optimized-video');
        if (video) {
          video.play().catch(e => {
            console.log('Autoplay prevented by browser:', e);
          });
        }
      });
    }
  },
  mounted() {
    this.simulateSlowLoading();
    this.handleVideoAutoplay();
  }
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-6 sm:py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-2">🎬 Video Optimization Demo</h1>
        <p class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Compare unoptimized vs optimized video performance
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
                <p class="text-gray-600">Loading large video...</p>
                <div class="w-64 bg-gray-200 rounded-full h-2 mt-2">
                  <div class="bg-red-600 h-2 rounded-full transition-all duration-300" :style="{ width: loadingProgress + '%' }"></div>
                </div>
                <p class="text-sm text-gray-500 mt-1">{{ Math.round(loadingProgress) }}%</p>
              </div>
            </div>

            <!-- Place your BEFORE videos here -->
            <video class="w-full h-64 object-cover" controls :class="{ 'blur-sm': simulateLoading }">
              <source src="/videobefore.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
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
              <li> Large file size (25MB+)</li>
              <li> Single format compatibility</li>
              <li> No compression optimization</li>
              <li> No Auto Play or loop</li>
            </ul>
          </div>
        </div>

        <!-- After Section -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-green-600"> After (Fast)</h2>
            <div class="text-sm text-gray-500">
              Ready
            </div>
          </div>

          <div class="relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
            <!-- Place your AFTER videos here -->
            <video 
              class="w-full h-64 object-cover optimized-video" 
              controls 
              preload="metadata" 
              muted 
              autoplay 
              loop
              poster="../../public/imageweb.webp"
            >
              <source src="/videoafter.webm" type="video/webm"/>
              Your browser does not support HTML5 video.
            </video>
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
              <li> 87% smaller file size</li>
              <li> Modern WebM format</li>
              <li> Applied Image until video loading</li>
              <li> Applied Auto Play and loop</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Restart Demo Button -->
      <div class="text-center">
        <button 
          @click="restartDemo" 
          class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
        >
           Restart Demo
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
