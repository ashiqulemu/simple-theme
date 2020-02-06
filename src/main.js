import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/theme.scss'
import '@mdi/font/css/materialdesignicons.css'
import 'vue-slick/src/slickCarousel'
import WOW from './assets/js/wow.min'
// Theme partial scss

Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: h => h(App),

    mounted(){
      new WOW.WOW().init();
    },
    methods: {

        scrollToElement(divClass) {
            if (this.$route.path != "/") {
                router.push({path: '/'})
            }
            this.$nextTick(() => {
                const el = this.$el.getElementsByClassName(divClass)[0];
                if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 60;
                    window.scrollTo({top: y, behavior: 'smooth'});
                }
            })
        },
    },


}).$mount('#app')


