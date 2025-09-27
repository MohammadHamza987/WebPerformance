<script>
export default {
  name: "JavascriptOptimization",
  methods: {
    goToDemo() {
      this.$router.push('/javascript-demo')
    }
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-6 sm:py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-2">JavaScript Optimization Techniques</h1>
        <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
          Learn how to load JS efficiently and run heavy tasks without blocking UI.
        </p>        
      </div>

      <!-- Techniques Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <!-- Defer vs Async -->
        <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition">
          <div class="text-2xl sm:text-3xl mb-3">⏳⚡</div>
          <h3 class="font-bold text-gray-900 mb-2 text-sm sm:text-base">Defer vs Async</h3>
          <p class="text-xs sm:text-sm text-gray-600 mb-3">
            Control when your scripts load to avoid render-blocking and improve page speed.
          </p>
          <pre class="bg-gray-100 text-xs p-3 rounded-md overflow-x-auto">
<!-- Async: script loads in parallel, executes immediately when ready -->
&lt;script src="script.js" async&gt;&lt;/script&gt;

<!-- Defer: script loads in parallel, executes after HTML parsing -->
&lt;script src="script.js" defer&gt;&lt;/script&gt;
          </pre>
          <p class="text-xs text-gray-500 mt-1">
            Use <strong>defer</strong> for scripts that rely on DOM content, <strong>async</strong> for independent scripts.
          </p>
        </div>

        <!-- Web Workers -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <div class="text-3xl mb-3">👷‍♂️</div>
          <h3 class="font-bold text-gray-900 mb-2">Web Workers</h3>
          <p class="text-sm text-gray-600 mb-3">
            Run heavy JavaScript tasks in a background thread to keep UI responsive.
          </p>
          <pre class="bg-gray-100 text-xs p-3 rounded-md overflow-x-auto">
/* main.js */
const worker = new Worker('worker.js');

worker.postMessage({ count: 1000000 });

worker.onmessage = function(e) {
  console.log('Result from worker:', e.data);
};

/* worker.js */
self.onmessage = function(e) {
  let result = 0;
  for(let i=0; i&lt;e.data.count; i++){
    result += i;
  }
  self.postMessage(result);
};
          </pre>
          <p class="text-xs text-gray-500 mt-1">
            Heavy computations won't block main thread rendering.
          </p>
        </div>
      </div>

      <!-- Footer quick cheats -->
      <div class="mt-10 bg-white rounded-lg shadow-md p-6">
        <h4 class="text-lg font-semibold mb-3">Quick Cheatsheet</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <strong>1.</strong> Use <code>defer</code> for DOM-dependent scripts.<br>
            <strong>2.</strong> Use <code>async</code> for independent scripts.
          </div>
          <div>
            <strong>3.</strong> Offload CPU-heavy tasks to <code>Web Workers</code> to keep UI smooth.<br>
            <strong>4.</strong> Communicate via <code>postMessage</code> between main thread & workers.
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
