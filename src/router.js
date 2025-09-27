import { createRouter, createWebHistory } from 'vue-router'
import Header from './components/Header.vue'
import Pictures from './components/Pictures.vue'
import Videos from './components/Videos.vue'
import Fonts from './components/Fonts.vue'
import JavaScript from './components/JavaScript.vue'
import ImageDemo from './components/ImageDemo.vue'
import VideoDemo from './components/VideoDemo.vue'

const routes = [
  { path: '/', name: 'Home', component: Header },
  { path: '/pictures', name: 'Pictures', component: Pictures },
  { path: '/image-demo', name: 'ImageDemo', component: ImageDemo },
  { path: '/video-demo', name: 'VideoDemo', component: VideoDemo },
  { path: '/videos', name: 'Videos', component: Videos },
  { path: '/fonts', name: 'Fonts', component: Fonts },
  { path: '/javascript', name: 'JavaScript', component: JavaScript },
  { path: '/performance', name: 'Performance', component: () => import('./views/Performance.vue') },
  { path: '/about', name: 'About', component: () => import('./views/About.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes
})