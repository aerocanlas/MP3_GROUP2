<script setup>

import q from "./data/data.json";
import { ref, watch } from "vue";
import Cards from './components/Cards.vue'
import { RouterLink } from 'vue-router'

const icons = ref(q);
const search = ref("");


watch(search, () => {
  icons.value = q.filter(icon => icon.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>


<template>
  <div class="container">
    <header>
      <h1>Icons Repository</h1>
      <input type="text" v-model.trim="search" placeholder="Search icons..." />
      <Nav/>
    </header>
    
    <div class="options-container">
      <Cards v-for="icon in icons" :key="icon.id" :icon="icon"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}
header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 10px;
}
.options-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>