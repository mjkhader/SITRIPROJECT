<template>
    <div class="flex justify-center space-x-4 mt-8 mb-7">
      <button
        @click="$emit('prev')"
        :disabled="currentPage === 1"
        class="bg-gray-200 hover:bg-gray-300 disabled:opacity-50 px-4 py-2 rounded-lg text-gray-700"
      >
        «
      </button>
  
      <span class="mt-2 font-medium text-gray-700">
        Page {{ currentPage }} of {{ totalPages }}
      </span>
  
      <button
        @click="$emit('next')"
        :disabled="currentPage === totalPages"
        class="bg-gray-200 hover:bg-gray-300 disabled:opacity-50 px-4 py-2 rounded-lg text-gray-700"
      >
        »
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: Number,
      totalPages: Number,
    },
  };
  </script>
  