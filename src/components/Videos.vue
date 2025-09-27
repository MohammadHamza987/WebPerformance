<script>
export default {
  name: 'Videos',
  methods: {
    goToDemo() {
      this.$router.push('/video-demo')
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-6 sm:py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-8 sm:mb-12">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight px-2">
          Video Optimization Techniques
        </h1>
        <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
          These are the most effective video optimization methods used to improve website performance, 
          reduce loading time, and enhance user experience.
        </p>

        <!-- Interactive Demo Button -->
        <button
          @click="goToDemo"
          class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 
                 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 text-sm sm:text-base"
        >
          🚀 Try Interactive Video Demo
        </button>
      </div>

      <!-- Techniques Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        <!-- Progressive Enhancement -->
        <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-2xl sm:text-3xl mb-3">🔄</div>
          <h3 class="font-bold text-gray-900 mb-2 text-sm sm:text-base">Progressive Enhancement</h3>
          <p class="text-xs sm:text-sm text-gray-600">
            Provide multiple video formats (MP4, WebM) for better browser support and performance.
          </p>
        </div>

        <!-- Replace GIF -->
        <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-2xl sm:text-3xl mb-3">🎞️</div>
          <h3 class="font-bold text-gray-900 mb-2">Replace GIF with HTML5 Video</h3>
          <p class="text-sm text-gray-600">
            Use HTML5 video instead of GIFs as they are smaller, streamable, and better optimized.
          </p>
        </div>

        <!-- Responsive Poster -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-3xl mb-3">🖼️</div>
          <h3 class="font-bold text-gray-900 mb-2">Responsive Poster</h3>
          <p class="text-sm text-gray-600">
            Display a lightweight placeholder image until the video loads completely.
          </p>
        </div>

        <!-- Streaming -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-3xl mb-3">📡</div>
          <h3 class="font-bold text-gray-900 mb-2">Streaming</h3>
          <p class="text-sm text-gray-600">
            Enable streaming so videos load progressively instead of waiting for full download.
          </p>
        </div>

        <!-- Remove Audio -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-3xl mb-3">🔇</div>
          <h3 class="font-bold text-gray-900 mb-2">Remove Audio</h3>
          <p class="text-sm text-gray-600">
            Eliminate unnecessary audio tracks to reduce file size and improve performance.
          </p>
        </div>

        <!-- Platform Based Dimensions -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-3xl mb-3">📱💻</div>
          <h3 class="font-bold text-gray-900 mb-2">Platform Based Dimensions</h3>
          <p class="text-sm text-gray-600">
            Serve video in different resolutions based on device screen size for better UX.
          </p>
        </div>

        <!-- Preload Metadata -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-3xl mb-3">⚡</div>
          <h3 class="font-bold text-gray-900 mb-2">Preload Metadata</h3>
          <p class="text-sm text-gray-600">
            Use <code>preload="metadata"</code> to load only essential info before playback, saving bandwidth.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Component styles can be added here if needed */
</style>
