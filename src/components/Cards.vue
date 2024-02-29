<script setup>

import { ref, defineProps } from 'vue';
import Modal from './Modal.vue';
const { icon } = defineProps(['icon'])
const showModal = ref(false)

</script>

<template>  
  <div v-if="showModal" class="overlay">
      <div class="modal">
        <div class="card-modal" >
        <img :src='icon.img' />
        <div class="card-text">
          <h2> {{icon.name}}</h2>
          <h2> {{icon.import}}</h2>
          <h2> {{icon.tag}}</h2>
        </div>
      </div>
        <button @click="showModal = false" class="close">Close</button>
      </div>
    </div>


    <div class="card" @click="showModal = true">
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

.overlay {
  position: absolute;
  left: 0px;
  width: 100vw;
  height: 100vw;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;  
}

.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: fixed;
  top: 50%; /* Place the top of the modal at the vertical center of the window */
  left: 50%; /* Place the left edge of the modal at the horizontal center of the window */
  transform: translate(-50%, -50%); /* Use transform to center the modal precisely */
  
  display: flex;
  flex-direction: column;
}

.modal img {
  display: block;
  margin: 0 auto; /* Center horizontally */
}
img {
  display: block;
  align-items: center;
  justify-content: center;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: cadetblue;
  border: none;
  color: black;
  cursor: pointer;
  margin-top: 5px;
}

.modal .close {
  background-color: rgb(255, 34, 78);
  margin-top: 8px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.container {
  max-width: 90%;
  padding: 10px;
  margin: 0 auto;
}

.screen {
  width: 100vw;
  height: 100vh;
}
</style>