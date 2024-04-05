<template>
  <div class="login-page-background">
    <Navbar />
    <!-- Include the Navbar component here -->
    <div class="login-container">
      <form @submit.prevent="login" class="login-form">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/auth.service";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const userRole = await AuthService.login(this.email, this.password);
        if (userRole === "admin") {
          this.$router.push("/admin");
        } else if (userRole === "client") {
          this.$router.push("/client");
        }
      } catch (error) {
        console.error("Login failed:", error);
        // Display an error message or handle the error
      }
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
html,
body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.login-page-background {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(10, 217, 119, 1) 54%,
    rgba(0, 212, 255, 1) 100%
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.login-container {
  background-color: #fff; /* White background color */
  padding: 20px; /* Padding around the form */
  border-radius: 8px; /* Rounded corners for the container */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Box shadow for a subtle depth effect */
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-message {
  color: red;
}
</style>
