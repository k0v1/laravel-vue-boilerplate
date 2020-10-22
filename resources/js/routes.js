import VueRouter from "vue-router";

import Home from "./components/Home";

const routes = [
    { path: "/", component: Home, name: 'home'},
    { path: "/auth/login", component: require("./auth/Login").default, name: 'login'},
    { path: "/auth/register", component: require("./auth/Register").default, name: 'register'},
]

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
