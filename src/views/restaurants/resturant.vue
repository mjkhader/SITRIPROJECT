<template>
  <div class="flex flex-col min-h-screen">
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
        <div class="flex justify-between items-center mb-6">
          <div class="flex gap-3 w-full max-w-md">
            <input
              v-model="city"
              placeholder="Enter city name (e.g., Amman)"
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

        <div
          v-if="loading"
          class="flex justify-center items-center mt-8 text-center"
        >
          <LottieAnimation animationPath="src/assets/animations/ticket.json" />
        </div>

        <div v-else>
          <div
            v-if="paginatedRestaurants.length > 0"
            class="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            <ListingCard
              v-for="restaurant in paginatedRestaurants"
              :key="restaurant.restaurantsId"
              :restaurant="restaurant"
            />
          </div>

          <Pagination
            :currentPage="currentPage"
            :totalPages="totalPages"
            @prev="prevPage"
            @next="nextPage"
          />
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import ListingCard from "@/components/restaurant/ListingCard.vue";
import FooterComponent from "@/components/layout/footer.vue";
import { getLocationId, fetchRestaurants } from "@/api/restaurantsService";
import LottieAnimation from "@/components/loaders/LottieLoader.vue";
import Pagination from "@/components/layout/Pagination.vue";

export default {
  components: { ListingCard, FooterComponent, LottieAnimation, Pagination },
  data() {
    return {
      city: "",
      restaurants: [],
      filteredRestaurants: [],
      loading: false,
      searching: false,
      sortOrder: "", // asc or desc
      statusFilter: "", // Open or Closed
      currentPage: 1,
      itemsPerPage: 6,
    };
  },
  computed: {
    paginatedRestaurants() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredRestaurants.slice(start, end);
    },
    totalPages() {
      return (
        Math.ceil(this.filteredRestaurants.length / this.itemsPerPage) || 1
      );
    },
  },
  methods: {
    async searchRestaurants() {
      this.loading = true;
      try {
        const locationId = await getLocationId(this.city);
        this.restaurants = await fetchRestaurants(locationId);
        this.restaurants = this.restaurants.map((restaurant) => {
          if (
            !restaurant.heroImgUrl ||
            !restaurant.heroImgUrl.startsWith("http")
          ) {
            restaurant.heroImgUrl = require("@/assets/imgs/default-restaurant.jpg");
          }
          return restaurant;
        });
        this.filteredRestaurants = [...this.restaurants];
        this.currentPage = 1;
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
      this.currentPage = 1;
    },
    filterRestaurants() {
      if (this.statusFilter) {
        this.filteredRestaurants = this.restaurants.filter((restaurant) => {
          const statusText = restaurant.currentOpenStatusText
            ? restaurant.currentOpenStatusText.toLowerCase()
            : "";
          return this.statusFilter === "Open"
            ? statusText.includes("open")
            : statusText.includes("closed");
        });
      } else {
        this.filteredRestaurants = [...this.restaurants];
      }
      this.currentPage = 1;
    },
    applyFilters() {
      this.filterRestaurants();
      this.sortRestaurants();
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>
