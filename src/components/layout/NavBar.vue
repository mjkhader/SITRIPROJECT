<template>
  <nav class="bg-sky-blue shadow-md px-4 py-3">
    <div class="flex justify-between items-center mx-auto container">
      <!-- Logo -->
      <router-link to="/">
      <div class="font-bold text-navy text-2xl">
        <span class="text-teal">Si</span>trip
      </div>
    </router-link>
      <!-- Navigation Links -->
      <ul class="flex space-x-6 text-navy">
        <li><router-link to="/" class="hover:text-teal">Home</router-link></li>
        <li><router-link to="/places" class="hover:text-teal">Places</router-link></li>
        <li><router-link to="/hotels" class="hover:text-teal">Hotels</router-link></li>
        <li><a href="#about" class="hover:text-teal">About</a></li>
      </ul>
      
      <!-- Sign Up / Log In Buttons -->
      <div class="flex space-x-4">
        <button @click="$router.push('/login')" class="px-4 py-2 rounded font-semibold text-navy hover:text-teal transition">Log In</button>
        <button @click="$router.push('/register')" class="bg-teal hover:bg-sky-blue px-4 py-2 rounded-full font-semibold text-white hover:text-navy transition">Sign Up</button>
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
