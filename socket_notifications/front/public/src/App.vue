<script setup>
import { onMounted } from 'vue';
import { useSocketMainStore } from '@/stores/sockets/socket.main';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

const socketMainStore = useSocketMainStore();

onMounted(() => {
  socketMainStore.connect();
});

</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="you did it" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>LAB425 2023</footer>
</template>

<style scoped>
/* Your styles go here */
</style>
