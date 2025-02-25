<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import type { RegisterData } from "../../types/user";

const router = useRouter();
const authStore = useAuthStore();

const formData = ref<RegisterData>({
  email: "",
  password: "",
  confirmPassword: "",
});

const errorMessage = ref("");

async function handleSubmit() {
  if (formData.value.password !== formData.value.confirmPassword) {
    errorMessage.value = "Passwords do not match";
    return;
  }

  // Check if email is valid
  if (!formData.value.email || !formData.value.email.trim()) {
    errorMessage.value = "Email is required";
    return;
  }

  try {
    await authStore.register(formData.value.email, formData.value.password);
    router.push("/"); // Redirect to home after successful registration
  } catch (error) {
    errorMessage.value = error as string;
  }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 p-4">
    <form
      @submit.prevent="handleSubmit"
      class="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
    >
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">
        Register
      </h2>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          id="email"
          type="email"
          v-model="formData.email"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <input
          id="password"
          type="password"
          v-model="formData.password"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <div class="mb-4">
        <label
          for="confirmPassword"
          class="block text-sm font-medium text-gray-700"
          >Confirm Password</label
        >
        <input
          id="confirmPassword"
          type="password"
          v-model="formData.confirmPassword"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <div v-if="errorMessage" class="text-red-500 text-sm mb-4">
        {{ errorMessage }}
      </div>

      <button
        type="submit"
        :disabled="authStore.loading"
        class="w-full bg-green-500 text-white py-2 rounded-md font-medium hover:bg-green-600 transition disabled:bg-gray-400"
      >
        {{ authStore.loading ? "Registering..." : "Register" }}
      </button>

      <p class="mt-4 text-sm text-center text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-green-500 hover:underline"
          >Login</router-link
        >
      </p>
    </form>
  </div>
</template>
