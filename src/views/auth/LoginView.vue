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
console.log("Logging in with:", email.value
, password.value);
  try {
    await authStore.login(email.value, password.value);
    console.log("Logging successful");

    // Check if there's a stored route in localStorage
    const redirectTo = localStorage.getItem("redirectTo");
    console.log("Redirecting to:", redirectTo);
    if (redirectTo) {
      localStorage.removeItem("redirectTo"); // Clear the stored route after use
      router.push(redirectTo); // Redirect to the stored route
    } else {
      router.push("/"); // Default to home if no route is stored
    }
  } catch (error) {
    errorMessage.value = error as string;
  }
}
</script>

<template>
  <div class="auth-container">
    <form @submit.prevent="handleLogin" class="auth-form">
      <h2>Login</h2>

      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" required />
      </div>

      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

      <button type="submit" :disabled="authStore.loading">
        {{ authStore.loading ? "Logging in..." : "Login" }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
}

.auth-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.error-message {
  color: red;
  margin-bottom: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background: #ccc;
}
</style>
