import axiosRq from "../../config"

export default {
    state: {
        hotword: [],
        keyword: []
    },
    mutations: {
        GETHOTWORD(state, res) {
            state.hotword = res
        },
        GETKEYWORD(state, res) {
            state.keyword = res
        }
    },
    actions: {
        async getHotwordData({ commit }, { type }) {
            let res = await axiosRq('GET', 'search/' + type);
            console.log(res);
            commit('GETHOTWORD', res);
            return res;
        },
        async getKeywordData({ commit }, { type, keyword, page, page_size }) {
            let params = {
                keyword: keyword,
                page: page,
                page_size: page_size
            }
            let res = await axiosRq('GET', 'search/' + type, params);
            console.log(res);
            commit('GETKEYWORD', res);
            return res;
        }
    }
}