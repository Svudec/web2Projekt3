import { createRouter, createWebHistory } from "vue-router";
import Test from '../views/test.vue';
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Test,
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    }
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
