<script>
export default {
  name: "Fonts",
  methods: {
    goToDemo() {
      this.$router.push('/fonts-demo')
    }
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-6 sm:py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-2">Fonts Optimization Techniques</h1>
        <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
          Practical techniques to load fonts fast, avoid layout-shift and handle FOUT / FOIT.
        </p>           
      </div>

      <!-- Techniques Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <!-- Progressive Enhancement -->
        <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition">
          <div class="text-2xl sm:text-3xl mb-3">🔁</div>
          <h3 class="font-bold text-gray-900 mb-2 text-sm sm:text-base">Progressive Enhancement</h3>
          <p class="text-xs sm:text-sm text-gray-600 mb-3">
            Load a system fallback font first, then swap to the webfont when ready — avoids blocking rendering.
          </p>
          <pre class="bg-gray-100 text-xs p-3 rounded-md overflow-x-auto">
/* CSS */
html { font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
body { font-family: "MyWebFont", system-ui, sans-serif; font-display: swap; }
          </pre>
        </div>

        <!-- Subset Webfonts -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <div class="text-3xl mb-3">✂️</div>
          <h3 class="font-bold text-gray-900 mb-2">Subset Webfonts</h3>
          <p class="text-sm text-gray-600 mb-3">
            Generate subset fonts (only used glyphs) to drastically reduce file size for initial load.
          </p>
          <pre class="bg-gray-100 text-xs p-3 rounded-md overflow-x-auto">
/* Example: build pipeline (pseudo)
1. Use glyphhanger / pyftsubset to create subset for en-us + numerals.
2. Produce woff2 subset:
   pyftsubset font.ttf --output-file=font-subset.woff2 --text-file=used-glyphs.txt
          </pre>
        </div>

        <!-- Async Stylesheet -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <div class="text-3xl mb-3">⚡</div>
          <h3 class="font-bold text-gray-900 mb-2">Async Stylesheet</h3>
          <p class="text-sm text-gray-600 mb-3">
            Load the font CSS asynchronously so it doesn't block the first paint.
          </p>
          <pre class="bg-gray-100 text-xs p-3 rounded-md overflow-x-auto">
<!-- Load CSS asynchronously -->
<link rel="preload" href="/fonts/fonts.css" as="style" onload="this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/fonts/fonts.css"></noscript>
          </pre>
        </div>

        <!-- FontFaceObserver -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <div class="text-3xl mb-3">🕵️‍♂️</div>
          <h3 class="font-bold text-gray-900 mb-2">FontFaceObserver</h3>
          <p class="text-sm text-gray-600 mb-3">
            Use a small JS helper to detect when fonts are loaded and apply a class for controlled swap/animations.
          </p>
          
        </div>

        <!-- FOUT vs FOIT -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <div class="text-3xl mb-3">⚖️</div>
          <h3 class="font-bold text-gray-900 mb-2">FOUT (better) vs FOIT (worse)</h3>
          <p class="text-sm text-gray-600 mb-3">
            Prefer FOUT (flash of unstyled text) with a smooth swap rather than FOIT (invisible text). Use font-display: swap.
          </p>
          <pre class="bg-gray-100 text-xs p-3 rounded-md overflow-x-auto">
/* Recommended: enable swap */
@font-face {
  font-family: "MyWebFont";
  src: url("/fonts/mywebfont.woff2") format("woff2");
  font-display: swap;
}
          </pre>
        </div>

        <!-- Combined Best Practices -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <div class="text-3xl mb-3">🧰</div>
          <h3 class="font-bold text-gray-900 mb-2">Combined Best Practices</h3>
          <p class="text-sm text-gray-600 mb-3">
            Preload key fonts, subset them, load CSS async, and use FontFaceObserver for graceful swapping.
          </p>
          <pre class="bg-gray-100 text-xs p-3 rounded-md overflow-x-auto">
<!-- Preload key font -->
<link rel="preload" href="/fonts/mywebfont.woff2" as="font" type="font/woff2" crossorigin>
<!-- Async CSS + FontFaceObserver + font-display:swap -->
          </pre>
        </div>

      </div>

      <!-- Footer note / quick cheats -->
      <div class="mt-10 bg-white rounded-lg shadow-md p-6">
        <h4 class="text-lg font-semibold mb-3">Quick Cheatsheet</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <strong>1.</strong> Use <code>font-display: swap</code> — avoids FOIT.<br>
            <strong>2.</strong> Subset fonts for initial load. Use full font for later if needed.
          </div>
          <div>
            <strong>3.</strong> Preload critical fonts (woff2) with <code>&lt;link rel="preload"&gt;</code>.<br>
            <strong>4.</strong> Use FontFaceObserver to toggle classes and animate swap.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Segoe UI Mono", monospace;
  font-size: 0.8rem;
  line-height: 1.4;
}
</style>
