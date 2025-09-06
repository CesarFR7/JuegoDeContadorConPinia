import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Info from "@/components/Info.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home, name: Home },
    { path: "/info", component: Info, name: Info },
  ],
});

export default router;
