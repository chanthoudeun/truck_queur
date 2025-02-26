<script setup lang="ts">
import apis from '@/libraries/apis';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';

const logout = async () => {
  try {
    const authStore = useAuthStore(); // Get the auth store
    await  authStore.logout();
  } catch (error) {
    console.error("Login error:", error);
    alert("An error occurred during login.");
  }
};
</script>

<template>
    <div>
        Hello 
    </div>
    <button @click="logout">Logout</button>
</template>

<style lang="">
    
</style>