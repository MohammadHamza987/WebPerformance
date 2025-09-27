<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      <!-- Hero Section -->
      <div class="text-center mb-8 sm:mb-12">
        <h1 class="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight px-2">
          📊 Performance Metrics
        </h1>
        <p class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
          Monitor and analyze your website's performance with key metrics and tools.
        </p>
      </div>

      <!-- Performance Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
        <!-- Core Web Vitals Card -->
        <div class="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <span class="text-xl sm:text-2xl">🎯</span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900">Core Web Vitals</h3>
          </div>
          <p class="text-sm sm:text-base text-gray-600 mb-4">
            Essential metrics that Google considers important for user experience.
          </p>
          <ul class="space-y-2">
            <li class="flex items-center">
              <span class="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span class="text-sm">Largest Contentful Paint (LCP)</span>
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              <span class="text-sm">First Input Delay (FID)</span>
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              <span class="text-sm">Cumulative Layout Shift (CLS)</span>
            </li>
          </ul>
        </div>

        <!-- Lighthouse Card -->
        <div class="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <span class="text-xl sm:text-2xl">🔍</span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900">Lighthouse</h3>
          </div>
          <p class="text-gray-600 mb-4">
            Google's tool for auditing web page quality and performance.
          </p>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-700">Performance</span>
              <div class="bg-green-100 px-2 py-1 rounded text-green-700 text-sm">95</div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-700">Accessibility</span>
              <div class="bg-green-100 px-2 py-1 rounded text-green-700 text-sm">98</div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-700">Best Practices</span>
              <div class="bg-yellow-100 px-2 py-1 rounded text-yellow-700 text-sm">83</div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-700">SEO</span>
              <div class="bg-green-100 px-2 py-1 rounded text-green-700 text-sm">100</div>
            </div>
          </div>
        </div>

        <!-- Analytics Card -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <span class="text-2xl">📈</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Analytics</h3>
          </div>
          <p class="text-gray-600 mb-4">
            Track user behavior and performance metrics in real-time.
          </p>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-700">Page Load Time</span>
              <span class="text-sm font-medium text-green-600">1.2s</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-700">Bounce Rate</span>
              <span class="text-sm font-medium text-blue-600">25%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-700">Time on Page</span>
              <span class="text-sm font-medium text-purple-600">3m 45s</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Performance Tips -->
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Performance Optimization Tips</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-800">Loading Optimization</h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Minimize HTTP requests
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Enable compression (Gzip/Brotli)
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Use CDN for static assets
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Implement lazy loading
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-800">Code Optimization</h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Minify CSS, JS, and HTML
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Tree shake unused code
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Optimize critical render path
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Use efficient CSS selectors
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Performance',
  mounted() {
    document.title = 'Performance Metrics - Web Performance Optimization'
  }
}
</script>