// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJUnIgek0p2aZgTvVB_lZyn5ubIrFue2E",
  authDomain: "sitrip.firebaseapp.com",
  projectId: "sitrip",
  storageBucket: "sitrip.appspot.com",
  messagingSenderId: "538513990129",
  appId: "1:538513990129:web:581a388bea5f0387e2e450",
  measurementId: "G-K6X3EDH51N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, db };