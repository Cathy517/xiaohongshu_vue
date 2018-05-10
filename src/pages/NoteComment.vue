<template>
  <div id="NoteComment" v-if="CommentsJson">
    <div class="header">
       <i class="iconfont icon-zuojiantou" @click="back()"></i>
      <span>{{CommentsJson.total}} 条评论</span>
    </div>
    <div class="NoteComment-content">
      <ul class="comment">
        <li class="comment-item" v-for="(item,index) in CommentsJson.comments" :key="index">
          <div class="avatar">
            <img :src="item.user.image" alt="" class="avatar-img">
            <img v-if="item.user.official_verified" src="@/assets/images/official.jpg" alt="小红书官方认证" class="official-verified-icon">
          </div>
          <div class="comment-content">
            <div class="comment-info">
              <div class="nick-name">{{item.user.nickname}}</div>
              <p>{{item.content}}</p>
            </div>
            <div class="comment-stats">
              <div class="publish-time">{{item.time}}</div>
              <div class="huifu">回复 · </div>
              <div class="likes">
                  <i class="iconfont icon-dianzan"></i> {{item.likes}}
              </div>
            </div>
            <div v-if="item.sub_comments.length!=0" class="reply">
              <ul>
                <li class="sub_comment" v-for="(rep,index) of item.sub_comments" :key="index">
                  <span class="avatar">
                    <img :src="rep.user.image" alt="" class="avatar-img">
                    <img v-if="rep.user.official_verified" src="@/assets/images/official.jpg" alt="小红书官方认证" class="official-verified-icon">
                  </span>
                  <span class="name">{{rep.user.nickname}}</span>
                  <span class="name" v-if="rep.user.id==CommentsJson.target_note.user.id">(作者)</span>
                  <span class="name" v-if="rep.target_comment.user.id!==item.user.id">回复{{rep.target_comment.user.nickname}}</span>
                  <span class="reply-content">: {{rep.content}}</span>
                    <div class="comment-stats">
                      <div class="publish-time">{{rep.time}}</div>
                      <div class="huifu">回复 · </div>
                      <div class="likes"><i class="iconfont icon-dianzan"></i> {{rep.likes}}</div>
                    </div>
                </li>
              </ul>
              <div class="sub_comments_total">共{{item.sub_comments_total}}条回复 <i class="iconfont icon-xiajiantou"></i>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import axiosRq from "../config";

export default {
  name: "NoteComment",
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getNoteCommentData"]),
    back() {
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapState({
      CommentsJson: state => state.note.notecomment.data
    })
  },
  mounted() {
    let id = this.$route.params.id;
    let pagesize = this.$route.query.page_size;
    console.log(pagesize);
    this.getNoteCommentData({ id: id, page_size: pagesize });
  }
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
#NoteComment {
  overflow: hidden;
  .header {
    position: fixed;
    width: 100%;
    z-index: 100;
    display: flex;
    height: $header-height;
    line-height: $header-height;
    background: #f8f8f8;
    border-bottom: 1px solid $grey;
    span {
      flex: 1;
      text-align: center;
      color: $font-color;
      font-size: $font-size + 2;
    }
    i {
      color: $i-color;
      font-size: $font-size + 10;
      padding-left: 15px;
    }
  }
  .avatar {
    position: relative;
    .avatar-img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .official-verified-icon {
      position: absolute;
      width: 11px;
      height: 11px;
      display: block;
      right: 3px;
      bottom: 8px;
      z-index: 10;
    }
  }
  .NoteComment-content {
    margin-top: $header-height;
    background: $white;
    .comment {
      &-item {
        display: flex;
        padding: 8px 15px;
        .avatar {
          min-width: 45px;
        }
        .comment-content {
          width: 100%;
          .comment-info {
            font-size: $font-size;
            color: $font-color;
            .nick-name {
              color: $font-detail-color;
            }
            p {
              padding: 5px 0;
            }
          }
          .comment-stats {
            display: flex;
            font-size: $font-size - 2;
            color: $font-detail-color;
            .publish-time {
              flex: auto;
            }
            .likes {
              margin-left: 5px;
              i {
                font-size: $font-size - 2;
              }
            }
          }
          .reply {
            background: $body-color;
            font-size: $font-size - 2;
            padding: 6px 10px;
            margin-top: 6px;
            .sub_comment {
              padding: 5px 0;
              .avatar {
                img {
                  width: 22px;
                  height: 22px;
                }
              }
              .name {
                color: $font-detail-color;
              }
              .reply-content {
                color: $font-color;
              }
            }
            .sub_comments_total {
              text-align: center;
              padding: 3px 0;
              color: $font-detail-color;
            }
          }
        }
      }
    }
  }
}
</style>

