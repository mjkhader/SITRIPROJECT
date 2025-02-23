import { defineStore } from 'pinia';
import { ref } from 'vue';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<{ uid: string; name: string; email: string } | null>(null);
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
    console.log('Registering function called');
    loading.value = true;
    error.value = null;
  
    try {
      // Ensure email is passed correctly as a string
      if (typeof email !== 'string' || !email.trim()) {
        throw new Error('Invalid email value');
      }
  
      console.log('Registering', email, password);
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential);
      const firebaseUser = userCredential.user;
  
      // Update profile if needed
      await updateProfile(firebaseUser, { displayName: email.split('@')[0] }); // Display name based on email
  
      // Save user info in Firestore
      await setDoc(doc(db, 'users', firebaseUser.uid), {
        uid: firebaseUser.uid,
        email,
      });
  
      // Store user locally
      user.value = { uid: firebaseUser.uid, name: firebaseUser.displayName || '', email };
      localStorage.setItem('user', JSON.stringify(user.value));
  
      return user.value;
    } catch (err: any) {
      console.error('Registration Error:', err.code, err.message);
      error.value = getErrorMessage(err.code);
      throw error.value;
    } finally {
      loading.value = false; // Ensure loading is reset in all cases
    }
  }
  

  // Login function remains the same
  async function login(email: string, password: string) {
    console.log('Logging function called');
    loading.value = true;
    error.value = null;
    console.log('Logging', email, password);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      user.value = {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName || 'User',
        email,
      };

      localStorage.setItem('user', JSON.stringify(user.value));
      return user.value;
    } catch (err: any) {
      console.error('Login Error:', err.code, err.message);
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
      console.error('Logout Error:', err);
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
