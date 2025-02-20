<template>
  <section
    class="relative bg-gradient-to-b from-teal-blue to-sky-blue py-16 overflow-hidden text-white"
  >
    <div class="absolute inset-0">
      <div class="top-8 left-12 absolute">
        <img
          src="https://cdn-icons-png.flaticon.com/512/414/414927.png"
          alt="Cloud"
          class="opacity-50 w-16"
        />
      </div>
      <div class="top-16 right-20 absolute">
        <img
          src="https://cdn-icons-png.flaticon.com/512/414/414927.png"
          alt="Cloud"
          class="opacity-50 w-20"
        />
      </div>
    </div>

    <div
      class="relative flex lg:flex-row flex-col-reverse justify-between items-center mx-auto px-6 lg:px-20 container"
    >
      <div
        class="relative flex justify-center lg:justify-start mt-10 lg:mt-0 lg:w-1/2"
      >
        <div class="relative">
          <div
            class="-top-[30px] -right-[30px] absolute bg-teal-blue opacity-60 rounded-full w-[350px] h-[420px]"
          ></div>
          <div
            class="-bottom-[30px] -left-[30px] absolute bg-teal-blue opacity-50 rounded-full w-[300px] h-[350px]"
          ></div>

          <video
            class="relative shadow-lg border-8 border-sky-blue rounded-full w-[350px] h-[450px] object-cover"
            autoplay
            muted
            loop
          >
            <source src="@/assets/videos/vid01.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div class="relative lg:w-1/2 lg:text-left text-center">
        <h2 class="font-bold text-4xl text-center">
          Share Your Travel Experiences!
        </h2>
        <p class="opacity-90 mt-4 text-lg text-center">
          Capture your favorite travel moments, rate destinations, and inspire
          fellow travelers!
        </p>

        <div class="flex justify-center lg:justify-center mt-6">
          <button
            @click="$router.push('/addPublicPlaces')"
            class="bg-sky-blue hover:bg-teal-blue shadow-md px-6 py-3 rounded-full font-semibold text-teal-blue hover:text-navy transition duration-300"
          >
            Share Your Experience
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
