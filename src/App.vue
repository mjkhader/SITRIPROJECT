<script setup lang="ts">
import { useAuthStore } from './stores/auth';
const authStore = useAuthStore();
</script>

<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-brand">
        <router-link to="/">SItrip</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/places" class="nav-link">Places</router-link>
        <router-link to="/events" class="nav-link">Events</router-link>
        <template v-if="authStore.user?.role === 'admin'">
          <router-link to="/admin" class="nav-link">Admin</router-link>
        </template>
        <template v-if="!authStore.user">
          <router-link to="/login" class="nav-link">Login</router-link>
          <router-link to="/register" class="nav-link">Register</router-link>
        </template>
        <button v-else @click="authStore.logout" class="nav-link logout-btn">Logout</button>
      </div>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBar from "./components/layout/NavBar.vue";
</script>