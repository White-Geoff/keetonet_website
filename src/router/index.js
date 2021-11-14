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
    path: "/hosted_solutions",
    name: "Hosted Solutions",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Hosted_Solutions.vue"),
  },
   {
    path: "/graphics_design",
    name: "Graphics & Design",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Graphics_Design.vue"),
  },
    {
    path: "/advertising",
    name: "Advertising",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Advertising.vue"),
  },
    {
    path: "/applications",
    name: "Applications",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applications.vue"),
  },
    {
    path: "/custom_software",
    name: "Custom Software",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Custom_Software.vue"),
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
