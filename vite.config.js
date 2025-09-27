import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      jpeg: {
        quality: 75,
        progressive: true,
      },
      png: {
        quality: 75,
        progressive: true,
      },
      webp: {
        lossless: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    assetsInlineLimit: 4096, // 4kb - inline small images as base64
    rollupOptions: {
      output: {
        manualChunks: {
          'home-images': [
            './src/images/home1.jpg',
            './src/images/home2.jpg',
            './src/images/home3.jpg'
          ],
          'location-images': [
            './src/images/location1.jpg',
            './src/images/location2.jpg',
            './src/images/location3.jpg'
          ]
        }
      }
    }
  }
})
