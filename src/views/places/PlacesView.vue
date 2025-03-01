<template>
  <div class="container mx-auto px-6 py-10">
    <!-- Main Card -->
    <base-card class="bg-white shadow-lg rounded-2xl p-6">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-3xl font-bold text-navy mb-6">Available Places</h1>
      </div>

        <div
          v-if="placeStore.isLoading"
          class="flex justify-center items-center mt-4 text-center"
        >
          <LottieAnimation animationPath="src/assets/animations/ticket.json" />
        </div>

      <!-- Places Grid -->
      <div v-else class="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        <place-card
          v-for="place in placeStore.places"
          :key="place.id"
          :id="place.id"
          :name="place.name"
          :location="place.location"
          :categories="place.categories"
          :image="place.image"
          :services="place.services"
          :description="place.description"
        ></place-card>
      </div>
    </base-card>

    <!-- Add Place Button -->
    <div class="flex justify-center mt-8">
      <base-button
        link
        mode="flat"
        to="/addPublicPlaces"
        class="bg-teal text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-blue transition"
      >
        Add a Public Place
      </base-button>
    </div>

    <!-- Footer -->
  </div>
    <FooterComponent/>
</template>

<script>
import FooterComponent from "@/components/layout/footer.vue";
import PlaceCard from "@/components/places/PlaceCard.vue";
import { usePlaceStore } from "@/stores/publicPlaceStore";
import BaseButton from '../../components/ui/BaseButton.vue';
import LottieAnimation from '@/components/loaders/LottieLoader.vue'

export default {
  components: {
    PlaceCard,
    FooterComponent,
    BaseButton,
    LottieAnimation
  },
  setup() {
    const placeStore = usePlaceStore();
    placeStore.fetchPlaces()
    return { placeStore };
  },
};
</script>
