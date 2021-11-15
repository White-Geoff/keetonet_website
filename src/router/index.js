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
      import(/* webpackChunkName: "portfolio" */ "../views/Portfolio.vue"),
  },
   {
    path: "/rates_bundles",
    name: "Rates & Bundles",
    component: () =>
      import(/* webpackChunkName: "rates & bundles" */ "../views/Rates_Bundles.vue"),
  },
    // Footer
   {
    path: "/terms_conditions",
    name: "Terms of Service",
    component: () =>
      import(/* webpackChunkName: "Terms and Conditions" */ "../views/Terms_Conditions.vue"),
  },
   {
    path: "/privacy_policy",
     name: "Privacy Policy",
    component: () =>
      import(/* webpackChunkName: "Privacy Policy" */ "../views/Privacy_Policy.vue"),
  },
   //Rest of nav links
   {
    path: "/graphics_design",
    name: "Graphics & Design",
    component: () =>
      import(/* webpackChunkName: "Graphics & design" */ "../views/Graphics_Design.vue"),
  },
    {
    path: "/partners",
    name: "Partners",
    component: () =>
      import(/* webpackChunkName: "Partners" */ "../views/Partners.vue"),
  },
    {
    path: "/digital_solutions",
    name: "Digital Solutions",
    component: () =>
      import(/* webpackChunkName: "Digital solutions" */ "../views/Digital_Solutions.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
