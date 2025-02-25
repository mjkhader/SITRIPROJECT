<template>
  <div class="container mx-auto p-6">
    <section v-if="selectedPlace" class="grid gap-6 lg:grid-cols-2">
      <!-- Image and Basic Info -->
      <base-card class="bg-white shadow-lg rounded-2xl p-6">
        <img 
          :src="selectedPlace.image || 'https://via.placeholder.com/400'"
          alt="Place Image"
          class="w-full h-64 object-cover rounded-xl shadow-md"
        />
        <h2 class="text-2xl font-bold text-navy mt-4">{{ selectedPlace.name }}</h2>
        <h3 class="text-teal text-lg">{{ selectedPlace.location }}</h3>
      </base-card>

      <!-- Contact Section -->
      <base-card class="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between">
        <header class="text-center">
          <h2 class="text-xl font-semibold text-navy mb-4">Interested? Reach out now!</h2>
          <base-button 
            link 
            :to="contactLink"
            class="bg-teal text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-blue transition"
          >
            Contact
          </base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>

    <!-- Services & Description -->
    <section v-if="selectedPlace" class="mt-6">
      <base-card class="bg-white shadow-lg rounded-2xl p-6">
        <div class="flex flex-wrap gap-2 mb-4">
          <base-badge
            v-for="service in selectedPlace.services"
            :key="service"
            :type="service"
            :title="service"
            class="bg-pewter-blue text-white px-3 py-1 rounded-lg text-sm shadow-sm"
          ></base-badge>
        </div>
        <p class="text-teal-blue font-medium"><strong>Category:</strong> {{ selectedPlace.categories }}</p>
        <p class="text-gray-700 mt-2">{{ selectedPlace.description }}</p>
      </base-card>
    </section>

    <!-- Loading State -->
    <p v-else class="text-center text-lg text-gray-500 mt-10">Loading...</p>
  </div>
      <FooterComponent/>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { usePlaceStore } from "@/stores/publicPlaceStore";
import FooterComponent from "@/components/layout/footer.vue";


export default defineComponent({
  components:{
    FooterComponent
  },
  setup() {
    const route = useRoute();
    const placeStore = usePlaceStore();

    // Find the selected place based on route ID
    const selectedPlace = computed(() => {
      return placeStore.places.find(
        (place) => place.id === Number(route.params.id)
      );
    });

    const contactLink = computed(() => `${route.path}/contact`);

    return {
      selectedPlace,
      contactLink,
    };
  },
});
</script>

<style scoped>
/* Tailwind styles are used, scoped CSS is optional */
</style>
