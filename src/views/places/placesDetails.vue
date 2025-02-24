<!-- <template>
    <div v-if="place" class="container mx-auto py-10">
      <div class="flex flex-col lg:flex-row bg-white shadow-md p-6 rounded-lg">
        <div class="flex-1">
          <img :src="place.image" alt="Place Image" class="rounded-lg w-full object-cover mb-6 lg:mb-0 lg:w-64 lg:h-64">
        </div>
        <div class="flex-1 lg:ml-6">
          <h1 class="text-3xl font-bold text-Navy mb-4">{{ place.name }}</h1>
          <p class="text-lg text-gray-700">{{ place.description }}</p>
          
          <div class="mt-6">
            <h3 class="text-lg font-semibold text-Navy mb-2">Location:</h3>
            <p>{{ place.location }}</p>
          </div>
          
          <div class="mt-4">
            <h3 class="text-lg font-semibold text-Navy mb-2">Categories:</h3>
            <ul>
              <li v-for="category in place.categories" :key="category" class="text-gray-700">
                {{ category }}
              </li>
            </ul>
          </div>
  
          <div class="mt-4">
            <h3 class="text-lg font-semibold text-Navy mb-2">Services:</h3>
            <ul>
              <li v-for="service in place.services" :key="service" class="text-gray-700">
                {{ service }}
              </li>
            </ul>
          </div>
  
          <div class="mt-6">
            <span class="font-semibold text-blue-600 text-xl">JOD {{ place.price }}</span>
            <span class="text-gray-500 text-sm"> / night</span>
          </div>
  
          <div class="mt-4">
            <router-link to="/places" class="inline-block px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-500">
              Edit Place
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref, onMounted } from "vue";
  import { usePlaceStore } from "@/stores/placeStore"; // Assuming you're using Pinia for state management
  
  export default defineComponent({
    name: "PlaceDetails",
    setup() {
      const placeStore = usePlaceStore();
  
      return {placeStore}

    },
  });
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  .text-Navy {
    color: #1f3c63;
  }
  </style>
   -->