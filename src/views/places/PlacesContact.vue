<template>
  <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
    <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
    
    <form class="space-y-4">
      <!-- Email Field -->
      <div>
        <label for="email" class="block text-lg font-medium text-gray-700 mb-2">Your E-mail</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Enter your email" 
          class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        />
      </div>

      <!-- Message Field -->
      <div>
        <label for="message" class="block text-lg font-medium text-gray-700 mb-2">Message</label>
        <textarea 
          id="message" 
          rows="5" 
          placeholder="Write your message here..." 
          class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-center">
        <base-button 
          class="w-full bg-teal-blue text-white p-3 rounded-lg hover:bg-teal transition">
          Send Message
        </base-button>
      </div>
    </form>
  </div>
</template>
