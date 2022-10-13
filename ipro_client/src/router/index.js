import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});

router.beforeEach((to) => {
  if (!localStorage.getItem("access_token") && to.name === "home") {
    return { path: "/login" };
  } else if (
    localStorage.getItem("access_token") &&
    (to.name === "login" || to.name === "register")
  ) {
    return { path: "/" };
  }
});

export default router;
