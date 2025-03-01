<template>
  <div class="bg-white shadow-lg rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 transition-transform hover:scale-105">
    <!-- Image -->
    <img 
      :src="image || 'https://via.placeholder.com/150'" 
      alt="Place Image" 
      class="w-full sm:w-40 h-40 object-cover rounded-lg shadow-md"
    />

    <!-- Content -->
    <div class="flex flex-col flex-grow text-center sm:text-left">
      <!-- Name & Location -->
      <h3 class="text-2xl font-semibold text-navy">{{ name }}</h3>
      <p class="text-gray-500 text-sm">{{ location }}</p>

      <!-- Services -->
      <div class="flex flex-wrap justify-center sm:justify-start gap-2 my-3">
        <base-badge
          v-for="service in services"
          :key="service"
          :type="service"
          :title="service"
          class="bg-teal-blue text-white px-3 py-1 rounded-lg text-xs shadow-sm"
        ></base-badge>
      </div>

      <!-- categories -->
      <div class="mt-0 text-medium font-bold text-teal">
         {{ categories }}
      </div>

      <!-- Buttons (Now Properly Contained) -->
      <div class="mt-2 flex flex-col sm:flex-row gap-2">
        <router-link 
          :to="placesDetailsLink"
          class="w-full sm:w-auto text-center bg-teal px-2 py-2 text-white font-medium rounded-lg shadow-md hover:bg-teal-blue transition"
        >
          View Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaceCard",
  props: {
    id: Number,
    name: String,
    location: String,
    categories: String,
    image: String,
    services: Array,
    description: String,
  },
 
  computed: {
    placesDetailsLink() {
      return `/places/${this.id}`;
    },
    placesContactLink() {
      return `/places/${this.id}/contact`;
    },
  },
};
</script>
