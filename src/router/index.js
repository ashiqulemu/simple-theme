import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: require('../views/Home').default
    },
    {
        path: '/sign-in',
        name: 'signIn',
        component: require('../views/pages/sign-in').default
    },
    {
        path: '/sign-up',
        name: 'signUp',
        component: require('../views/pages/sign-up').default
    },
    {
        path: '/404',
        name: '404',
        component: require('../views/pages/404').default
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
