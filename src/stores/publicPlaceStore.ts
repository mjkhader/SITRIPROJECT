import { defineStore } from "pinia";

interface Place {
  id: number;
  image: string;
  name: string;
  location: string;
  categories: string[];
  services: string[];
  description: string;
}

export const usePlaceStore = defineStore("placeStore", {
  state: () => ({
    places: [
      {
        id: 1,
        image: "",
        name: "Petra Voila",
        location: "Wadi Musa",
        categories: ['park'],
        services: ['wifi', 'parking'],
        description: "This is the first place",
      },
      {
        id: 2,
        image: "",
        name: "Petra Premium Hotel",
        location: "Wadi Musa",
        categories: ['restaurant'],
        services: ['wifi'],
        description: "This is the second place",
      },
      {
        id: 3,
        image: "",
        name: "Edom Hotel",
        location: "Wadi Musa",
        categories: ['museum'],
        services: ['parking'],
        description: "This is the third place",
      },
    ] as Place[], // Type the places array as Place[]
    categoriesOptions: ['restaurant', 'park', 'museum', 'hotel', 'shop'] as string[], // Category options array
    servicesOptions: ['wifi', 'parking', 'pool', 'gym'] as string[], // Services options array
  }),
  getters: {
    getPlacesByCategory: (state) => (category: string) => {
      return state.places.filter((place) => place.categories.includes(category));
    },
  },
  actions: {
    addPlace(newPlace: Place) {
      this.places.push(newPlace);
    },
    updateCategories(placeId: number, selectedCategories: string[]) {
      const place = this.places.find((p) => p.id === placeId);
      if (place) {
        place.categories = selectedCategories;
      }
    },
    updateServices(placeId: number, selectedServices: string[]) {
      const place = this.places.find((p) => p.id === placeId);
      if (place) {
        place.services = selectedServices;
      }
    },
  },
});
