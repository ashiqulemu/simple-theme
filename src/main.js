import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/theme.scss'
import './assets/sass/soumik.scss'
import './assets/sass/juhurul.scss'

// Theme partial scss

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
