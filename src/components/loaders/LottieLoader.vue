<template>
    <div ref="lottieContainer" class="w-40 h-40"></div>
  </template>
  
  <script>
  import { onMounted, ref } from "vue";
  import lottie from "lottie-web";
  
  export default {
    props: {
      animationPath: {
        type: String,
        required: true,
      },
      loop: {
        type: Boolean,
        default: true,
      },
      autoplay: {
        type: Boolean,
        default: true,
      },
    },
    setup(props) {
      const lottieContainer = ref(null);
  
      onMounted(() => {
        lottie.loadAnimation({
          container: lottieContainer.value,
          renderer: "svg",
          loop: props.loop,
          autoplay: props.autoplay,
          path: props.animationPath, // Path to animation JSON
        });
      });
  
      return { lottieContainer };
    },
  };
  </script>
  