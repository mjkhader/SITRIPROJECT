 <template>
    <section>
        <base-card>
        <img :src="image" alt="">
        <h2>{{placeStore.places.name}}</h2>
        <h3>{{placeStore.places.location}}</h3>
        </base-card>
        <base-card>
        <header>
        <h2>Intersted? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
        </base-card>
    </section> 
    <section>
        <base-card>
        <base-badge v-for="service in placeStore.places.services" :key="service" :type="service" :title="service"></base-badge>
        <p>{{placeStore.places.categories}}</p>
        <p>{{placeStore.places.description}}</p>
        </base-card>
    </section>  
</template>
  
<script>
import { usePlaceStore } from "@/stores/publicPlaceStore";
export default {
  props:['id'],

  setup() {
    const placeStore = usePlaceStore()

    return {placeStore}
  },
  computed:{
    contactLink(){
        return this.$route.path + '/' +this.id+'/contact'
    }
  }
};
</script>  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  .text-Navy {
    color: #1f3c63;
  }
  </style>
   