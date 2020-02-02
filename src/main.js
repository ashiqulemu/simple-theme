import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/theme.scss'
import './assets/sass/_soumik.scss'
import './assets/sass/juhurul.scss'
import '@mdi/font/css/materialdesignicons.css'
import 'vue-slick/src/slickCarousel'
// Theme partial scss

Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: h => h(App),

    methods: {

        scrollToElement(divClass) {
            if (this.$route.path != "/") {
                router.push({path: '/'})
            }
            const el = this.$el.getElementsByClassName(divClass)[0];
            if (el) {
                el.scrollIntoView(true);
                window.scroll({top:window.scrollY - 60,behavior: "smooth"});

            }


        },


    },

    mounted(){

    },



}).$mount('#app')


