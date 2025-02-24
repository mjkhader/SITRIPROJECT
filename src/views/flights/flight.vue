<template>
  <div class="bg-white min-h-screen">
    <div class="bg-gray-100 py-6">
      <div class="mx-auto px-4 max-w-6xl">
        <h1 class="font-semibold text-navy text-2xl">Available Flights</h1>
        <nav class="mt-2 text-gray-500 text-sm">
          <router-link to="/" class="text-gray-700 hover:text-navy"
            >Home</router-link
          >
          <span class="mx-1">›</span>
          <span class="text-gray-400">Flights Page</span>
        </nav>
      </div>
    </div>

    <SearchInput v-model="fromEntityId" @search="searchFlights" />

    <div class="mx-auto mt-6 px-4 max-w-7xl">
      <div class="flex space-x-4 overflow-auto">
        <button
          v-for="bucket in buckets"
          :key="bucket.id"
          @click="selectCategory(bucket.id)"
          class="px-4 py-2 rounded-lg font-medium text-sm"
          :class="{
            'bg-blue-500 text-white': selectedCategory === bucket.id,
            'bg-gray-200 text-gray-700': selectedCategory !== bucket.id,
          }"
        >
          {{ bucket.label }}
        </button>
      </div>
    </div>

    <div v-if="loading" class="mt-8 text-center">
      <p class="text-gray-600">Loading...</p>
    </div>

    <div v-else class="mx-auto mt-8 px-4 max-w-5xl">
      <div
        v-if="selectedResults.length === 0"
        class="text-gray-500 text-center"
      >
        Please select a category to view results.
      </div>

      <div
        class="gap-4 grid grid-cols-1 md:grid-cols-2"
        v-if="selectedResults.length > 0"
      >
        <div
          v-for="resultId in paginatedResults"
          :key="resultId"
          class="bg-white shadow-md p-4 rounded-lg"
        >
          <div v-if="getResultById(resultId)">
            <h3 class="font-medium text-lg">
              {{ getResultById(resultId).content.location.name }}
            </h3>
            <p class="mt-2 text-gray-600">
              Cheapest Flight:
              {{
                getResultById(resultId)?.content?.flightQuotes?.cheapest
                  ?.price ?? "N/A"
              }}
              ({{
                getResultById(resultId)?.content?.flightQuotes?.cheapest?.direct
                  ? "Direct"
                  : "Indirect"
              }})
            </p>
            <a
              :href="`https://www.booking.com/searchresults.en-gb.html?ss=${encodeURIComponent(
                getResultById(resultId).content.location.name
              )}`"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              View on Booking.com
            </a>
            <img
              :src="getResultById(resultId).content.image.url"
              :alt="getResultById(resultId).content.location.name"
              class="mt-4 rounded-lg w-full h-32 object-cover"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-center space-x-4 mt-8 mb-7">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="bg-gray-200 hover:bg-gray-300 disabled:opacity-50 px-4 py-2 rounded-lg text-gray-700"
        >
          «
        </button>

        <span class="mt-2 font-medium text-gray-700">
          Page {{ currentPage }} of {{ totalPages }}
        </span>

        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="bg-gray-200 hover:bg-gray-300 disabled:opacity-50 px-4 py-2 rounded-lg text-gray-700"
        >
          »
        </button>
      </div>
    </div>
  </div>

  <FooterComponent />
</template>

<script>
import { searchFlights } from "@/api/flightsService.js";
import SearchInput from "@/components/flights/SearchInput.vue";
import FooterComponent from "@/components/layout/footer.vue";

export default {
  components: {
    SearchInput,
    FooterComponent,
  },
  data() {
    return {
      fromEntityId: "",
      buckets: [],
      results: [],
      selectedCategory: null,
      loading: false,
      currentPage: 1,
      itemsPerPage: 6,
    };
  },
  computed: {
    selectedResults() {
      const selectedBucket = this.buckets.find(
        (bucket) => bucket.id === this.selectedCategory
      );
      return selectedBucket ? selectedBucket.resultIds : [];
    },
    paginatedResults() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.selectedResults.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.selectedResults.length / this.itemsPerPage);
    },
  },
  methods: {
    async searchFlights(fromEntityId) {
      if (!fromEntityId) {
        alert("Please enter a valid origin entity ID.");
        return;
      }

      this.loading = true;
      try {
        const data = await searchFlights(fromEntityId);
        this.buckets = data.buckets;
        this.results = data.results;

        // Select first category by default
        if (this.buckets.length > 0) {
          this.selectedCategory = this.buckets[0].id;
        }
      } catch (error) {
        alert(error.message);
      } finally {
        this.loading = false;
      }
    },
    getResultById(resultId) {
      return this.results.find((result) => result.id === resultId);
    },
    selectCategory(categoryId) {
      this.selectedCategory = categoryId;
      this.currentPage = 1;
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
  mounted() {
    this.searchFlights("AMM");
  },
};
</script>


   


    