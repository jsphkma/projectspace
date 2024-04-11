import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";

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
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
