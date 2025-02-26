<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";

const router = useRouter();
const authStore = useAuthStore();

const email = ref("");
const password = ref("");
const errorMessage = ref("");

async function handleLogin() {
  try {
    await authStore.login(email.value, password.value);

    // Check if there's a stored route in localStorage
    const redirectTo = localStorage.getItem("redirectTo");
    if (redirectTo) {
      localStorage.removeItem("redirectTo"); // Clear stored route
      router.push(redirectTo);
    } else {
      router.push("/"); // Default redirect
    }
  } catch (error) {
    errorMessage.value = error as string;
  }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-sky-blue p-4">
    <form @submit.prevent="handleLogin" class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-3xl font-semibold text-center text-navy mb-6">Login</h2>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-navy">Email</label>
        <input 
          id="email" 
          type="email" 
          v-model="email" 
          required 
          class="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-teal focus:border-teal"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-navy">Password</label>
        <input 
          id="password" 
          type="password" 
          v-model="password" 
          required 
          class="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-teal focus:border-teal"
        />
      </div>

      <div v-if="errorMessage" class="text-red-500 text-sm mb-4">
        {{ errorMessage }}
      </div>

      <button 
        type="submit" 
        :disabled="authStore.loading"
        class="w-full bg-teal hover:bg-sky-blue text-white hover:text-navy py-3 rounded-md font-medium transition disabled:bg-gray-400"
      >
        {{ authStore.loading ? "Logging in..." : "Login" }}
      </button>
      
      <p class="mt-4 text-sm text-center text-navy">
        Don't have an account? 
        <router-link to="/register" class="text-teal hover:underline">Sign Up</router-link>
      </p>
    </form>
  </div>
</template>
