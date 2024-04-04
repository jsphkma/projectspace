<template>
  <nav>
    <!-- Your navbar content goes here -->
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <!-- Add more navbar links as needed -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* Add navbar styles here */
nav {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  margin-right: 20px;
}

a {
  color: #fff;
  text-decoration: none;
}
</style>
