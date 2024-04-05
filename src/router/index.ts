import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";
import Admin from "@/components/AdminPage.vue";
import User from "@/components/UserPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
