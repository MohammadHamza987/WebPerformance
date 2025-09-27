<script>
export default {
  name: 'Pictures',
  methods: {
    goToDemo() {
      this.$router.push('/image-demo')
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
          Image Optimization Techniques
        </h1>
        <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
          These are the most effective image optimization methods used to improve website performance, 
          reduce loading time, and enhance user experience.
        </p>

        <!-- Interactive Demo Button -->
        <button
          @click="goToDemo"
          class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 
                 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 text-sm sm:text-base"
        >
          🚀 Try Interactive Images Demo
        </button>
      </div>

      <!-- Techniques Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        
        <!-- Compression -->
        <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-2xl sm:text-3xl mb-3">📉</div>
          <h3 class="font-bold text-gray-900 mb-2 text-sm sm:text-base">Compression</h3>
          <p class="text-xs sm:text-sm text-gray-600">
            Reduce image size using formats like WebP/AVIF without noticeable quality loss.
          </p>
        </div>

        <!-- Lazy Loading -->
        <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-2xl sm:text-3xl mb-3">🐢➡️🚀</div>
          <h3 class="font-bold text-gray-900 mb-2">Lazy Loading</h3>
          <p class="text-sm text-gray-600">
            Images load only when they enter the viewport, saving bandwidth.
          </p>
        </div>

        <!-- Progressive Enhancements -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-3xl mb-3">🔄</div>
          <h3 class="font-bold text-gray-900 mb-2">Progressive Enhancements</h3>
          <p class="text-sm text-gray-600">
            Low-quality placeholder first, then gradually load higher resolution.
          </p>
        </div>

        <!-- Client Hints -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-3xl mb-3">📲</div>
          <h3 class="font-bold text-gray-900 mb-2">Client Hints</h3>
          <p class="text-sm text-gray-600">
            Browser sends DPR/Width info so server returns optimized images automatically.
          </p>
        </div>

        <!-- Responsive Images -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-3xl mb-3">📱💻</div>
          <h3 class="font-bold text-gray-900 mb-2">Responsive Images</h3>
          <p class="text-sm text-gray-600">
            Use <code>&lt;picture&gt;</code> or <code>srcset</code> to serve correct size for every device.
          </p>
        </div>

        <!-- Adaptive Images -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-3xl mb-3">🌐</div>
          <h3 class="font-bold text-gray-900 mb-2">Adaptive Images</h3>
          <p class="text-sm text-gray-600">
            Serve different image qualities based on network speed and device type.
          </p>
        </div>

        <!-- Blur Effect -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-3xl mb-3">🌫️</div>
          <h3 class="font-bold text-gray-900 mb-2">Blur Effect</h3>
          <p class="text-sm text-gray-600">
            Show blurred placeholder before loading the original image.
          </p>
        </div>

        <!-- Solid Primary Color -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <div class="text-3xl mb-3">🎨</div>
          <h3 class="font-bold text-gray-900 mb-2">Solid Primary Color</h3>
          <p class="text-sm text-gray-600">
            Use the image’s dominant color as background before it fully loads.
          </p>
        </div>

      </div>
    </div>
  </div>
</template>
