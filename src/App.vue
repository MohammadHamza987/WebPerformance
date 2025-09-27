<script>
import Navbar from './components/Navbar.vue';

export default {
  name: "App",
  components: { Navbar }
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <router-view />
  </div>
</template>
