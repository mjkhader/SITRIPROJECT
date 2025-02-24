    <template>
      <div class="bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300">
        <div class="p-4">
          <h3 class="font-semibold text-gray-900 text-lg">{{ restaurant.name }}</h3>
          <p class="text-gray-600">{{ restaurant.parentGeoName }}</p>
          
          <div class="flex justify-between items-center mt-3">
            <p class="font-bold text-green-600">⭐ {{ restaurant.averageRating }}</p>
            <span 
              :class="restaurant.currentOpenStatusText === 'Open' ? 'text-green-500' : 'text-red-500'"
              class="font-medium text-sm"
            >
              {{ restaurant.currentOpenStatusText }}
            </span>
          </div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      props: {
        restaurant: Object, 
      },
    };
    </script>
    
    <style scoped>
    </style>
    