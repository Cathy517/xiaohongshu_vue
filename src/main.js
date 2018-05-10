// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import "@/assets/css/style.scss"

import '@/filter.js'

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    axios,
    Element,
    components: { App },
    template: '<App/>'
})