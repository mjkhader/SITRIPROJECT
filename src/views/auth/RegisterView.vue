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
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  phoneNumber: '',
  personalImage: '',
  country: '',
  city: ''
});

const errorMessage = ref('');

async function handleSubmit() {
  if (formData.value.password !== formData.value.confirmPassword) {
    errorMessage.value = 'Passwords do not match';
    return;
  }

  try {
    await authStore.register(formData.value);
    router.push('/');
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

      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          v-model="formData.firstName"
          required
        />
      </div>

      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          v-model="formData.lastName"
          required
        />
      </div>

      <div class="form-group">
        <label for="dateOfBirth">Date of Birth</label>
        <input
          id="dateOfBirth"
          type="date"
          v-model="formData.dateOfBirth"
          required
        />
      </div>

      <div class="form-group">
        <label for="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="tel"
          v-model="formData.phoneNumber"
          required
        />
      </div>

      <div class="form-group">
        <label for="personalImage">Profile Image URL</label>
        <input
          id="personalImage"
          type="url"
          v-model="formData.personalImage"
          required
        />
      </div>

      <div class="form-group">
        <label for="country">Country</label>
        <input
          id="country"
          type="text"
          v-model="formData.country"
          required
        />
      </div>

      <div class="form-group">
        <label for="city">City</label>
        <input
          id="city"
          type="text"
          v-model="formData.city"
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
  max-width: 500px;

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