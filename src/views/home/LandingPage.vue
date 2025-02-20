<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <JoinUsSection />
    <PopularDestinations />
    <ShareExperienceSection/>
    <FooterComponent />
  </div>
</template>

<script>
import HeroSection from "@/components/landingPageSection/HeroSection.vue";
import ServicesSection from "@/components/landingPageSection/ServicesSection.vue";
import JoinUsSection from "@/components/landingPageSection/JoinUsSection.vue";
import PopularDestinations from "@/components/landingPageSection/DestinationsSection.vue";
import ShareExperienceSection from "@/components/landingPageSection/ShareExperienceSection.vue";
import FooterComponent from "@/components/public/footer.vue";

export default {
  components: {
    HeroSection,
    ServicesSection,
    JoinUsSection,
    PopularDestinations,
    ShareExperienceSection,
    FooterComponent,
  },
};
</script>
