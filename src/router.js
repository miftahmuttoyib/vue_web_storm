import Vue from 'vue'
// import App from './App'
import Router from 'vue-router'

import Dashboard from './pages/Dashboard'
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import ForgotPassword from "@/pages/ForgotPassword";
import Warehouse from "@/pages/Warehouse";
import Problem from "@/pages/Problem";
import Facilities from "@/pages/Facilities";
import Room from "@/pages/Room";

Vue.use(Router);

export default new Router({
    // mode: "history",
    routes: [
        {
            path: "/",
            name: "login",
            component: Login
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/sign-up",
            name: "signUp",
            component: SignUp
        },
        {
            path: "/forgot-password",
            name: "forgotPassword",
            component: ForgotPassword
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard
        },
        {
            path: "/warehouse",
            name: "warehouse",
            component: Warehouse
        },
        {
            path: "/problem",
            name: "problem",
            component: Problem
        },
        {
            path: "/facilities",
            name: "facilities",
            component: Facilities
        },
        {
            path: "/room",
            name: "room",
            component: Room
        },

    ]

});