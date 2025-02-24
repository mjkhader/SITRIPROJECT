<template>
  <div class="flex space-x-4 bg-white shadow-md p-4 rounded-lg">
    <img :src="image" alt="Hotel Image" class="rounded-lg w-32 h-32 object-cover">
    
    <div class="flex flex-col justify-between">
      <div>
        <h3 class="font-bold text-lg">{{ name }}</h3>
        <p class="text-gray-600 text-sm">{{ location }}</p>
      </div>

      <div>
        <span class="font-semibold text-blue-600 text-xl">JOD {{ price }}</span>
        <span class="text-gray-500 text-sm"> / night</span>
      </div>

      <div class="bg-blue-500 hover:bg-blue-600 mt-2 px-3 py-1 rounded-md text-white">
        <router-link to="/places/c1"> View details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaceCard",
  props: {
    name: String,
    location: String,
    categories: Number,
    image: String,
    services:String,
    description:String
  },
};
</script>