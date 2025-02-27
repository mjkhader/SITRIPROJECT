import { defineStore } from "pinia";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase"; // Adjust the path if needed

interface Place {
  id: string;
  image: string;
  name: string;
  location: string;
  categories: string;
  services: string[];
  description: string;
}

export const usePlaceStore = defineStore("placeStore", {
  state: () => ({
    places: [] as Place[],
  }),

  actions: {
    async fetchPlaces() {
      const querySnapshot = await getDocs(collection(db, "places"));
      this.places = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Place[];
    },

    async addPlace(newPlace: Omit<Place, "id">) {
      const docRef = await addDoc(collection(db, "places"), newPlace);
      this.places.push({ id: docRef.id, ...newPlace });
    },
  },
});
