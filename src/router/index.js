import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Portfolio.vue"),
  },
   {
    path: "/rates_bundles",
    name: "Rates & Bundles",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Rates_Bundles.vue"),
  },
    // Footer
   {
    path: "/terms_conditions",
    name: "Terms of Service",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Terms_Conditions.vue"),
  },
   {
    path: "/privacy_policy",
     name: "Privacy Policy",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Privacy_Policy.vue"),
  },
   //Rest of nav links
   {
    path: "/graphics_design",
    name: "Graphics & Design",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Graphics_Design.vue"),
  },
    {
    path: "/partners",
    name: "Partners",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Partners.vue"),
  },
    {
    path: "/digital_solutions",
    name: "Digital Solutions",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Digital_Solutions.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
