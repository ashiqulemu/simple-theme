import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
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
        path: '/blog-list-left-sidebar',
        name: 'blogListLeft',
        component: require('../views/blog/blog-list-left').default
    },
    {
        path: '/blog-list-right-sidebar',
        name: 'blogListRight',
        component: require('../views/blog/blog-list-right').default
    },
    {
        path: '/blog-details',
        name: 'blogDetails',
        component: require('../views/blog/blog-details').default
    },
    {
        path: '/blog-details-left-sidebar',
        name: 'blogDetailsLeft',
        component: require('../views/blog/blog-details-left').default
    },
    {
        path: '/blog-details-right-sidebar',
        name: 'blogDetailsRight',
        component: require('../views/blog/blog-details-right').default
    },
    {
        path: '/coming-soon',
        name: 'comingSoon',
        component: require('../views/pages/coming-soon').default
    },
    {
        path: '/thank-you',
        name: 'thankYou',
        component: require('../views/pages/thank-you').default
    },
    {
        path: '/error',
        name: 'error',
        component: require('../views/pages/404').default
    },
    {
        path: '/*',
        name: 'error-page',
        component: require('../views/pages/404').default
    },


]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})

export default router
