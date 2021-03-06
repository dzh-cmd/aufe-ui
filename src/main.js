import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'
import Vuex from 'vuex'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(Vuex);
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(mavonEditor)
Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
