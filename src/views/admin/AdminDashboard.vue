<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
  <div class="admin-dashboard">
    <h1>Admin Dashboard</h1>
    <div class="dashboard-grid">
      <section class="dashboard-card">
        <h2>Users Management</h2>
        <!-- Users management will be implemented here -->
      </section>
      <section class="dashboard-card">
        <h2>Places Management</h2>
        <!-- Places management will be implemented here -->
      </section>
      <section class="dashboard-card">
        <h2>Events Management</h2>
        <!-- Events management will be implemented here -->
      </section>
      <section class="dashboard-card">
        <h2>Owner Requests</h2>
        <!-- Owner requests will be implemented here -->
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin-dashboard {
  padding: 2rem;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .dashboard-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
      margin-bottom: 1rem;
      color: #333;
    }
  }
}
</style>