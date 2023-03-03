
<template>
  <div class="login-container">
    <form>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username">

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password">

      <button type="submit" @click.prevent="login">Login</button>
    </form>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script lang="ts">
import { nextTick } from 'vue'
      
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async login() {
      if (this.username === 'tom4te' && this.password === 'root') {
        console.log('Login realizado com sucesso!');
      } else {
        this.errorMessage = 'Invalid credencials.'
      }
    }

  }
}

</script>

<style>
<!-- @media (min-width: 1024px) {} -->

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

label {
  margin-bottom: 10px;
}

input {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.error-message {
  color: red !important;
  margin-top: 20px;
}
</style>
