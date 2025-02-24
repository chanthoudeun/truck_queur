<script setup lang="ts">
import apis from '@/libraries/apis';
import router from '@/router';

const logout = async () => {
  try {
    var rep = await apis.logout("900182033");
    var result = rep; 
    if (result) {
      console.log("Login successful:", result);
      alert(`Logout success`);
      router.push("/"); // Redirect to dashboard
    } else {
      alert(`Login failed! Please check your credentials. ${result}`);
     
    }

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