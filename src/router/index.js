import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Portfolio.vue"),
  },
   {
    path: "/rates_bundles",
    name: "Rates_Bundles",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Rates_Bundles.vue"),
  },
    // Footer
   {
    path: "/",
    name: "Terms of Service",
    component: Home,
  },
   {
    path: "/",
    name: "Privacy Policy",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
