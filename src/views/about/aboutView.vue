<template>
  <div>
    <div class="container mx-auto py-10">
      <h1 class="text-4xl font-bold text-center mb-10">Meet Our Team</h1>

      <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div
          v-for="member in teamMembers"
          :key="member.id"
          class="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center"
        >
          <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full object-cover mb-4" />
          <h2 class="text-2xl font-semibold">{{ member.name }}</h2>
          <p class="text-gray-600">{{ member.role }}</p>
          <p class="mt-2 text-gray-700">{{ member.description }}</p>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/layout/footer.vue";
import AmalImage from "@/assets/imgs/amal.jpeg";
import lujainImage from "@/assets/imgs/lujain.jpeg";
import fatimaImage from "@/assets/imgs/fatima.jpeg";
import majdImage from "@/assets/imgs/majd.png";

export default {
 components: {
    FooterComponent,
  },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: "Amal Salah",
          role: "Full stack Developer",
          description: "Passionate about creating user-friendly web applications with Vue.js.",
          image: AmalImage,
        },
        {
          id: 2,
          name: "Lujain Almasssri",
          role: "Full stack Developer",
          description: "Enjoys working on both front-end and back-end development.",
          image: lujainImage,
        },
        {
          id: 3,
          name: "Fatima Qadomi",
          role: "Full stack Developer",
          description: "Dedicated to building responsive and accessible web applications.",
          image: fatimaImage,
        },
        {
          id: 4,
          name: "Majd Khader",
          role: "Full stack Developer",
          description: "Aims to create seamless user experiences through effective design and functionality.",
          image: majdImage,
        },
      ],
    };
  },
};
</script>