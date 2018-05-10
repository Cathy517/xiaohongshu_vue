import axiosRq from "../../config"

export default {
    state: {
        userinfo: [],
        usernote: [],
        userboard: []
    },
    mutations: {
        GETUSERINFO(state, res) {
            state.userinfo = res
        },
        GETUSERNOTE(state, res) {
            state.usernote = res
        },
        GETUSERBOARD(state, res) {
            state.userboard = res
        }
    },
    actions: {
        async getUserData({ commit }, { id }) {
            let params = {
                'userID': id
            }
            let res = await axiosRq('GET', 'user/' + id, params)
            console.log(res);
            commit('GETUSERINFO', res);
            return res;
        },

        async getNoteData({ commit }, { id, page_size, page }) {
            let params = {
                page_size: page_size,
                page: page,
            }
            let res = await axiosRq('GET', 'user_note/' + id, params);
            console.log(res);
            commit('GETUSERNOTE', res);
            return res;
        },

        async getBoardData({ commit }, { id, page_size, page }) {
            let params = {
                page_size: page_size,
                page: page
            }
            let res = await axiosRq('GET', 'user_board/' + id, params);
            console.log(res);
            commit('GETUSERBOARD', res);
            return res;
        }
    }
}