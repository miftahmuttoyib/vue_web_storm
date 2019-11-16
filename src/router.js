import Vue from 'vue'
// import App from './App'
import Router from 'vue-router'

import Dashboard from './pages/Dashboard'
import Login from "@/pages/Login";
import Warehouse from "@/pages/Warehouse";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: Dashboard
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/warehouse",
            name: "warehouse",
            component: Warehouse
        }
    ]

});