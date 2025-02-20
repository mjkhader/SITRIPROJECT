<template>
  <section
    class="relative bg-gradient-to-b from-sky-blue to-teal-blue py-16 overflow-hidden text-white"
  >
    <div class="absolute inset-0">
      <div class="top-8 left-12 absolute">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
          alt="Cloud"
          class="opacity-50 w-16"
        />
      </div>
      <div class="top-16 right-20 absolute">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
          alt="Cloud"
          class="opacity-50 w-20"
        />
      </div>
      <div class="top-4 right-10 absolute">
        <img
          src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
          alt="Airplane"
          class="w-12 rotate-45"
        />
      </div>
    </div>

    <div
      class="z-10 relative flex lg:flex-row flex-col justify-between items-center mx-auto px-6 lg:px-20 container"
    >
      <div class="relative -mt-6 lg:w-1/2 text-center lg:text-center">
        <h2 class="font-bold text-4xl">
          Explore Your Most Favorite Destinations
        </h2>
        <p class="opacity-90 mt-4 text-lg">
          Embark on unforgettable journeys to the world's most breathtaking
          destinations. Experience new cultures, stunning landscapes, and unique
          adventures tailored just for you.
        </p>

        <div class="flex justify-center lg:justify-center space-x-4 mt-6">
          <button
            class="bg-teal-blue hover:bg-pastel-blue shadow-md px-6 py-3 rounded-full font-semibold text-sky-blue hover:text-navy transition duration-300"
          >
            Get Started
          </button>
          <button
            class="bg-sky-blue hover:bg-pastel-blue shadow-md px-6 py-3 border border-teal-blue rounded-full font-semibold text-teal-blue hover:text-navy transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      <div
        class="relative flex justify-center lg:justify-end mt-10 lg:mt-0 lg:w-1/2"
      >
        <div class="relative">
          <div
            class="-top-10 -right-10 absolute bg-teal-blue opacity-60 rounded-full w-96 h-96"
          ></div>
          <div
            class="-bottom-10 -left-10 absolute bg-teal-blue opacity-50 rounded-full w-80 h-80"
          ></div>
          <img
            src="@/assets/imgs/img01.jpg"
            alt="Travel"
            class="relative shadow-lg border-8 border-sky-blue rounded-full w-96 h-96 object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
</style>

