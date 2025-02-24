<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>

export default {
    props:{
        mode:{
             type:String,
            required:false,
            default:null
        },
        link:{
            type:Boolean,
            required:false,
            default:false
        },
        to:{
            type:String,
            required:false,
            default:'/'
        },
    }    
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 12px 24px;
  font: inherit;
  cursor: pointer;
  border-radius: 9999px;
  display: inline-block;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

/* Flat Button (Filled) */
.flat {
  background-color: #3E6985; /*teal-blue*/
  color: #C8D9E6; /* sky-blue */
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #A6BED1; /* pastel-blue */
  color: #2F4156; /* navy */
}

/* Outline Button */
.outline {
  background-color: #C8D9E6; /* sky-blue */
  color: #3E6985; /* teal-blue */
  border: none; /* teal-blue */
}

.outline:hover,
.outline:active {
  background-color: #A6BED1; /* pastel-blue */
  color: #2F4156; /* navy */
}

</style>
