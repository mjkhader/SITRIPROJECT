import { defineStore } from "pinia";

interface Place {
  id: number;
  image: string;
  name: string;
  location: string;
  categories: string;
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
        categories: 'park', 
        services: ['wifi', 'parking'],
        description: "This is the first place",
      },
      {
        id: 2,
        image: "",
        name: "Petra Premium Hotel",
        location: "Wadi Musa",
        categories: 'restaurant', 
        services: ['wifi'],
        description: "This is the second place",
      },
      {
        id: 3,
        image: "",
        name: "Edom Hotel",
        location: "Wadi Musa",
        categories: 'museum',
        services: ['parking'],
        description: "This is the third place",
      },
    ] 
})
});
