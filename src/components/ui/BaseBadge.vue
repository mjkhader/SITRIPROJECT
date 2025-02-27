<template>
    <span class="badge" :class="type">
        {{text}}
    </span>
</template>
<script>

export default {
    props: ['type','title'],
    computed: {
        text(){
            return this.title.toUpperCase()
        }
    }

}


</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.2rem 1rem;
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  
}

.wifi {
  background-color: #3E6985;
  color: white;
}

.parking {
  background-color: #CDD7DF;
  color: white;
}

/* .career {
  background-color: #8d006e;
  color: white;
} */
</style>