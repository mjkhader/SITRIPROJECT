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

<style lang="scss" scoped>

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-brand {
    font-size: 1.5rem;
    font-weight: bold;
    
    a {
      color: #2c3e50;
      text-decoration: none;
      
      &:hover {
        color: #42b883;
      }
    }
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .nav-link {
    color: #2c3e50;
    text-decoration: none;
    font-weight: 500;
    
    &:hover, &.router-link-active {
      color: #42b883;
    }

    &.logout-btn {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      
      &:hover {
        color: #e74c3c;
      }
    }
  }
}

.main-content {
  flex: 1;
  background-color: #f8f9fa;
  padding: 2rem;
}
</style>