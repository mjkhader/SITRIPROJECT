<template>
  <nav class="bg-sky-blue shadow-md px-4 py-3">
    <div class="flex justify-between items-center mx-auto container">
      <!-- Logo -->
      <div class="font-bold text-navy text-2xl">
        <span class="text-teal">Si</span>trip
      </div>
      
      <!-- Navigation Links -->
      <ul class="flex space-x-6 text-navy">
        <li><a href="#" class="hover:text-teal">Home</a></li>
        <li><a href="#destinations" class="hover:text-teal">Destinations</a></li>
        <li><a href="#categories" class="hover:text-teal">Categories</a></li>
        <li><a href="#about" class="hover:text-teal">About</a></li>
      </ul>
      
      <!-- Sign Up / Log In Buttons -->
      <div class="flex space-x-4">
        <button class="px-4 py-2 rounded font-semibold text-navy hover:text-teal transition">Log In</button>
        <button class="bg-teal hover:bg-sky-blue px-4 py-2 rounded-full font-semibold text-white hover:text-navy transition">Sign Up</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
</style>
