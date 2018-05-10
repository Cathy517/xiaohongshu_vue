import axiosRq from "../../config"

export default {
    state: {
        notedetail: [], //笔记详情
        notecontent: [], //笔记内容 为desc_json返回时，需要合并为html
        notecomment: [] //笔记评论
    },
    mutations: {
        GETNOTEDETAIL(state, res) {
            state.notedetail = res
        },
        GETNOTECONTENT(state, res) {
            state.notecontent = res
        },
        GETNOTECOMMENT(state, res) {
            state.notecomment = res
        }
    },
    actions: {
        //详情
        async getNoteDetailData({ commit }, { id }) {
            let params = {
                'noteID': id
            }
            let res = await axiosRq('GET', 'note_item/' + id, params)
            console.log(res);
            commit('GETNOTEDETAIL', res);
            if (res.data.desc_json) {
                commit('GETNOTECONTENT', formatContent(res.data.desc_json));
            }
            return res;
        },
        async getNoteCommentData({ commit }, { id, type, pageSize }) {
            let params = {
                type: type,
                page_size: pageSize
            }
            let res = await axiosRq('GET', 'note_comment/' + id, params)
            console.log(res);
            commit('GETNOTECOMMENT', res)
            return res;
        }
    }
}

function formatContent(descJson) {
    var str = '';
    descJson.map(data => {
        if (data.tag) {
            if (data.inline_style_ranges.length > 0) {
                data.inline_style_ranges.map(range => {
                    str += `<${data.tag} class="paragraph">${data.text.substr(0,range.offset)}`;
                    str += `<span style="font-weight:${range.style}">${data.text.substr(range.offset,range.length)}</span>`;
                    str += `${data.text.substring(range.length)}</${data.tag}>`;
                })

            } else {
                str += `<${data.tag} class="paragraph">${data.text}</${data.tag}>`

            }
        } else if (data.image) {
            str += `<img src=${data.image}>`
        }
    })
    return str;
}