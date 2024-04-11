import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";
import admin from "@/components/AdminPage.vue";
import user from "@/components/UserPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin",
    name: "Admin",
    component: admin,
  },
  {
    path: "/user",
    name: "User",
    component: user,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
