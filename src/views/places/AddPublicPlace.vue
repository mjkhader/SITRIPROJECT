<template>
  <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-3">
    <h2 class="text-2xl font-bold text-navy mb-6">Add a Public Place</h2>
    
    <form @submit.prevent="submitPlace" class="space-y-4">
      <!-- Add Photo -->
      <div>
        <label class="block text-lg text-navy font-medium mb-2">Add Photo</label>
        <input
          type="file"
          accept="image/*"
          class="w-full p-2 border-2 border-pewter-blue rounded-lg"
          @change="handleImageUpload"
        />
        
        <!-- Image Preview -->
        <div v-if="image">
          <img :src="image" alt="Uploaded Image" class="mt-4 w-full h-auto rounded-md shadow-sm"/>
        </div>
      </div>

      <!-- Public Name -->
      <div>
        <label class="block text-lg text-navy font-medium mb-2">Public Name</label>
        <input
          type="text"
          v-model="name"
          required
          class="w-full p-2 border-2 border-pewter-blue rounded-lg"
        />
      </div>

      <!-- Location -->
      <div>
        <label class="block text-lg text-navy font-medium mb-2">Add Location</label>
        <input
          type="text"
          v-model="location"
          required
          class="w-full p-2 border-2 border-pewter-blue rounded-lg"
        />
      </div>

      <!-- Category -->
      <div>
        <label class="block text-lg text-navy font-medium mb-2">Categories</label>
        <select v-model="categories" class="w-full p-2 border-2 border-pewter-blue rounded-lg">
          <option value="park">Park</option>
          <option value="restaurant">Restaurant</option>
          <option value="museum">Museum</option>
        </select>
      </div>

      <!-- Services -->
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2">
          <input type="checkbox" id="wifi" value="wifi" v-model="services" class="h-5 w-5" />
          <label for="wifi" class="text-lg text-navy">Wifi</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="checkbox" id="parking" value="parking" v-model="services" class="h-5 w-5" />
          <label for="parking" class="text-lg text-navy">Parking</label>
        </div>
      </div>

      <!-- Description -->
      <div>
        <label class="block text-lg text-navy font-medium mb-2">Description</label>
        <textarea v-model="description" rows="4" class="w-full p-2 border-2 border-pewter-blue rounded-lg"></textarea>
      </div>

      <!-- Submit Button -->
      <div>
        <button 
          type="submit"
          class="w-full bg-teal-blue text-white p-3 rounded-lg hover:bg-teal transition">
          Add Place
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { usePlaceStore } from "@/stores/publicPlaceStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const placeStore = usePlaceStore();
    const router = useRouter();

    // Form data
    const name = ref("");
    const image = ref("");
    const location = ref("");
    const categories = ref("park");
    const services = ref([]);
    const description = ref("");

    // Handle image upload
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        image.value = URL.createObjectURL(file);  // Store the image URL for preview
      }
    };

    // Submit form and add to Pinia
    const submitPlace = async () => {
        await placeStore.addPlace({
        image: image.value,
        name: name.value,
        location: location.value,
        categories: categories.value,
        services: services.value,
        description: description.value,
      });

      // Navigate to another route after submission
      router.push("/places");

      // Clear form after submission
      name.value = "";
      image.value = "";
      location.value = "";
      categories.value = "park";
      services.value = [];
      description.value = "";
    };

    return {
      name,
      image,
      location,
      categories,
      services,
      description,
      handleImageUpload,
      submitPlace,
    };
    
  },
};
</script>
