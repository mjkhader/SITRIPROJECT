import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User, LoginCredentials, RegisterData } from '../types/user';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function login(credentials: LoginCredentials) {
    loading.value = true;
    error.value = null;
    try {
      // TODO: Implement actual API call
      // For now, mock the login
      const response = await mockLogin(credentials);
      user.value = response;
      localStorage.setItem('user', JSON.stringify(response));
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Login failed';
      throw error.value;
    } finally {
      loading.value = false;
    }
  }

  async function register(data: RegisterData) {
    loading.value = true;
    error.value = null;
    try {
      // TODO: Implement actual API call
      // For now, mock the registration
      const response = await mockRegister(data);
      user.value = response;
      localStorage.setItem('user', JSON.stringify(response));
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Registration failed';
      throw error.value;
    } finally {
      loading.value = false;
    }
  }

  function logout() {
    user.value = null;
    localStorage.removeItem('user');
  }

  return {
    user,
    loading,
    error,
    login,
    register,
    logout
  };
});

// Mock functions for development
async function mockLogin(credentials: LoginCredentials): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '1',
        email: credentials.email,
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-01-01',
        phoneNumber: '+1234567890',
        personalImage: 'https://example.com/image.jpg',
        country: 'Jordan',
        city: 'Amman',
        interests: ['hiking', 'culture'],
        role: 'user'
      });
    }, 1000);
  });
}

async function mockRegister(data: RegisterData): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '1',
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth,
        phoneNumber: data.phoneNumber,
        personalImage: data.personalImage,
        country: data.country,
        city: data.city,
        interests: [],
        role: 'user'
      });
    }, 1000);
  });
}