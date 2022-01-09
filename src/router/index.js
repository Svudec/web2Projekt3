import { createRouter, createWebHistory } from "vuerouter";
import Test from '../views/test.vue';


const routes = [
  {
    path: "/",
    name: "Home",
    component: Test,
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
