import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import Songs from '../views/Songs.vue';

const routes = [
    {
        path: "/",
        name: "Početna",
        component: Home,
    },
    {
        path: "/songs",
        name: "Muzika",
        component: Songs
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
