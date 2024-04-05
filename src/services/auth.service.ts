export default {
  login(email: String, password: String) {
    // Here, you would typically make an API call to your backend
    // to authenticate the user with the provided credentials
    // For this example, we'll simulate a successful login
    if (email === "admin@admin.com" && password === "password") {
      localStorage.setItem("user", "admin");
      return Promise.resolve("admin");
    } else if (email === "client@user.com" && password === "password") {
      localStorage.setItem("user", "client");
      return Promise.resolve("client");
    } else {
      return Promise.reject("Invalid credentials");
    }
  },

  logout() {
    localStorage.removeItem("user");
  },

  isAuthenticated() {
    return !!localStorage.getItem("user");
  },

  getUserRole() {
    return localStorage.getItem("user");
  },
};
