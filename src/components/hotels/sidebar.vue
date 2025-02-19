<template>
  <aside class="bg-white shadow-md p-6 rounded-lg w-1/4">
    <h2 class="mb-4 font-semibold text-lg">Filter by:</h2>

    <div class="mb-4">
      <label class="block mb-2 font-medium">Your budget (per night)</label>
      <input type="range" min="10" max="500" v-model="budget" class="w-full" />
      <p class="text-gray-600 text-sm">Up to JOD {{ budget }}</p>
    </div>

    <div class="mb-4">
      <h3 class="font-medium">Popular Filters</h3>
      <div
        v-for="filter in popularFilters"
        :key="filter.id"
        class="flex items-center mt-2"
      >
        <input
          type="checkbox"
          :id="filter.id"
          v-model="selectedFilters"
          :value="filter.id"
        />
        <label :for="filter.id" class="ml-2 text-sm">{{ filter.label }}</label>
      </div>
    </div>

    <div>
      <h3 class="font-medium">Sort By:</h3>
      <select v-model="sortBy" class="mt-2 p-2 border rounded w-full">
        <option value="price">Lowest Price</option>
        <option value="rating">Highest Rating</option>
        <option value="popular">Most Popular</option>
      </select>
    </div>
  </aside>
</template>
  
  <script>
export default {
  name: "SidebarFilter",
  data() {
    return {
      budget: 100,
      selectedFilters: [],
      sortBy: "popular",
      popularFilters: [
        { id: "breakfast", label: "Breakfast Included" },
        { id: "parking", label: "Free Parking" },
        { id: "wifi", label: "Free Wi-Fi" },
        { id: "pool", label: "Swimming Pool" },
      ],
    };
  },
};
</script>
  