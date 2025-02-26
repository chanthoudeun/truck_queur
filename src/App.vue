<script setup lang="ts">
import { computed } from 'vue';
import MainLayout from './layout/MainLayout.vue';
import { useAuthStore } from './stores/auth';
import { useRoute, useRouter } from 'vue-router';
const authStore = useAuthStore();
const router = useRouter();
const route = useRoute(); // Get the current route object
// Restore user from localStorage on app load
if (!authStore.user) {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
        authStore.setUser(JSON.parse(savedUser));
    }
}

const isAuthenticated = computed(() => !!authStore.user); 

// Check if the current route is the login page
const isLoginPage = computed(() => route.path === '/');

// Redirect to dashboard if the user is already logged in and tries to access the login page
if (isAuthenticated.value && isLoginPage.value) {
  router.push('/dashboard');
}
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
