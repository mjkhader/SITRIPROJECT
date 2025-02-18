<template>
  <nav class="bg-SkyBlue shadow-md px-4 py-3">
    <div class="flex justify-between items-center mx-auto container">
      <!-- Logo -->
      <div class="font-bold text-Navy text-2xl">
        <span class="text-Teal">Si</span>trip
      </div>
      
      <!-- Navigation Links -->
      <ul class="flex space-x-6 text-Navy">
        <li><a href="#" class="hover:text-Teal">Home</a></li>
        <li><a href="#destinations" class="hover:text-Teal">Destinations</a></li>
        <li><a href="#categories" class="hover:text-Teal">Categories</a></li>
        <li><a href="#about" class="hover:text-Teal">About</a></li>
      </ul>
      
      <!-- Sign Up / Log In Buttons -->
      <div class="flex space-x-4">
        <button class="px-4 py-2 rounded font-semibold text-Navy hover:text-Teal transition">Log In</button>
        <button class="bg-Teal hover:bg-SkyBlue px-4 py-2 rounded-full font-semibold text-white transition">Sign Up</button>
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
