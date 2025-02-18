<template>
  <section class="bg-white py-16">
    <div class="mx-auto px-6 lg:px-20 container">
      <!-- Section Header -->
      <div class="mb-12 lg:text-left">
        <h2 class="font-bold text-Navy text-4xl text-center">
          Popular Destination For Your Explorer
        </h2>
      </div>

      <!-- Destination Cards Grid -->
      <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="destination in displayedDestinations"
          :key="destination.id"
          class="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition transform"
        >
          <img
            :src="destination.image"
            :alt="destination.title"
            class="w-full h-80 object-cover"
          />
          <div class="p-6">
            <h3 class="font-semibold text-Navy text-2xl text-center">
              {{ destination.title }}
            </h3>
            <p class="mt-2 text-TealBlue text-center">{{ destination.description }}</p>
           
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center space-x-2 mt-10">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="bg-gray-200 hover:bg-TealBlue p-2 rounded-full hover:text-white transition"
        >
          &lt;
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
          :class="[
            'p-3 w-10 h-10 rounded-full transition',
            currentPage === page
              ? 'bg-TealBlue text-white'
              : 'bg-gray-200 hover:bg-TealBlue hover:text-white',
          ]"
        >
          {{ page }}
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="bg-gray-200 hover:bg-TealBlue p-2 rounded-full hover:text-white transition"
        >
          &gt;
        </button>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "PopularDestinations",
  data() {
    return {
      currentPage: 1,
      perPage: 6,
      destinations: [
        {
          id: 1,
          title: "Rialto Bridge, Venezia",
          description:
            "Discover the beauty of Venice with its historic bridges and canals.",
          image: "/src/assets/imgs/dest01.jpg",
        },
        {
          id: 2,
          title: "Cold Mountain Lake",
          description:
            "Experience the serene beauty of a tranquil mountain lake.",
          image: "/src/assets/imgs/dest02.jpg",
        },
        {
          id: 3,
          title: "Beautiful House Beach",
          description:
            "Relax on pristine beaches with breathtaking ocean views.",
          image: "/src/assets/imgs/dest03.jpg",
        },
        {
          id: 4,
          title: "Icy Snow Mountains",
          description:
            "Witness the majestic snowy peaks perfect for adventure seekers.",
          image: "/src/assets/imgs/dest04.jpg",
        },
        {
          id: 5,
          title: " Hidden Valley Waters",
          description: "Discover a secluded lake tucked away in a breathtaking mountain valley.",
          image: "/src/assets/imgs/dest05.jpg",
        },
        {
          id: 6,
          title: "Beautiful Natural Mountains",
          description: "Hike through breathtaking mountain landscapes.",
          image: "/src/assets/imgs/dest06.jpg",
        },
        {
          id: 7,
          title: "Misty Forest",
          description:
            "Wander through enchanting misty forests full of mystery.",
          image: "/src/assets/imgs/dest07.jpg",
        },
        {
          id: 8,
          title: "Golden Desert",
          description:
            "Explore the endless golden dunes of the world's deserts.",
          image: "/src/assets/imgs/dest08.jpg",
        },
        {
          id: 9,
          title: "Island Paradise",
          description:
            "Escape to a tropical paradise surrounded by clear waters.",
          image: "/src/assets/imgs/dest09.jpg",
        },
      ],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.destinations.length / this.perPage);
    },
    displayedDestinations() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.destinations.slice(start, end);
    },
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
  },
};
</script>
  
  <style scoped>
</style>
  