<script setup lang="ts">
import apis from '@/libraries/apis';
import { ILoginReq } from '@/libraries/model/auth/iLoginReq';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
import { createPinia } from 'pinia';
import { ref } from 'vue';
const pinia = createPinia();
const authStore = useAuthStore(pinia); 
const loginRequest = ref<ILoginReq>({
  employeeId: "900182033",
  password: "123",
});

const login = async () => {
  try {
    var rep = await apis.login(loginRequest.value);
    var result = rep; 
    if (result && result.token) {
      authStore.setUser(result);
      console.log("Login successful:", result);
      console.log("Auth Store successful:", authStore.user?.token);
       router.push("/dashboard"); // Redirect to dashboard
       location.reload(); 
    } else {
      alert(`Login failed! Please check your credentials. ${result}`);
     
    }

  } catch (error) {
    console.error("Login error:", error);
    alert("An error occurred during login.");
  }
};


</script>
<template >
    <div>
    <h1>Login Page</h1>
    <button @click="login">Login</button>
  </div>
</template>


<style lang="">
    
</style>