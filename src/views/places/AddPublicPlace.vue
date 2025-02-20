<template>
    <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-3">
      <h2 class="text-2xl font-bold text-Navy mb-6">Add a Public Place</h2>
      <form id="placeForm" class="space-y-4">
        <!-- Add Photo -->
        <div>
          <label for="photo" class="block text-lg text-Navy font-medium mb-2">Add Photo</label>
          <input type="file" id="photo" name="photo" accept="image/*" class="w-full p-2 border-2 border-PewterBlue rounded-lg focus:outline-none focus:ring-2 focus:ring-TealBlue" />
        </div>
        
        <!-- Public Name -->
        <div>
          <label for="name" class="block text-lg text-Navy font-medium mb-2">Public Name</label>
          <input type="text" id="name" name="name" required class="w-full p-2 border-2 border-PewterBlue rounded-lg focus:outline-none focus:ring-2 focus:ring-TealBlue" />
        </div>
        
        <!-- Location -->
        <div>
          <label for="location" class="block text-lg text-Navy font-medium mb-2">Add Location</label>
          <input type="text" id="location" name="location" placeholder="Add The Location" required class="w-full p-2 border-2 border-PewterBlue rounded-lg focus:outline-none focus:ring-2 focus:ring-TealBlue" />
        </div>
        
        <!-- Category -->
        <div>
          <label for="category" class="block text-lg text-Navy font-medium mb-2">Categories</label>
          <select id="category" name="category" class="w-full p-2 border-2 border-PewterBlue rounded-lg focus:outline-none focus:ring-2 focus:ring-TealBlue">
            <option value="park">Park</option>
            <option value="restaurant">Restaurant</option>
            <option value="museum">Museum</option>
          </select>
        </div>
  
        <!-- Availability -->
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <input type="checkbox" id="wifi" name="services" value="wifi" class="h-5 w-5 text-TealBlue border-2 border-PewterBlue rounded-md focus:ring-TealBlue" />
            <label for="wifi" class="text-lg text-Navy">Wifi</label>
          </div>
          <div class="flex items-center space-x-2">
            <input type="checkbox" id="parking" name="services" value="parking" class="h-5 w-5 text-TealBlue border-2 border-PewterBlue rounded-md focus:ring-TealBlue" />
            <label for="parking" class="text-lg text-Navy">Parking</label>
          </div>
        </div>
  
        <!-- Description -->
        <div>
          <label for="description" class="block text-lg text-Navy font-medium mb-2">Description</label>
          <textarea id="description" name="description" rows="4" class="w-full p-2 border-2 border-PewterBlue rounded-lg focus:outline-none focus:ring-2 focus:ring-TealBlue"></textarea>
        </div>
        
        <!-- Submit Button -->
        <div>
          <button type="submit" class="w-full bg-teal-blue text-white p-3 rounded-lg hover:bg-TealBlue/90 focus:outline-none focus:ring-2 focus:ring-TealBlue">Add Place</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
    export default {
      
    }
  </script>
  
<style>
body {
  background-color: lightgray
}
</style>