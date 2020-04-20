import Vue from 'vue'
import App from './App.vue'
import api from './api'
import store from './store/store.js'
import VModal from 'vue-js-modal'

Vue.use(VModal);
Vue.config.productionTip = false;
Vue.prototype.$http = api;

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
