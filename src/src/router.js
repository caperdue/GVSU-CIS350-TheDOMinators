import VueRouter from "vue-router";
import Vue from 'vue';
import Home from './components/Home.vue';
import Prices from './components/Prices.vue';
import News from './components/News.vue';

Vue.use(VueRouter);


const cryptRoutes = [
    {
        name: "Prices",
        path: "/prices",
        component: Prices,
    },

    {
        name: "News",
        path: "/news",
        component: News,
    },
    {
        name: "Home",
        path: "/",
        component: Home,
    },
    // {

    // },
];


export const AppRouter = new VueRouter({
    mode: 'history',
    routes: cryptRoutes,
});