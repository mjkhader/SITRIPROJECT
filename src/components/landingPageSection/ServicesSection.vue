<template>
  <section class="bg-white py-16 text-navy">
    <div class="mx-auto px-6 lg:px-20 container">
      <div class="mb-12 text-center">
        <h2 class="font-bold text-4xl">Our Travel Services</h2>
        <p class="opacity-90 mt-4 text-lg">
          Experience seamless travel planning with our premium services.
        </p>
      </div>

      <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="service in services"
          :key="service.id"
          class="bg-gradient-to-b from-sky-blue to-teal-blue shadow-lg p-6 rounded-xl text-center hover:scale-105 transition duration-300"
        >
          <div class="flex justify-center">
            <img
              :src="service.icon"
              :alt="service.title"
              class="mb-4 w-16 h-16"
            />
          </div>
          <h3 class="font-semibold text-2xl">{{ service.title }}</h3>
          <p class="opacity-80 mt-2 text-white">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "ServicesSection",
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Available Flights",
          description: "Discover available flights with ease!",
          icon: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
        },
        {
          id: 2,
          title: "Nearby Restaurants",
          description: "Discover the best restaurants near your location.",
          icon: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
        },
        {
          id: 3,
          title: "User Authentication",
          description: "Sign up and log in to access exclusive features.",
          icon: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
        },
        {
          id: 4,
          title: "Share Your Experience",
          description: "Leave reviews and share your travel experiences.",
          icon: "https://cdn-icons-png.flaticon.com/512/2345/2345492.png",
        },
        {
          id: 5,
          title: "Saved Flights",
          description: "Save your favorite flights for quick access later.",
          icon: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
        },
        {
          id: 6,
          title: "24/7 Support",
          description: "We are here to assist you anytime, anywhere.",
          icon: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
        },
      ],
    };
  },
};
</script>
  
  <style scoped>
</style>
  