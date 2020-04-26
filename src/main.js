import Vue from 'vue'
import App from './App.vue'
import api from './api'
import VueRouter from 'vue-router'
import store from './store/store.js'
import router from "./router"
import '@/assets/css/tailwind.css'

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.prototype.$http = api;

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
