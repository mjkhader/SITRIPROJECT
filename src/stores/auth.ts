import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import type { User } from '../stores/user';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Load user from localStorage when the store initializes
  function loadUser() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      user.value = JSON.parse(storedUser);
    }
  }

  // Check if the user is authenticated
  const isAuthenticated = computed(() => !!user.value);

  // Convert Firebase errors to human-readable messages
  function getErrorMessage(errorCode: string): string {
    const errorMessages: { [key: string]: string } = {
      'auth/email-already-in-use': 'This email is already registered. Try logging in.',
      'auth/invalid-email': 'Invalid email format. Please check your email.',
      'auth/weak-password': 'Password should be at least 6 characters.',
      'auth/user-not-found': 'No account found with this email. Please register first.',
      'auth/wrong-password': 'Incorrect password. Please try again.',
      'auth/too-many-requests': 'Too many failed attempts. Try again later.',
    };
    return errorMessages[errorCode] || 'An unknown error occurred. Please try again.';
  }

  // Register a new user
  async function register(email: string, password: string) {
    loading.value = true;
    error.value = null;

    try {
      if (typeof email !== 'string' || !email.trim()) {
        throw new Error('Invalid email value');
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      user.value = {
        id: firebaseUser.uid,
        email,
      };

      localStorage.setItem('user', JSON.stringify(user.value));
      return user.value;
    } catch (err: any) {
      error.value = getErrorMessage(err.code);
      throw error.value;
    } finally {
      loading.value = false;
    }
  }

  // Login function
  async function login(email: string, password: string) {
    loading.value = true;
    error.value = null;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      user.value = {
        id: firebaseUser.uid,
        email,
      };

      localStorage.setItem('user', JSON.stringify(user.value));
      return user.value;
    } catch (err: any) {
      error.value = getErrorMessage(err.code);
      throw error.value;
    } finally {
      loading.value = false;
    }
  }

  // Logout function
  async function logout() {
    try {
      await signOut(auth);
      user.value = null;
      localStorage.removeItem('user');
    } catch (err) {
      error.value = 'Logout failed. Please try again.';
    }
  }

  // Load user when the store is initialized
  loadUser();

  return {
    user,
    loading,
    error,
    register,
    login,
    logout,
    loadUser,
    isAuthenticated,
  };
});
