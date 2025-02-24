<template>
  <div class="flex space-x-4 bg-white shadow-md p-4 rounded-lg">
    <img :src="image" alt="Hotel Image" class="rounded-lg w-32 h-32 object-cover">
    
    <div class="flex flex-col justify-between">
      <div>
        <h3 class="font-bold text-lg">{{ name }}</h3>
        <p class="text-gray-600 text-sm">{{ location }}</p>
      </div>

      <div>
        <base-badge v-for="service in services" :key="service" :type="service" :title="service"></base-badge>
      </div>

      <div>
        <span class="font-semibold text-blue-600 text-xl">JOD {{ price }}</span>
        <span class="text-gray-500 text-sm"> / night</span>
      </div>

      <div class="bg-blue-500 hover:bg-blue-600 mt-2 px-3 py-1 rounded-md text-white">
        <router-link :to="placesLink"> View details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaceCard",
  props: {
    id:Number,
    name:String,
    location:String,
    categories:String,
    image:String,
    services:Array,
    description:String,
  },
  computed : {
    placesLink(){
      return this.$route.path + '/'+ this.id  // /places/c1
    }
  }
};
</script>