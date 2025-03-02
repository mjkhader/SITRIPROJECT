  <template>
  <div class="bg-white shadow-md p-4 rounded-lg">
    <img
      :src="restaurant.heroImgUrl"
      alt="Restaurant Image"
      class="rounded-lg w-full h-48 object-cover"
      @error="replaceWithDefault"
    />

    <div class="mt-4">
      <h2 class="font-semibold text-gray-900 text-lg">{{ restaurant.name }}</h2>

      <p class="text-gray-500 text-sm">{{ restaurant.parentGeoName }}</p>

      <div class="mt-2 text-gray-700 text-sm">
        <strong>Cuisine: </strong>
        <span v-if="restaurant.establishmentTypeAndCuisineTags?.length">
          {{ restaurant.establishmentTypeAndCuisineTags.join(", ") }}
        </span>
        <span v-else>Not available</span>
      </div>

      <div class="mt-2 text-gray-700 text-sm">
        <strong>Offers: </strong>
        <span v-if="restaurant.offers?.hasDelivery">Delivery available</span>
        <span v-else>No delivery</span> |
        <span v-if="restaurant.offers?.hasReservation"
          >Reservation available</span
        >
        <span v-else>No reservation</span>
      </div>

      <p class="mt-2 text-gray-500 text-sm">
        <strong>Rating:</strong> ⭐ {{ restaurant.averageRating }} ({{
          restaurant.userReviewCount
        }}
        reviews)
      </p>

      <div class="mt-3 text-gray-600 text-sm italic">
        <p v-if="restaurant.reviewSnippets?.reviewSnippetsList?.length">
          "{{ restaurant.reviewSnippets.reviewSnippetsList[0]?.reviewText }}"
        </p>
      </div>

      <a
        :href="'https://www.tripadvisor.com/' + restaurant.restaurantsId"
        target="_blank"
        class="inline-block mt-3 font-semibold text-blue-500 hover:underline"
      >
        View on TripAdvisor
      </a>
    </div>
  </div>
</template>
  
  <script>
import defaultRestaurantImg from "@/assets/imgs/default-restaurant.jpg";

export default {
  props: {
    restaurant: Object,
  },
  methods: {
    replaceWithDefault(event) {
      event.target.src = defaultRestaurantImg;
    },
  },
};
</script>
  