<template>
  <div class="bg-white shadow-2xl mx-auto mt-3 p-6 rounded-lg max-w-lg">
    <h2 class="mb-6 font-bold text-navy text-2xl">Add a Public Place</h2>
    <form id="placeForm" class="space-y-4">
      <!-- Add Photo -->
      <div>
        <label for="photo" class="block mb-2 font-medium text-navy text-lg"
          >Add Photo</label
        >
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          class="p-2 border-2 border-pewter-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-blue w-full"
        />
      </div>

      <!-- Public Name & Location -->
      <div class="flex space-x-4">
        <div class="w-1/2">
          <label for="name" class="block mb-2 font-medium text-navy text-lg"
            >Public Name</label
          >
          <input
            type="text"
            id="name"
            name="name"
            required
            class="p-2 border-2 border-pewter-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-blue w-full"
          />
        </div>

        <div class="w-1/2">
          <label for="location" class="block mb-2 font-medium text-navy text-lg"
            >Add Location</label
          >
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Add The Location"
            required
            class="p-2 border-2 border-pewter-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-blue w-full"
          />
        </div>
      </div>

      <!-- Category -->
      <div>
        <label for="category" class="block mb-2 font-medium text-navy text-lg"
          >Categories</label
        >
        <select
          id="category"
          name="category"
          class="p-2 border-2 border-pewter-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-blue w-full"
        >
          <option value="" disabled selected >Select a category</option>
          <option value="park">Park</option>
          <option value="restaurant">Restaurant</option>
          <option value="museum">Museum</option>
        </select>
      </div>

      <!-- Availability -->
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2">
          <input
            type="checkbox"
            id="wifi"
            name="services"
            value="wifi"
            class="border-2 border-pewter-blue rounded-md focus:ring-teal-blue w-5 h-5 text-teal-blue"
          />
          <label for="wifi" class="text-navy text-lg">Wifi</label>
        </div>
        <div class="flex items-center space-x-2">
          <input
            type="checkbox"
            id="parking"
            name="services"
            value="parking"
            class="border-2 border-pewter-blue rounded-md focus:ring-teal-blue w-5 h-5 text-teal-blue"
          />
          <label for="parking" class="text-navy text-lg">Parking</label>
        </div>
      </div>

      <!-- Description -->
      <div>
        <label
          for="description"
          class="block mb-2 font-medium text-navy text-lg"
          >Description</label
        >
        <textarea
          id="description"
          name="description"
          rows="4"
          class="p-2 border-2 border-pewter-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-blue w-full"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          class="bg-teal-blue hover:bg-teal-blue/90 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-blue w-full text-white"
        >
          Add Place
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  background-color: lightgray;
}
</style>