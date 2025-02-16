<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
  <div class="home">
    <h1>Welcome to Jordan Tourism Platform</h1>
    <div class="featured-sections">
      <section class="featured-places">
        <h2>Featured Places</h2>
        <!-- Featured places will be displayed here -->
      </section>
      <section class="upcoming-events">
        <h2>Upcoming Events</h2>
        <!-- Upcoming events will be displayed here -->
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  padding: 2rem;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .featured-sections {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    section {
      background: #fff;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      h2 {
        margin-bottom: 1rem;
        color: #333;
      }
    }
  }
}
</style>