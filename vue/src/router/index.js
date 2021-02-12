import Vue from "vue";
import VueRouter from "vue-router";
import Ex0 from "../views/Ex0.vue";
import Ex1 from "../views/Ex1.vue";
import Ex2 from "../views/Ex2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/base",
    name: "Ex0",
    component: Ex0
  },
  {
    path: "/ex1",
    name: "Ex1",
    component: Ex1
  },
  {
    path: "/ex2",
    name: "Ex2",

    component: Ex2
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
