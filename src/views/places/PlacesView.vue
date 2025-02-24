<template>
  <div>
    <base-card>
      <div class="w-3/4">
        <h1 class="mb-4 font-bold text-2xl">Available Places</h1>

        <div class="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
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
      </div>
    </base-card>

    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/layout/footer.vue";
import PlaceCard from "@/components/places/PlaceCard.vue";
import PlaceDetails from "./PlacesDetails.vue"
import { usePlaceStore } from "@/stores/publicPlaceStore";
export default {
  components: {
    PlaceCard,
    FooterComponent,
    PlaceDetails
  },
  setup() {
    const placeStore = usePlaceStore()

    return {placeStore}
  },
};
</script>