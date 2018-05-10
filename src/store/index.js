import Vue from 'vue'
import Vuex from 'vuex'

import note from './modules/note'
import status from './modules/status'
import user from './modules/user'
import search from './modules/search'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        note,
        status,
        user,
        search
    }
})