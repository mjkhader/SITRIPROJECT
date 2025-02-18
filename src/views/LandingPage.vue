<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <JoinUsSection />
    <PopularDestinations />
    <FooterComponent />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import JoinUsSection from "@/components/JoinUsSection.vue";
import PopularDestinations from "@/components/DestinationsSection.vue";
import FooterComponent from "@/components/footer.vue";

export default {
  components: {
    HeroSection,
    ServicesSection,
    JoinUsSection,
    PopularDestinations,
    FooterComponent,
  },
};
</script>
