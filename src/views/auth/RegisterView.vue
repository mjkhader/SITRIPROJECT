<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';
import type { RegisterData } from '../../types/user';

const router = useRouter();
const authStore = useAuthStore();

const formData = ref<RegisterData>({
  email: '',
  password: '',
  confirmPassword: '',
});

const errorMessage = ref('');

async function handleSubmit() {
  if (formData.value.password !== formData.value.confirmPassword) {
    errorMessage.value = 'Passwords do not match';
    return;
  }

  // Check if email is valid
  if (!formData.value.email || !formData.value.email.trim()) {
    errorMessage.value = 'Email is required';
    return;
  }

  try {
    await authStore.register(formData.value.email, formData.value.password);
    router.push('/'); // Redirect to home after successful registration
  } catch (error) {
    errorMessage.value = error as string;
  }
}

</script>

<template>
  <div class="register-container">
    <form @submit.prevent="handleSubmit" class="register-form">
      <h2>Register</h2>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model="formData.email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model="formData.password"
          required
        />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          v-model="formData.confirmPassword"
          required
        />
      </div>

      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>

      <button type="submit" :disabled="authStore.loading">
        {{ authStore.loading ? 'Registering...' : 'Register' }}
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
}

.register-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
}

.form-group {
  margin-bottom: 1rem;

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
}

.error-message {
  color: red;
  margin-bottom: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background: #ccc;
  }
}
</style>
