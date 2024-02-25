<script setup>

import { defineProps } from 'vue';

const { icon } = defineProps(['icon'])

</script>

<template>
      <div class="card" >
        <img :src='icon.img' />
        <div class="card-text">
          <h2> {{icon.name}}</h2>
        </div>
      </div>

</template>

<style scoped>

.card {
  width: calc(25% - 20px);
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-top: 20px;
}
.card img {
  width: 100%;
  height: auto;
}
.card-text {
  padding: 0 5px;
}
.card-text h2 {
  font-weight: bold;
  text-align: center;
  font-size: 16px;
}

</style>