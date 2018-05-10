<template>
  <div id="NoteDetail" v-if="noteDetailJson">
    <Banner :bannerDate="noteDetailJson.images"></Banner>
     <div class="note-header">
        <i class="iconfont icon-zuojiantou1" @click="back()"></i>
        <span>{{noteDetailJson.user.nickname}}</span>
        <i class="iconfont icon-more"></i>
    </div>
    <NoteContent :detailContent="noteDetailJson" :noteContentData="noteContentJson"></NoteContent>  
    <CommentSummary :summary="NoteCommentJson"></CommentSummary>
  <div class="bottom-bar-warp">
        <div class="note-data">
            <ul>
                <li>
                    <i class="iconfont icon-like"></i>
                    <span>赞</span>
                    <span v-if="noteDetailJson.likes">· {{noteDetailJson.likes}}</span>
                </li>
                <li>
                    <i class="iconfont icon-pinglun"></i>
                    <span>评论</span>
                    <span v-if="noteDetailJson.comments">· {{noteDetailJson.comments}}</span>
                </li>
                <li>
                    <i class="iconfont icon-star"></i>
                    <span>收藏</span>
                    <span v-if="noteDetailJson.collects">· {{noteDetailJson.collects}}</span>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axiosRq from "../config";
import Banner from "@/components/Banner";
import NoteContent from "@/components/NoteContent";
import CommentSummary from "@/components/CommentSummary";

export default {
  name: "NoteDetail",
  components: {
    Banner,
    NoteContent,
    CommentSummary
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getNoteDetailData", "getNoteCommentData"]),
    back() {
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapState({
      noteDetailJson: state => state.note.notedetail.data,
      noteContentJson: state => state.note.notecontent,
      NoteCommentJson: state => state.note.notecomment.data
    })
  },
  mounted() {
    let id = this.$route.params.id;
    console.log(id);
    this.getNoteDetailData({ id });
    // debugger
    this.getNoteCommentData({ id: id, type: "summary" });
  }
};
</script>

<style lang="scss">
@import "../assets/css/variables.scss";
.note-header {
  width: 100%;
  height: $header-height;
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  color: $font-title-color;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  align-items: center;
  i {
    font-size: $font-size + 6;
    color: $white;
  }
}
.bottom-bar-warp {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 36px;
  background: lighten($black, 5%);
  .note-data {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    ul {
      display: flex;
      li {
        flex: auto;
        text-align: center;
        color: $white;
        i {
          margin-right: 2px;
        }
      }
    }
  }
}
</style>

