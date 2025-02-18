<template>
  <section class="bg-TealBlue py-16">
    <div
      class="flex lg:flex-row flex-col-reverse items-center mx-auto px-6 lg:px-20 container"
    >
      <div class="relative flex justify-center lg:justify-start lg:w-1/2">
        <div class="relative">
          <div
            class="-top-10 -right-10 absolute bg-PastelBlue opacity-50 rounded-full w-40 h-40"
          ></div>
          <div
            class="-bottom-10 -left-10 absolute bg-PastelBlue opacity-60 rounded-full w-56 h-56"
          ></div>
          <img
            src="@/assets/imgs/joinusimg.jpg"
            alt="Travel Experience"
            class="relative shadow-lg rounded-3xl w-96 h-96 object-cover"
          />
        </div>
      </div>

      <div class="mt-10 lg:mt-0 lg:w-1/2 lg:text-left text-center">
        <h2 class="font-bold text-ColumbiaBlue text-4xl text-center">
          Come Join Us And Start Your Trip
        </h2>

        <div class="flex flex-wrap justify-center lg:justify-center gap-6 mt-8">
          <div class="text-center">
            <h3 class="font-bold text-ColumbiaBlue text-3xl">750+</h3>
            <p class="text-PastelBlue">Happy Travelers</p>
          </div>
          <div class="text-center">
            <h3 class="font-bold text-ColumbiaBlue text-3xl">500+</h3>
            <p class="text-PastelBlue">Destinations</p>
          </div>
          <div class="text-center">
            <h3 class="font-bold text-ColumbiaBlue text-3xl">120+</h3>
            <p class="text-PastelBlue">Guided Tours</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "JoinUsSection",
};
</script>
  
  <style scoped>
</style>
  