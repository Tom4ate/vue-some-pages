<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainTitle from './components/MainTitle.vue'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="item">
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div class="item">
          <RouterLink to="/login">Login</RouterLink>
        </div>
        <div class="item">
          <RouterLink to="/tickets">Tickets</RouterLink>
        </div>
        <div class="item">
          <RouterLink to="/search">Search</RouterLink>
        </div>

      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

nav {
  display: flex;
  align-items: center;
  justify-content: end;
  overflow: hidden;
  background-color: #131313ff ;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 10vh;
  z-index: 100;
}

nav .item {
  padding: 10px;
  float: right;
  color: #00ff00;
  display: grid;
  padding-top: 3vh;
  padding-bottom: 3vh;
  padding-left: 1vw;
  padding-right: 1vw;
  align-content: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: bold;
  height: 4vh;
}

.navbar .item:hover {
  cursor: pointer;
  color: #131313ff;
  background-color: #00ff00;
}

</style>
