export default {
    state: {
        show: false,
        searchWord: ''
    },
    mutations: {
        SHOW_SLIDE(state, res) {
            state.show = res;
        },
        GETSEARCHWORD(state, res) {
            state.searchWord = res
        }
    },
    actions: {

    }
}