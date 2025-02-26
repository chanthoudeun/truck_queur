<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import MainLayout from './layout/MainLayout.vue';
import { useAuthStore } from './stores/auth';
import router from './router';
const authStore = useAuthStore();
// Restore user from localStorage when the app loads
onMounted(() => {
  if (!authStore.user) {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      authStore.setUser(JSON.parse(savedUser));
    }
  }
});

// Computed property to check authentication status
const isAuthenticated = computed(() => !!authStore.user?.token);


</script>


<template>
  <!-- Only show MainLayout when the user is logged in -->
  <MainLayout v-if="isAuthenticated">
    <router-view />
  </MainLayout>
  <!-- You can show login or other layout if the user is not authenticated -->
  <router-view v-else />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
