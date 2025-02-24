DashboardView<script setup lang="ts">
import apis from '@/libraries/apis';
import { ILoginReq } from '@/libraries/model/auth/iLoginReq';
import router from '@/router';
import { ref } from 'vue';

const loginRequest = ref<ILoginReq>({
  employeeId: "900182033",
  password: "123",
});

const login = async () => {
  try {
    var rep = await apis.login(loginRequest.value);
    var result = rep; 
    if (result && result.token) {
      console.log("Login successful:", result);
      // localStorage.setItem("token", rep.Result.token); // Store token
      router.push("/dashboard"); // Redirect to dashboard
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