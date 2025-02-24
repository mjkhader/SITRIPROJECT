<!-- <template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <div class="bg-gray-100 py-6">
        <div class="mx-auto px-4 max-w-6xl">
          <h1 class="font-semibold text-navy text-2xl">Suggested Restaurants</h1>
          <nav class="mt-2 text-gray-500 text-sm">
            <router-link to="/" class="text-gray-700 hover:text-navy">Home</router-link>
            <span class="mx-1">›</span>
            <span class="text-gray-400">Restaurants Page</span>
          </nav>
        </div>
      </div>
    <div class="flex flex-1">
      <div class="flex-1 p-6">
        <div class="flex justify-end mb-6">
          <div class="flex gap-3 w-full max-w-md">
            <input
              v-model="city"
              placeholder="Enter city name (e.g., London)"
              class="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              @keyup.enter="searchRestaurants"
            />
            <button
              @click="searchRestaurants"
              class="bg-teal hover:bg-sky-blue px-4 py-3 rounded-full font-semibold text-white hover:text-navy"
            >
              Search
            </button>
          </div>
        </div>

        <div v-if="loading" class="text-center">
          <p>Loading...</p>
        </div>

        <div v-else>
          <div
            v-if="restaurants.length > 0"
            class="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            <ListingCard
              v-for="restaurant in restaurants"
              :key="restaurant.restaurantsId"
              :restaurant="restaurant"
            />
          </div>
          <div v-else-if="city && !loading" class="text-gray-500 text-center">
            <p>No restaurants found.</p>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import Navbar from "@/components/layout/NavBar.vue";
import ListingCard from "@/components/restaurant/ListingCard.vue";
import FooterComponent from "@/components/layout/footer.vue";
import { getLocationId, fetchRestaurants } from "@/api/restaurantsService";

export default {
  components: { Navbar, ListingCard, FooterComponent },
  data() {
    return {
      city: "",
      restaurants: [],
      loading: false,
    };
  },
  methods: {
    async searchRestaurants() {
      this.loading = true;
      try {
        const locationId = await getLocationId(this.city);
        this.restaurants = await fetchRestaurants(locationId);
      } catch (error) {
        console.error("Error:", error);
        this.restaurants = [];
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.flex.justify-end {
  margin-top: 0;
}
</style> -->


<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <div class="bg-gray-100 py-6">
      <div class="mx-auto px-4 max-w-6xl">
        <h1 class="font-semibold text-navy text-2xl">Suggested Restaurants</h1>
        <nav class="mt-2 text-gray-500 text-sm">
          <router-link to="/" class="text-gray-700 hover:text-navy"
            >Home</router-link
          >
          <span class="mx-1">›</span>
          <span class="text-gray-400">Restaurants Page</span>
        </nav>
      </div>
    </div>
    <div class="flex flex-1">
      <div class="flex-1 p-6">
        <!-- Search Bar -->
        <div class="flex justify-between items-center mb-6">
          <div class="flex gap-3 w-full max-w-md">
            <input
              v-model="city"
              placeholder="Enter city name (e.g., London)"
              class="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              @keyup.enter="searchRestaurants"
            />
            <button
              @click="searchRestaurants"
              class="bg-teal hover:bg-sky-blue px-4 py-3 rounded-full font-semibold text-white hover:text-navy"
            >
              Search
            </button>
          </div>

          <!-- Sorting & Filtering Options -->
          <div class="flex gap-3">
            <select
              v-model="sortOrder"
              @change="sortRestaurants"
              class="p-2 border rounded-lg"
            >
              <option value="">Sort by Rating</option>
              <option value="asc">Lowest to Highest</option>
              <option value="desc">Highest to Lowest</option>
            </select>

            <select
              v-model="statusFilter"
              @change="applyFilters"
              class="p-2 border rounded-lg"
            >
              <option value="">All Statuses</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        <div v-if="loading" class="text-center">
          <p>Loading...</p>
        </div>

        <div v-else>
          <div
            v-if="filteredRestaurants.length > 0"
            class="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            <ListingCard
              v-for="restaurant in filteredRestaurants"
              :key="restaurant.restaurantsId"
              :restaurant="restaurant"
            />
          </div>
          <div v-else-if="city && !loading" class="text-gray-500 text-center">
            <p>No restaurants found.</p>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import Navbar from "@/components/layout/NavBar.vue";
import ListingCard from "@/components/restaurant/ListingCard.vue";
import FooterComponent from "@/components/layout/footer.vue";
import { getLocationId, fetchRestaurants } from "@/api/restaurantsService";

export default {
  components: { Navbar, ListingCard, FooterComponent },
  data() {
    return {
      city: "",
      restaurants: [],
      filteredRestaurants: [],
      loading: false,
      sortOrder: "", // asc or desc
      statusFilter: "", // Open or Closed
    };
  },
  methods: {
    async searchRestaurants() {
      this.loading = true;
      try {
        const locationId = await getLocationId(this.city);
        this.restaurants = await fetchRestaurants(locationId);
        this.filteredRestaurants = [...this.restaurants]; // Copy initial data
      } catch (error) {
        console.error("Error:", error);
        this.restaurants = [];
        this.filteredRestaurants = [];
      } finally {
        this.loading = false;
      }
    },

    sortRestaurants() {
      if (this.sortOrder === "asc") {
        this.filteredRestaurants.sort(
          (a, b) => a.averageRating - b.averageRating
        );
      } else if (this.sortOrder === "desc") {
        this.filteredRestaurants.sort(
          (a, b) => b.averageRating - a.averageRating
        );
      }
    },

    filterRestaurants() {
      console.log("Applying status filter:", this.statusFilter);
      if (this.statusFilter) {
        this.filteredRestaurants = this.restaurants.filter((restaurant) => {
          const statusText = restaurant.currentOpenStatusText
            ? restaurant.currentOpenStatusText.toLowerCase()
            : ""; // تأكد أن `currentOpenStatusText` ليس `null`

          console.log(
            "Checking restaurant:",
            restaurant.name,
            "Status:",
            statusText
          ); // تحقق من القيم

          if (this.statusFilter === "Open") {
            return statusText.includes("open");
          } else if (this.statusFilter === "Closed") {
            return statusText.includes("closed");
          }
          return true;
        });
      } else {
        this.filteredRestaurants = [...this.restaurants];
      }

      console.log("Filtered Restaurants:", this.filteredRestaurants);
    },

    applyFilters() {
      this.filterRestaurants();
      this.sortRestaurants();
      this.$forceUpdate(); 
    },
  },
};
</script>

<style scoped>
.flex.justify-end {
  margin-top: 0;
}
</style>
