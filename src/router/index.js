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
        path: '/review',
        name: 'review',
        component: require('../views/pages/review').default
    },
    {
        path: '/forgot-password',
        name: 'forgotPassword',
        component: require('../views/pages/forget-password').default
    },
    {
        path: '/faq',
        name: 'faq',
        component: require('../views/pages/faq').default
    },
    {
        path: '/download',
        name: 'download',
        component: require('../views/pages/download').default
    },
    {
        path: '/blog-list',
        name: 'blogList',
        component: require('../views/blog/blog-list').default
    },
    {
        path: '/blog-details',
        name: 'blogDetails',
        component: require('../views/blog/blog-details').default
    },
    {
        path: '/404',
        name: '404',
        component: require('../views/pages/404').default
    },
    {
        path: '/coming-soon',
        name: 'comingSoon',
        component: require('../views/pages/coming-soon').default
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
