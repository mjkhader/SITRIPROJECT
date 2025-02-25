import { defineStore } from 'pinia';
import { ref } from 'vue';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import type { User} from '../types/user';


export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

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
      // Ensure email is passed correctly as a string
      if (typeof email !== 'string' || !email.trim()) {
        throw new Error('Invalid email value');
      }
  
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
  

      // Store user locally
      user.value = { 
        id: firebaseUser.uid, 
        email,
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        phoneNumber: '',
        personalImage: '',
        country: '',
        city: '',
        interests: [],
        role: 'user'
      };
      localStorage.setItem('user', JSON.stringify(user.value));
  
      return user.value;
    } catch (err: any) {
      error.value = getErrorMessage(err.code);
      throw error.value;
    } finally {
      loading.value = false; // Ensure loading is reset in all cases
    }
  }
  

  // Login function remains the same
  async function login(email: string, password: string) {
    loading.value = true;
    error.value = null;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      user.value = {
        id: firebaseUser.uid,
        email,
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        phoneNumber: '',
        personalImage: '',
        country: '',
        city: '',
        interests: [],
        role: 'user'
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

  // Logout function remains the same
  async function logout() {
    try {
      await signOut(auth);
      user.value = null;
      localStorage.removeItem('user');
    } catch (err) {
      error.value = 'Logout failed. Please try again.';
    }
  }

  return {
    user,
    loading,
    error,
    register,
    login,
    logout,
  };
});
