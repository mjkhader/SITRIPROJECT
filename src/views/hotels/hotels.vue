<template>
  <div>
    <div class="flex space-x-6 mx-auto py-10 container">
      <SidebarFilter />
      <div class="w-3/4">
        <h1 class="mb-4 font-bold text-2xl">Available Properties</h1>

        <div class="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <ListingCard
            v-for="property in properties"
            :key="property.id"
            :title="property.title"
            :location="property.location"
            :price="property.price"
            :image="property.image"
          />
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import { ref } from "vue"; 
import SidebarFilter from "@/components/hotels/sidebar.vue";
import ListingCard from "@/components/hotels/ListingCard.vue";
import FooterComponent from "@/components/public/footer.vue";

export default {
  name: "ListingsPage",
  components: {
    SidebarFilter,
    ListingCard,
    FooterComponent,
  },
  setup() {
    
    const properties = ref([
      {
        id: 1,
        title: "Petra Voila",
        location: "Wadi Musa",
        price: 63,
        image: "",
      },
      {
        id: 2,
        title: "Petra Premium Hotel",
        location: "Wadi Musa",
        price: 93,
        image: "",
      },
      {
        id: 3,
        title: "Edom Hotel",
        location: "Wadi Musa",
        price: 148,
        image: "",
      },
    ]);
    
    return {
      properties,
    };
  },
};
</script>
