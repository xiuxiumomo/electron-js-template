import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/index.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: () => import("@r/views/about/index.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
