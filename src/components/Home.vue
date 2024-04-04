<template>
  <div>
    <h1>Welcome to the Homepage</h1>
    <p>This is a simple homepage created with Vue.js</p>
    <router-link to="/login">Go to Login Page</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
