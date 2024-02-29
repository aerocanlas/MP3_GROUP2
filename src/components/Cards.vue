<script setup>

import { ref, defineProps } from 'vue';
const { icon } = defineProps(['icon'])
const showModal = ref(false)
import Swal from 'sweetalert2';


const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text).then(() => {
        Swal.fire({
  title: "Success",
  text: "Copied to clipboard",
  icon: "success"
});
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    };

</script>

<template>

  <div v-if="showModal" class="overlay">
      <div class="modal">
        <div class="card-modal" >
        <img :src='icon.img' />
        <div class="card-text">
          <h2> {{icon.name}}</h2>
          <h2 @click="copyToClipboard(icon.import)" style="cursor: pointer;">{{ icon.import }}</h2>
          <h2 @click="copyToClipboard(icon.tag)" style="cursor: pointer;"> {{icon.tag}}</h2>
        </div>
      </div>
        <button @click="showModal = false" class="close">Close</button>
      </div>
    </div>


    <div class="card" @click="showModal = true">
        <img :src='icon.img' />
<div class="card-content">
  <div class="card-title">
          <h2> {{icon.name}} </h2>
        </div>
</div>
      </div>
</template>

<style scoped>

.card {
  width: 300px;
  height: 300px;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  border-radius: 8px;
  color: white;
  overflow: hidden;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  cursor: pointer;
  margin: 30px auto;
}

.card-content {
  padding: 20px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}

.card-content .card-title {
  position: absolute;
  top: 50px;
  font-size: 12px;
  font-weight: 700;
  color: inherit;
  text-transform: none;
}

.card-content .card-para {
  color: inherit;
  opacity: 0.8;
  font-size: 12px;
}

.card:hover {
  transform: rotateY(10deg) rotateX(10deg) scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  z-index: 1;
}

.card:hover:before {
  transform: translateX(-100%);
}

.card:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  z-index: 1;
}

.card:hover:after {
  transform: translateX(100%);
}


.blob {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ff0000;
  opacity: 1;
  filter: blur(12px);
  animation: blob-bounce 5s infinite ease;
}

@keyframes blob-bounce {
  0% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }

  25% {
    transform: translate(-100%, -100%) translate3d(100%, 0, 0);
  }

  50% {
    transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
  }

  75% {
    transform: translate(-100%, -100%) translate3d(0, 100%, 0);
  }

  100% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
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
  text-transform: none;
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
  top: 300px;
  display: flex;
  flex-direction: column;
}

.card-modal img {
  margin-left: 70px;
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
  border-radius: 10px;
}

.modal .close {
  background-color: crimson;
  margin-top: 8px;
  transition: 0.3s all ease-in;
}
.modal .close:hover {
  color: white;
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