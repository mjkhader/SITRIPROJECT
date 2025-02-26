<script setup lang="ts">
import { ref, onMounted } from "vue";
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

onMounted(() => {
  document.body.style.overflow = "hidden"; // Prevent scrolling
});

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
  <div class="flex justify-center items-center h-screen bg-sky-blue p-4">
    <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-3xl font-semibold text-center text-navy mb-6">Register</h2>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-navy">Email</label>
        <input
          id="email"
          type="email"
          v-model="formData.email"
          required
          class="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-teal focus:border-teal"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-navy">Password</label>
        <input
          id="password"
          type="password"
          v-model="formData.password"
          required
          class="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-teal focus:border-teal"
        />
      </div>

      <div class="mb-4">
        <label for="confirmPassword" class="block text-sm font-medium text-navy">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          v-model="formData.confirmPassword"
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
        {{ authStore.loading ? "Registering..." : "Register" }}
      </button>

      <p class="mt-4 text-sm text-center text-navy">
        Already have an account?
        <router-link to="/login" class="text-teal hover:underline">Login</router-link>
      </p>
    </form>
  </div>
</template>
